import { NextRequest, NextResponse } from 'next/server'

interface BaZiData {
  name: string
  gender: string
  birthDate: string
  birthTime: string
  birthPlace: string
  ganZhi: {
    year: string
    month: string
    day: string
    hour: string
  }
  wuXing: Record<string, number>
  shiShen: {
    year: string
    month: string
    day: string
    hour: string
  }
  naYin: string
}

export async function POST(request: NextRequest) {
  try {
    const data: BaZiData = await request.json()
    
    const apiKey = process.env.QWEN_API_KEY
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API密钥未配置' },
        { status: 500 }
      )
    }

    // 构建提示词
    const prompt = `你是一位精通中国传统命理的资深命理师。请根据以下八字信息，为用户进行详细的命理分析。

八字信息：
- 四柱：${data.ganZhi.year}年 | ${data.ganZhi.month}月 | ${data.ganZhi.day}日 | ${data.ganZhi.hour}时
- 五行分布：木${data.wuXing.木 || 0} 火${data.wuXing.火 || 0} 土${data.wuXing.土 || 0} 金${data.wuXing.金 || 0} 水${data.wuXing.水 || 0}
- 纳音五行：${data.naYin}
- 十神：年柱${data.shiShen.year} | 月柱${data.shiShen.month} | 日主${data.shiShen.day} | 时柱${data.shiShen.hour}

请从以下几个角度进行分析：
1. 命局特点分析（根据五行生克、十神组合）
2. 性格分析
3. 事业财运
4. 感情姻缘
5. 健康提示
6. 大运趋势

请用专业的命理知识，结合现代生活的理解，给出既有传统智慧又接地气的分析。语言要优雅有文采，符合道教文化的气质。回答用中文。`

    // 调用千问API
    const response = await fetch(
      'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'qwen-turbo',
          messages: [
            {
              role: 'system',
              content: '你是一位精通中国传统命理的资深命理师，说话文雅有内涵，融合传统文化与现代智慧。'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 2000
        })
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Qwen API Error:', response.status, errorText)
      return NextResponse.json(
        { error: 'AI分析服务暂时不可用，请稍后重试' },
        { status: 500 }
      )
    }

    const result = await response.json()
    const analysis = result.choices?.[0]?.message?.content || '分析生成失败'

    return NextResponse.json({
      success: true,
      analysis,
      data: {
        ...data,
        generatedAt: new Date().toISOString()
      }
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: '服务器内部错误' },
      { status: 500 }
    )
  }
}
