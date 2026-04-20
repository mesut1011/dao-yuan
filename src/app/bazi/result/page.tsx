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
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl animate-spin mb-4">☯️</div>
          <p className="text-green-800 font-medium">Analyzing your destiny...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Your Bazi Destiny Chart</h1>
          <p className="text-gray-600">Based on Traditional Chinese Metaphysics</p>
        </div>

        {/* Bazi Chart */}
        {baziData && (
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-green-800 mb-4 text-center">Four Pillars (八字四柱)</h2>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="bg-green-700 text-white rounded-lg p-4">
                <div className="text-sm opacity-80">Year</div>
                <div className="text-2xl font-bold">{baziData.year?.gan || '甲'}</div>
                <div className="text-lg">{baziData.year?.zhi || '子'}</div>
              </div>
              <div className="bg-green-600 text-white rounded-lg p-4">
                <div className="text-sm opacity-80">Month</div>
                <div className="text-2xl font-bold">{baziData.month?.gan || '乙'}</div>
                <div className="text-lg">{baziData.month?.zhi || '丑'}</div>
              </div>
              <div className="bg-green-500 text-white rounded-lg p-4">
                <div className="text-sm opacity-80">Day</div>
                <div className="text-2xl font-bold">{baziData.day?.gan || '丙'}</div>
                <div className="text-lg">{baziData.day?.zhi || '寅'}</div>
              </div>
              <div className="bg-green-400 text-white rounded-lg p-4">
                <div className="text-sm opacity-80">Hour</div>
                <div className="text-2xl font-bold">{baziData.hour?.gan || '丁'}</div>
                <div className="text-lg">{baziData.hour?.zhi || '卯'}</div>
              </div>
            </div>
          </div>
        )}

        {/* AI Analysis */}
        {analysis && (
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-green-800 mb-4">AI Destiny Analysis</h2>
            <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap leading-relaxed">
              {analysis}
            </div>
          </div>
        )}

        {/* WhatsApp CTA */}
        <div className="bg-gradient-to-r from-green-100 to-amber-100 rounded-2xl p-6 mb-8 text-center border-2 border-green-200">
          <h3 className="text-xl font-bold text-green-800 mb-2">🔮 Need Deeper Insights?</h3>
          <p className="text-gray-600 mb-4">
            Get a comprehensive personalized report covering career, wealth, relationships, and annual fortune predictions.
          </p>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition"
          >
            <span className="text-xl">💬</span> Chat on WhatsApp for Details
          </a>
          <p className="text-sm text-gray-500 mt-3">Response within 24 hours</p>
        </div>

        <div className="text-center">
          <a href="/" className="text-green-700 hover:text-amber-600">← Back to Home</a>
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
