'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function BaZiPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    gender: 'male',
    calendarType: 'solar',
    birthDate: '',
    birthTime: '12:00',
    birthPlace: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 保存到 sessionStorage
    sessionStorage.setItem('bazi_form_data', JSON.stringify(formData))
    
    // 跳转到结果页
    router.push('/bazi/result')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dao-cream to-dao-light">
      {/* Header */}
      <div className="bg-dao-green py-12 text-center">
        <h1 className="text-4xl font-serif text-white mb-2">☯ 八字命理</h1>
        <p className="text-dao-gold">探寻命运的奥秘</p>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="card-dao">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 姓名 */}
            <div>
              <label className="block text-dao-green font-semibold mb-2">
                姓名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="input-dao"
                placeholder="请输入您的姓名"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* 性别 */}
            <div>
              <label className="block text-dao-green font-semibold mb-2">性别</label>
              <div className="flex space-x-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="mr-2 accent-dao-gold"
                  />
                  <span>男</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="mr-2 accent-dao-gold"
                  />
                  <span>女</span>
                </label>
              </div>
            </div>

            {/* 公历/农历切换 */}
            <div>
              <label className="block text-dao-green font-semibold mb-2">历法</label>
              <div className="flex space-x-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="calendarType"
                    value="solar"
                    checked={formData.calendarType === 'solar'}
                    onChange={(e) => setFormData({ ...formData, calendarType: e.target.value })}
                    className="mr-2 accent-dao-gold"
                  />
                  <span>公历</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="calendarType"
                    value="lunar"
                    checked={formData.calendarType === 'lunar'}
                    onChange={(e) => setFormData({ ...formData, calendarType: e.target.value })}
                    className="mr-2 accent-dao-gold"
                  />
                  <span>农历</span>
                </label>
              </div>
            </div>

            {/* 出生日期 */}
            <div>
              <label className="block text-dao-green font-semibold mb-2">
                出生日期 <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                required
                className="input-dao"
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              />
            </div>

            {/* 出生时间 */}
            <div>
              <label className="block text-dao-green font-semibold mb-2">
                出生时辰 <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                required
                className="input-dao"
                value={formData.birthTime}
                onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
              />
              <p className="text-sm text-gray-500 mt-1">
                请尽量填写准确的出生时间，精确到小时
              </p>
            </div>

            {/* 出生地 */}
            <div>
              <label className="block text-dao-green font-semibold mb-2">出生地</label>
              <input
                type="text"
                className="input-dao"
                placeholder="如：上海、北京"
                value={formData.birthPlace}
                onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
              />
              <p className="text-sm text-gray-500 mt-1">
                用于判断地区经度对时辰的影响（可选）
              </p>
            </div>

            {/* 提交按钮 */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-dao text-lg"
              >
                {isSubmitting ? '计算中...' : '☯ 开始命盘分析'}
              </button>
            </div>
          </form>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-dao-light rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              <strong>免责声明：</strong>命理测算仅供娱乐参考，
              命运掌握在自己手中，不应过分依赖命理结果。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
