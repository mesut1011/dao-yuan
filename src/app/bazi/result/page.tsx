'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { BaZiResult, generateBaZiResult } from '@/lib/bazi'

interface AnalysisResult {
  success: boolean
  analysis: string
  data: BaZiResult
}

export default function BaZiResultPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState<BaZiResult | null>(null)
  const [analysis, setAnalysis] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [analysisLoading, setAnalysisLoading] = useState(false)

  useEffect(() => {
    // 从 sessionStorage 获取数据
    const storedData = sessionStorage.getItem('bazi_form_data')
    
    if (!storedData) {
      router.push('/bazi')
      return
    }

    try {
      const formData = JSON.parse(storedData)
      const baZiResult = generateBaZiResult(
        formData.name,
        formData.gender,
        formData.birthDate,
        formData.birthTime,
        formData.birthPlace
      )
      setResult(baZiResult)
      setLoading(false)

      // 自动调用AI分析
      fetchAnalysis(baZiResult)
    } catch (err) {
      setError('数据解析错误')
      setLoading(false)
    }
  }, [router])

  const fetchAnalysis = async (baZiData: BaZiResult) => {
    setAnalysisLoading(true)
    try {
      const response = await fetch('/api/bazi/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(baZiData)
      })

      const data: AnalysisResult = await response.json()
      
      if (data.success) {
        setAnalysis(data.analysis)
      } else {
        setAnalysis('命理分析服务暂时不可用，请稍后重试。')
      }
    } catch (err) {
      setAnalysis('网络错误，请检查网络连接后重试。')
    } finally {
      setAnalysisLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dao-cream">
        <div className="text-center">
          <div className="text-6xl animate-pulse mb-4">☯</div>
          <p className="text-dao-green text-xl">命盘推算中...</p>
        </div>
      </div>
    )
  }

  if (error || !result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dao-cream">
        <div className="text-center">
          <p className="text-red-500 text-xl mb-4">{error || '数据错误'}</p>
          <Link href="/bazi" className="btn-dao">
            返回重新测算
          </Link>
        </div>
      </div>
    )
  }

  const wuXingList = [
    { name: '木', count: result.wuXing.木 || 0, color: 'bg-green-500' },
    { name: '火', count: result.wuXing.火 || 0, color: 'bg-red-500' },
    { name: '土', count: result.wuXing.土 || 0, color: 'bg-yellow-600' },
    { name: '金', count: result.wuXing.金 || 0, color: 'bg-gray-400' },
    { name: '水', count: result.wuXing.水 || 0, color: 'bg-blue-500' }
  ]

  const maxCount = Math.max(...wuXingList.map(w => w.count), 1)

  return (
    <div className="min-h-screen bg-gradient-to-b from-dao-cream to-dao-light pb-12">
      {/* Header */}
      <div className="bg-dao-green py-8 text-center">
        <h1 className="text-3xl font-serif text-white mb-2">☯ 命盘分析</h1>
        <p className="text-dao-gold">为 {result.name} 测算</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Basic Info */}
        <div className="card-dao">
          <h2 className="text-xl text-dao-green font-serif mb-4">基本信息</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-500">姓名</p>
              <p className="font-semibold">{result.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">性别</p>
              <p className="font-semibold">{result.gender === 'male' ? '男' : '女'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">出生日期</p>
              <p className="font-semibold">{result.birthDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">出生时辰</p>
              <p className="font-semibold">{result.birthTime}</p>
            </div>
          </div>
        </div>

        {/* BaZi Display */}
        <div className="card-dao">
          <h2 className="text-xl text-dao-green font-serif mb-6">四柱八字</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-dao-gold">
                  <th className="py-2 px-4 text-center">年柱</th>
                  <th className="py-2 px-4 text-center">月柱</th>
                  <th className="py-2 px-4 text-center">日柱</th>
                  <th className="py-2 px-4 text-center">时柱</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-3xl font-serif">
                  <td className="py-4 px-4 text-center">
                    <div className="flex flex-col items-center">
                      <span>{result.ganZhi.year}</span>
                      <span className="text-sm text-dao-gold mt-1">{result.shiShen.year}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex flex-col items-center">
                      <span>{result.ganZhi.month}</span>
                      <span className="text-sm text-dao-gold mt-1">{result.shiShen.month}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center bg-dao-light/50 rounded">
                    <div className="flex flex-col items-center">
                      <span className="text-dao-green">{result.ganZhi.day}</span>
                      <span className="text-sm text-dao-gold mt-1">{result.shiShen.day}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex flex-col items-center">
                      <span>{result.ganZhi.hour}</span>
                      <span className="text-sm text-dao-gold mt-1">{result.shiShen.hour}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* NaYin */}
          <div className="mt-6 p-4 bg-dao-light rounded-lg text-center">
            <p className="text-sm text-gray-500">纳音五行</p>
            <p className="text-2xl text-dao-green font-serif">{result.naYin}</p>
          </div>
        </div>

        {/* WuXing Chart */}
        <div className="card-dao">
          <h2 className="text-xl text-dao-green font-serif mb-6">五行分布</h2>
          
          <div className="space-y-4">
            {wuXingList.map((item) => (
              <div key={item.name} className="flex items-center">
                <span className="w-8 font-semibold">{item.name}</span>
                <div className="flex-1 mx-4">
                  <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`${item.color} h-full rounded-full transition-all duration-500`}
                      style={{ width: `${(item.count / maxCount) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <span className="w-8 text-right font-semibold">{item.count}</span>
              </div>
            ))}
          </div>

          {/* WuXing Analysis */}
          <div className="mt-6 p-4 bg-dao-light rounded-lg">
            <p className="text-sm text-gray-600">
              {(() => {
                const sorted = [...wuXingList].sort((a, b) => b.count - a.count)
                const strongest = sorted[0]
                const weakest = sorted[sorted.length - 1]
                return `您的命局中${strongest.name}气最旺，${weakest.name}相对较弱。`
              })()}
            </p>
          </div>
        </div>

        {/* AI Analysis */}
        <div className="card-dao">
          <h2 className="text-xl text-dao-green font-serif mb-4 flex items-center">
            <span className="mr-2">🤖</span>
            AI 命理解读
          </h2>
          
          {analysisLoading ? (
            <div className="text-center py-8">
              <div className="text-4xl animate-pulse mb-4">☯</div>
              <p className="text-gray-500">AI 正在分析命盘，请稍候...</p>
            </div>
          ) : (
            <div className="prose prose-green max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed bg-dao-light/50 p-6 rounded-lg">
                {analysis.split('\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('1.') || paragraph.startsWith('2.') || 
                      paragraph.startsWith('3.') || paragraph.startsWith('4.') ||
                      paragraph.startsWith('5.') || paragraph.startsWith('6.')) {
                    return (
                      <p key={idx} className="font-semibold text-dao-green mt-4 mb-2">
                        {paragraph}
                      </p>
                    )
                  }
                  if (paragraph.trim()) {
                    return <p key={idx} className="mb-2">{paragraph}</p>
                  }
                  return null
                })}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/bazi" className="btn-dao text-center">
            重新测算
          </Link>
          <Link href="/" className="btn-dao text-center bg-dao-green hover:bg-dao-dark">
            返回首页
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm text-gray-500 px-4">
          <p>命理测算仅供娱乐参考</p>
          <p>命运掌握在自己手中，祝您前程似锦</p>
        </div>
      </div>
    </div>
  )
}
