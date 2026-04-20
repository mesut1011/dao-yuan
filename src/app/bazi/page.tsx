'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function BaziPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    gender: 'Male',
    birthDate: '',
    birthHour: '',
    birthPlace: '',
    calendar: 'solar',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams({
      name: form.name,
      gender: form.gender,
      birthDate: form.birthDate,
      birthHour: form.birthHour || '12',
      birthPlace: form.birthPlace,
      calendar: form.calendar,
    })
    router.push(`/bazi/result?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 py-8 px-4">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">☯️</div>
          <h1 className="text-3xl font-bold text-green-800 mb-2">Bazi Destiny Analysis</h1>
          <p className="text-gray-600">Discover your life path through ancient Chinese wisdom</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={e => setForm({...form, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <select
                value={form.gender}
                onChange={e => setForm({...form, gender: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Calendar Type</label>
              <select
                value={form.calendar}
                onChange={e => setForm({...form, calendar: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value="solar">Solar (Gregorian)</option>
                <option value="lunar">Lunar (Chinese)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
            <input
              type="date"
              required
              value={form.birthDate}
              onChange={e => setForm({...form, birthDate: e.target.value})}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Birth Hour</label>
            <select
              value={form.birthHour}
              onChange={e => setForm({...form, birthHour: e.target.value})}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="">Unknown / Not Sure</option>
              <option value="0">11 PM - 1 AM (Rat 子)</option>
              <option value="1">1 AM - 3 AM (Ox 丑)</option>
              <option value="2">3 AM - 5 AM (Tiger 寅)</option>
              <option value="3">5 AM - 7 AM (Rabbit 卯)</option>
              <option value="4">7 AM - 9 AM (Dragon 辰)</option>
              <option value="5">9 AM - 11 AM (Snake 巳)</option>
              <option value="6">11 AM - 1 PM (Horse 午)</option>
              <option value="7">1 PM - 3 PM (Goat 未)</option>
              <option value="8">3 PM - 5 PM (Monkey 申)</option>
              <option value="9">5 PM - 7 PM (Rooster 酉)</option>
              <option value="10">7 PM - 9 PM (Dog 戌)</option>
              <option value="11">9 PM - 11 PM (Pig 亥)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Birth Place</label>
            <input
              type="text"
              value={form.birthPlace}
              onChange={e => setForm({...form, birthPlace: e.target.value})}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="City, Country (for solar time adjustment)"
            />
          </div>

          <div className="bg-amber-50 rounded-lg p-4 text-sm text-amber-800">
            <p>💡 <strong>Free Analysis:</strong> Get your Bazi chart and basic personality insights</p>
            <p className="mt-1">🔮 <strong>Premium Report:</strong> Detailed career, wealth, and relationship analysis available after</p>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-green-700 text-white rounded-lg font-bold text-lg hover:bg-green-800 transition"
          >
            Generate My Bazi Chart →
          </button>
        </form>

        <div className="text-center mt-6">
          <a href="/" className="text-green-700 hover:text-amber-600">← Back to Home</a>
        </div>
      </div>
    </div>
  )
}
