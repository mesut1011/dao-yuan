'use client'

import { useState } from 'react'
import Link from 'next/link'

const prayerTypes = [
  { id: 'health', icon: '💚', title: 'Health & Wellness', desc: 'Pray for good health and recovery' },
  { id: 'career', icon: '💼', title: 'Career Success', desc: 'Pray for career advancement' },
  { id: 'wealth', icon: '💰', title: 'Wealth & Prosperity', desc: 'Pray for financial abundance' },
  { id: 'love', icon: '💕', title: 'Love & Marriage', desc: 'Pray for harmonious relationships' },
  { id: 'academic', icon: '📚', title: 'Academic Success', desc: 'Pray for wisdom and exam success' },
  { id: 'peace', icon: '🕊️', title: 'Peace & Protection', desc: 'Pray for safety and peace' },
  { id: 'ancestor', icon: '🕯️', title: 'Ancestor Memorial', desc: 'Honor departed loved ones' },
  { id: 'custom', icon: '🙏', title: 'Custom Prayer', desc: 'Special requests and rituals' },
]

export default function PrayerPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: '',
    birthDate: '',
    request: '',
  })

  const whatsappNumber = '8615607671586'
  const selectedPrayer = prayerTypes.find(p => p.id === selected)

  const generateWhatsAppLink = () => {
    const message = `Hello, I would like to request a prayer service.%0A%0AName: ${form.name}%0ABirth Date: ${form.birthDate}%0APrayer Type: ${selectedPrayer?.title}%0A%0ARequest Details:%0A${form.request}`
    return `https://wa.me/${whatsappNumber}?text=${message}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      {/* Header */}
      <div className="bg-green-700 py-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">🕯️ Taoist Prayer Services</h1>
        <p className="text-amber-300">Sincere prayers bring blessings</p>
      </div>

      {/* Pricing Banner */}
      <div className="bg-amber-100 py-4 text-center">
        <p className="text-amber-800 font-medium">
          ✨ All Prayer Services: <span className="text-2xl font-bold text-green-800">$299</span>
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-600 leading-relaxed">
          Taoist prayer rituals have been practiced for thousands of years. 
          Our ordained Taoist priests perform authentic ceremonies to bring blessings, protection, and good fortune to your life.
        </p>
      </div>

      {/* Prayer Types */}
      <div className="max-w-5xl mx-auto px-4 pb-8">
        <h2 className="text-xl font-bold text-green-800 mb-4 text-center">Select Your Prayer Type</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {prayerTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => setSelected(type.id)}
              className={`bg-white rounded-xl shadow-md p-5 text-center cursor-pointer hover:shadow-xl transition-all ${selected === type.id ? 'ring-2 ring-green-500 shadow-xl' : ''}`}
            >
              <div className="text-4xl mb-2">{type.icon}</div>
              <h3 className="font-bold text-green-800 mb-1">{type.title}</h3>
              <p className="text-gray-500 text-sm">{type.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Request Form */}
      {selected && (
        <div className="max-w-xl mx-auto px-4 pb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4 text-center">
              {selectedPrayer?.icon} {selectedPrayer?.title} - $299
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                <input
                  type="date"
                  value={form.birthDate}
                  onChange={e => setForm({...form, birthDate: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Prayer Request *</label>
                <textarea
                  value={form.request}
                  onChange={e => setForm({...form, request: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                  rows={4}
                  placeholder="Please describe your prayer request, any specific wishes, and details you'd like the Taoist priest to know..."
                />
              </div>

              <div className="bg-amber-50 rounded-lg p-4 text-sm text-amber-800">
                <p>🙏 After contacting via WhatsApp, our staff will:</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>Confirm your prayer details</li>
                  <li>Arrange payment</li>
                  <li>Schedule the ritual</li>
                  <li>Send photos/videos after completion</li>
                </ul>
              </div>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-2 ${form.name && form.birthDate && form.request ? 'bg-green-600 text-white hover:bg-green-700 cursor-pointer' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                onClick={e => {
                  if (!form.name || !form.birthDate || !form.request) {
                    e.preventDefault()
                    alert('Please fill in all required fields')
                  }
                }}
              >
                <span className="text-xl">💬</span> Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Notice */}
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-xl p-6">
          <h3 className="text-lg font-bold text-green-800 mb-3 text-center">🙏 What to Know</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>• All rituals performed by ordained Taoist priests at authentic temples</li>
            <li>• Receive photos and videos of your completed ceremony</li>
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
