import { NextResponse } from 'next/server'

const QWEN_API_KEY = process.env.QWEN_API_KEY || 'sk-1ec5b9b5c27c4ff29b47a70defdc6c73'
const QWEN_API_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions'

// Heavenly Stems and Earthly Branches
const tianGan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
const diZhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']

// Simple Bazi calculation
function calculateBazi(year: number, month: number, day: number, hour: number) {
  // Simplified calculation - in production, use a proper algorithm
  const yearGan = tianGan[(year - 4) % 10]
  const yearZhi = diZhi[(year - 4) % 12]
  
  const monthGan = tianGan[(year * 12 + month + 3) % 10]
  const monthZhi = diZhi[(month + 1) % 12]
  
  const dayGan = tianGan[(year * 365 + month * 30 + day) % 10]
  const dayZhi = diZhi[(year * 365 + month * 30 + day) % 12]
  
  const hourGan = tianGan[(tianGan.indexOf(dayGan) * 2 + Math.floor(hour / 2)) % 10]
  const hourZhi = diZhi[Math.floor((hour + 1) / 2) % 12]

  return {
    year: { gan: yearGan, zhi: yearZhi },
    month: { gan: monthGan, zhi: monthZhi },
    day: { gan: dayGan, zhi: dayZhi },
    hour: { gan: hourGan, zhi: hourZhi },
  }
}

function buildPrompt(bazi: any, name: string, gender: string): string {
  return `You are a master of Chinese Bazi (Four Pillars) astrology with 20 years of experience. 
Analyze the following person's destiny chart and provide insights in English.

Person's Information:
- Name: ${name}
- Gender: ${gender}
- Four Pillars:
  * Year: ${bazi.year.gan}${bazi.year.zhi}
  * Month: ${bazi.month.gan}${bazi.month.zhi}
  * Day: ${bazi.day.gan}${bazi.day.zhi}
  * Hour: ${bazi.hour.gan}${bazi.hour.zhi}

Please provide a concise analysis (about 300-400 words) covering:

## 🌟 Core Personality
Brief description of their main character traits based on the Day Master.

## 💪 Strengths & Talents
2-3 key strengths and natural abilities.

## ⚠️ Challenges
1-2 areas that may need attention or improvement.

## 💼 Career Direction
Types of careers or industries that suit them well.

## 💕 Relationship Insights
General patterns in relationships and compatibility notes.

## 🍀 Lucky Elements
Favorable colors, directions, or elements that can enhance their fortune.

Keep the analysis positive, practical, and accessible to English readers unfamiliar with Chinese metaphysics.
End with an encouraging note.`
}

async function getAIAnalysis(bazi: any, name: string, gender: string): Promise<string> {
  const prompt = buildPrompt(bazi, name, gender)
  
  const response = await fetch(QWEN_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${QWEN_API_KEY}`
    },
    body: JSON.stringify({
      model: 'qwen-plus',
      messages: [
        { role: 'system', content: 'You are an expert Bazi astrologer providing readings in English.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 1000
    })
  })

  if (!response.ok) {
    throw new Error(`AI API error: ${response.status}`)
  }

  const result = await response.json()
  return result.choices[0].message.content
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, gender, birthDate, birthHour, birthPlace } = data
    
    if (!birthDate) {
      return NextResponse.json({ error: 'Birth date is required' }, { status: 400 })
    }

    // Parse birth date
    const [year, month, day] = birthDate.split('-').map(Number)
    const hour = parseInt(birthHour) || 12

    // Calculate Bazi
    const bazi = calculateBazi(year, month, day, hour)
    
    // Get AI analysis
    const analysis = await getAIAnalysis(bazi, name || 'User', gender || 'Male')

    return NextResponse.json({ 
      success: true, 
      bazi,
      analysis 
    })
    
  } catch (error) {
    console.error('Bazi analysis error:', error)
    return NextResponse.json({ error: 'Failed to analyze' }, { status: 500 })
  }
}
