'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'

function ResultContent() {
  const searchParams = useSearchParams()
  const [analysis, setAnalysis] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [baziData, setBaziData] = useState<any>(null)

  const whatsappNumber = '8615607671586'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi, I just received my Bazi analysis and would like to get a detailed report.`

  useEffect(() => {
    const fetchData = async () => {
      const name = searchParams.get('name') || ''
      const gender = searchParams.get('gender') || 'Male'
      const birthDate = searchParams.get('birthDate') || ''
      const birthHour = searchParams.get('birthHour') || '12'
      const birthPlace = searchParams.get('birthPlace') || ''

      try {
        const res = await fetch('/api/bazi/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, gender, birthDate, birthHour, birthPlace }),
        })
        const data = await res.json()
        setBaziData(data.bazi)
        setAnalysis(data.analysis)
      } catch (error) {
        console.error(error)
      }
      setLoading(false)
    }
    fetchData()
  }, [searchParams])

  if (loading) {
    return (
      <div className="min-h-screen ink-wash-bg flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl mb-6 yin-yang-spin inline-block">☯</div>
          <p className="text-2xl text-[#1a4d2e] title-brush">分析命盘中...</p>
          <p className="text-gray-500 mt-2">Analyzing your destiny...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen ink-wash-bg py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3 yin-yang-spin inline-block">☯</div>
          <h1 className="text-3xl title-brush text-[#1a4d2e]">命盘解析</h1>
          <p className="text-[#5a8f7b]">Your Bazi Destiny Chart</p>
        </div>

        {/* Bazi Chart - Four Pillars */}
        {baziData && (
          <div className="tao-card rounded-2xl p-6 mb-8">
            <h2 className="text-xl title-brush text-center text-[#1a4d2e] mb-6">
              八字四柱 Four Pillars
            </h2>
            <div className="grid grid-cols-4 gap-3 text-center">
              {/* Year */}
              <div className="relative">
                <div className="bg-[#1a4d2e] text-white rounded-t-xl py-2 text-sm">年柱 Year</div>
                <div className="bg-gradient-to-b from-[#1a4d2e]/10 to-white border-x-2 border-b-2 border-[#1a4d2e]/20 rounded-b-xl py-4">
                  <div className="text-3xl font-bold text-[#1a4d2e]">{baziData.year?.gan || '甲'}</div>
                  <div className="text-xl text-[#5a8f7b]">{baziData.year?.zhi || '子'}</div>
                </div>
              </div>
              {/* Month */}
              <div className="relative">
                <div className="bg-[#2d5a4a] text-white rounded-t-xl py-2 text-sm">月柱 Month</div>
                <div className="bg-gradient-to-b from-[#2d5a4a]/10 to-white border-x-2 border-b-2 border-[#2d5a4a]/20 rounded-b-xl py-4">
                  <div className="text-3xl font-bold text-[#2d5a4a]">{baziData.month?.gan || '乙'}</div>
                  <div className="text-xl text-[#5a8f7b]">{baziData.month?.zhi || '丑'}</div>
                </div>
              </div>
              {/* Day */}
              <div className="relative">
                <div className="bg-[#5a8f7b] text-white rounded-t-xl py-2 text-sm">日柱 Day</div>
                <div className="bg-gradient-to-b from-[#5a8f7b]/10 to-white border-x-2 border-b-2 border-[#5a8f7b]/20 rounded-b-xl py-4">
                  <div className="text-3xl font-bold text-[#5a8f7b]">{baziData.day?.gan || '丙'}</div>
                  <div className="text-xl text-[#5a8f7b]">{baziData.day?.zhi || '寅'}</div>
                </div>
              </div>
              {/* Hour */}
              <div className="relative">
                <div className="bg-[#c9a227] text-white rounded-t-xl py-2 text-sm">时柱 Hour</div>
                <div className="bg-gradient-to-b from-[#c9a227]/10 to-white border-x-2 border-b-2 border-[#c9a227]/20 rounded-b-xl py-4">
                  <div className="text-3xl font-bold text-[#c9a227]">{baziData.hour?.gan || '丁'}</div>
                  <div className="text-xl text-[#5a8f7b]">{baziData.hour?.zhi || '卯'}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AI Analysis */}
        {analysis && (
          <div className="tao-card rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">☯</span>
              <h2 className="text-xl title-brush text-[#1a4d2e]">命理分析 Destiny Analysis</h2>
            </div>
            <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap leading-relaxed">
              {analysis}
            </div>
          </div>
        )}

        {/* WhatsApp CTA */}
        <div className="scroll-container rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">🔮</div>
          <h3 className="text-xl title-brush text-[#1a4d2e] mb-3">详批命理报告</h3>
          <p className="text-gray-600 mb-6">
            Get a comprehensive personalized report covering career, wealth, relationships, and annual fortune predictions.
          </p>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-tao btn-gold"
          >
            <span className="text-xl">💬</span> 咨询详批 Chat on WhatsApp
          </a>
          <p className="text-sm text-gray-500 mt-3">Response within 24 hours</p>
        </div>

        <div className="text-center mt-8">
          <a href="/" className="text-[#1a4d2e] hover:text-[#c9a227] transition">← 返回首页 Back to Home</a>
        </div>
      </div>
    </div>
  )
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ResultContent />
    </Suspense>
  )
}
