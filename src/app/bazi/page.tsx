'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function BaziPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', gender: 'Male', birthDate: '', birthHour: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/bazi/result?name=${form.name}&gender=${form.gender}&birthDate=${form.birthDate}&birthHour=${form.birthHour || '12'}`)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f5f0e6', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '4rem' }}>☯</div>
          <h1 style={{ fontSize: '2rem', color: '#1a4d2e', margin: 0 }}>八字命理</h1>
          <p style={{ color: '#5a8f7b' }}>Bazi Destiny Analysis</p>
        </div>

        <form onSubmit={handleSubmit} style={{ background: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#1a4d2e' }}>Name</label>
            <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '0.5rem' }} placeholder="Your name" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#1a4d2e' }}>Gender</label>
              <select value={form.gender} onChange={e => setForm({...form, gender: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '0.5rem' }}>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#1a4d2e' }}>Birth Date</label>
              <input type="date" required value={form.birthDate} onChange={e => setForm({...form, birthDate: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '0.5rem' }} />
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#1a4d2e' }}>Birth Hour (optional)</label>
            <select value={form.birthHour} onChange={e => setForm({...form, birthHour: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '0.5rem' }}>
              <option value="">Unknown</option>
              <option value="0">11 PM - 1 AM</option>
              <option value="1">1 AM - 3 AM</option>
              <option value="2">3 AM - 5 AM</option>
              <option value="3">5 AM - 7 AM</option>
              <option value="4">7 AM - 9 AM</option>
              <option value="5">9 AM - 11 AM</option>
              <option value="6">11 AM - 1 PM</option>
              <option value="7">1 PM - 3 PM</option>
              <option value="8">3 PM - 5 PM</option>
              <option value="9">5 PM - 7 PM</option>
              <option value="10">7 PM - 9 PM</option>
              <option value="11">9 PM - 11 PM</option>
            </select>
          </div>

          <button type="submit" style={{ width: '100%', padding: '1rem', background: '#1a4d2e', color: 'white', border: 'none', borderRadius: '0.5rem', fontSize: '1.1rem', cursor: 'pointer' }}>
            ☯ Generate Chart
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <a href="/" style={{ color: '#1a4d2e' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  )
}
