'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ResultPage() {
  const searchParams = useSearchParams()
  const [analysis, setAnalysis] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [baziData, setBaziData] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      const name = searchParams.get('name') || ''
      const gender = searchParams.get('gender') || 'Male'
      const birthDate = searchParams.get('birthDate') || ''
      const birthHour = searchParams.get('birthHour') || '12'

      try {
        const res = await fetch('/api/bazi/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, gender, birthDate, birthHour }),
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
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f0e6' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem' }}>☯</div>
          <p>Analyzing...</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f5f0e6', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', color: '#1a4d2e', margin: 0 }}>Your Bazi Chart</h1>
        </div>

        {baziData && (
          <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }}>
              <div>
                <div style={{ background: '#1a4d2e', color: 'white', padding: '0.5rem', borderRadius: '0.5rem 0.5rem 0 0' }}>Year</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{baziData.year?.gan}</div>
                <div>{baziData.year?.zhi}</div>
              </div>
              <div>
                <div style={{ background: '#1a4d2e', color: 'white', padding: '0.5rem', borderRadius: '0.5rem 0.5rem 0 0' }}>Month</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{baziData.month?.gan}</div>
                <div>{baziData.month?.zhi}</div>
              </div>
              <div>
                <div style={{ background: '#1a4d2e', color: 'white', padding: '0.5rem', borderRadius: '0.5rem 0.5rem 0 0' }}>Day</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{baziData.day?.gan}</div>
                <div>{baziData.day?.zhi}</div>
              </div>
              <div>
                <div style={{ background: '#1a4d2e', color: 'white', padding: '0.5rem', borderRadius: '0.5rem 0.5rem 0 0' }}>Hour</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{baziData.hour?.gan}</div>
                <div>{baziData.hour?.zhi}</div>
              </div>
            </div>
          </div>
        )}

        {analysis && (
          <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#1a4d2e' }}>Destiny Analysis</h2>
            <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>{analysis}</div>
          </div>
        )}

        <div style={{ background: '#fef3c7', borderRadius: '1rem', padding: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#1a4d2e' }}>Want Deeper Insights?</h3>
          <a href="https://wa.me/8615607671586?text=Hi, I want a detailed Bazi report." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#1a4d2e', color: 'white', padding: '1rem 2rem', borderRadius: '0.5rem', textDecoration: 'none' }}>
            Chat on WhatsApp
          </a>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/" style={{ color: '#1a4d2e' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  )
}
