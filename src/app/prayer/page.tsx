'use client'

import { useState } from 'react'
import Link from 'next/link'

const prayerTypes = [
  { id: 'health', icon: '💚', title: 'Health & Wellness', desc: 'Pray for good health and recovery', price: '$29' },
  { id: 'career', icon: '💼', title: 'Career Success', desc: 'Pray for career advancement and opportunities', price: '$49' },
  { id: 'wealth', icon: '💰', title: 'Wealth & Prosperity', desc: 'Pray for financial abundance and fortune', price: '$59' },
  { id: 'love', icon: '💕', title: 'Love & Marriage', desc: 'Pray for harmonious relationships and true love', price: '$49' },
  { id: 'academic', icon: '📚', title: 'Academic Success', desc: 'Pray for wisdom and exam success', price: '$29' },
  { id: 'peace', icon: '🕊️', title: 'Peace & Protection', desc: 'Pray for safety and peace of mind', price: '$29' },
  { id: 'ancestor', icon: '🕯️', title: 'Ancestor Memorial', desc: 'Honor and pray for departed loved ones', price: '$89' },
  { id: 'taisui', icon: '⛩️', title: 'Tai Sui Blessing', desc: 'Annual protection ritual for good fortune', price: '$59' },
]

export default function PrayerPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    gender: 'Male',
    birthDate: '',
    birthTime: '',
    address: '',
    wish: '',
    contact: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const selectedPrayer = prayerTypes.find(p => p.id === selected)

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
          <div className="text-6xl mb-4">🙏</div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">Prayer Request Submitted</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your sincere prayer request! Our Taoist priest will perform the ritual at an auspicious time. 
            You will be notified via WhatsApp upon completion.
          </p>
          <div className="bg-amber-50 rounded-lg p-4 mb-6 text-left">
            <p className="text-sm text-gray-600 mb-2">Name: <strong>{form.name}</strong></p>
            <p className="text-sm text-gray-600 mb-2">Prayer Type: <strong>{selectedPrayer?.title}</strong></p>
            <p className="text-sm text-gray-600">Contact: <strong>{form.contact}</strong></p>
          </div>
          <p className="text-sm text-amber-700 mb-6">
            💡 For urgent requests or special requirements, please contact us via WhatsApp
          </p>
          <Link href="/" className="inline-block px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800">
            Return Home
          </Link>
        </div>
      </div>
    )
  }

  if (selected) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 py-8 px-4">
        <div className="max-w-lg mx-auto">
          <button onClick={() => setSelected(null)} className="text-green-700 mb-4 hover:underline">
            ← Back to Selection
          </button>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-green-700 text-white p-6 text-center">
              <div className="text-4xl mb-2">{selectedPrayer?.icon}</div>
              <h1 className="text-2xl font-bold">{selectedPrayer?.title}</h1>
              <p className="text-green-200 mt-1">{selectedPrayer?.desc}</p>
              <p className="text-amber-300 mt-2 text-lg">Offering: {selectedPrayer?.price}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name (for the prayer scroll) *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                  <input
                    type="date"
                    required
                    value={form.birthDate}
                    onChange={e => setForm({...form, birthDate: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Birth Hour (optional)</label>
                <select
                  value={form.birthTime}
                  onChange={e => setForm({...form, birthTime: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                >
                  <option value="">Unknown</option>
                  <option>11 PM - 1 AM (Rat Hour)</option>
                  <option>1 AM - 3 AM (Ox Hour)</option>
                  <option>3 AM - 5 AM (Tiger Hour)</option>
                  <option>5 AM - 7 AM (Rabbit Hour)</option>
                  <option>7 AM - 9 AM (Dragon Hour)</option>
                  <option>9 AM - 11 AM (Snake Hour)</option>
                  <option>11 AM - 1 PM (Horse Hour)</option>
                  <option>1 PM - 3 PM (Goat Hour)</option>
                  <option>3 PM - 5 PM (Monkey Hour)</option>
                  <option>5 PM - 7 PM (Rooster Hour)</option>
                  <option>7 PM - 9 PM (Dog Hour)</option>
                  <option>9 PM - 11 PM (Pig Hour)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Address (for prayer direction) *</label>
                <input
                  type="text"
                  required
                  value={form.address}
                  onChange={e => setForm({...form, address: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="City, State/Province, Country"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Prayer Wish (optional)</label>
                <textarea
                  value={form.wish}
                  onChange={e => setForm({...form, wish: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                  rows={3}
                  placeholder="Write your specific prayer wish here..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number *</label>
                <input
                  type="text"
                  required
                  value={form.contact}
                  onChange={e => setForm({...form, contact: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="+1 234 567 8900"
                />
                <p className="text-xs text-gray-500 mt-1">For receiving ritual confirmation and photos</p>
              </div>
              
              <div className="bg-amber-50 rounded-lg p-4 text-sm text-amber-800">
                <p>⚠️ After submission, our staff will contact you to confirm payment and schedule the ritual</p>
                <p className="mt-1">🙏 You will receive photos/videos of the completed ceremony</p>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-green-700 text-white rounded-lg font-bold text-lg hover:bg-green-800 transition"
              >
                Submit Prayer Request
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      {/* Header */}
      <div className="bg-green-700 py-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">🕯️ Taoist Prayer Services</h1>
        <p className="text-amber-300">Sincere prayers bring blessings</p>
      </div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-600 leading-relaxed">
          Taoist prayer rituals have been practiced for thousands of years. 
          Our ordained Taoist priests perform authentic ceremonies to bring blessings, protection, and good fortune to your life.
        </p>
      </div>

      {/* Prayer Types */}
      <div className="max-w-5xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {prayerTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => setSelected(type.id)}
              className="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer hover:shadow-xl hover:scale-105 transition-all"
            >
              <div className="text-4xl mb-3">{type.icon}</div>
              <h3 className="text-lg font-bold text-green-800 mb-1">{type.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{type.desc}</p>
              <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold">
                {type.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Notice */}
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-xl p-6">
          <h3 className="text-lg font-bold text-green-800 mb-3 text-center">🙏 What to Know</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>• All rituals performed by ordained Taoist priests at authentic temples</li>
            <li>• Receive photos/videos of your completed ceremony</li>
            <li>• Prayer scrolls prepared with your name and birth details</li>
            <li>• For spiritual guidance purposes - sincere faith brings blessings</li>
          </ul>
        </div>
      </div>

      {/* Back */}
      <div className="text-center pb-12">
        <Link href="/" className="text-green-700 hover:text-amber-600 transition">← Return Home</Link>
      </div>
    </div>
  )
}
