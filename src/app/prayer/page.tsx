'use client'

import { useState } from 'react'

const prayers = [
  { id: 'health', icon: '💚', title: 'Health & Wellness', cn: '健康祈福' },
  { id: 'career', icon: '💼', title: 'Career Success', cn: '事业祈福' },
  { id: 'wealth', icon: '💰', title: 'Wealth & Prosperity', cn: '财运祈福' },
  { id: 'love', icon: '💕', title: 'Love & Marriage', cn: '姻缘祈福' },
  { id: 'academic', icon: '📚', title: 'Academic Success', cn: '学业祈福' },
  { id: 'peace', icon: '🕊️', title: 'Peace & Protection', cn: '平安祈福' },
  { id: 'ancestor', icon: '🕯️', title: 'Ancestor Memorial', cn: '祭祖超度' },
  { id: 'custom', icon: '🙏', title: 'Custom Prayer', cn: '定制法事' },
]

export default function PrayerPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', birthDate: '', request: '' })

  const prayer = prayers.find(p => p.id === selected)
  const waLink = form.name && form.birthDate && form.request 
    ? `https://wa.me/8615607671586?text=Prayer Request%0AName: ${form.name}%0ABirth: ${form.birthDate}%0AType: ${prayer?.title}%0ARequest: ${form.request}`
    : '#'

  return (
    <div style={{ minHeight: '100vh', background: '#f5f0e6' }}>
      <div style={{ background: '#1a4d2e', padding: '3rem 1rem', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem' }}>🕯️</div>
        <h1 style={{ fontSize: '2.5rem', color: 'white', margin: '0.5rem 0' }}>祈福法事</h1>
        <p style={{ color: '#c9a227' }}>Taoist Prayer Services</p>
      </div>

      <div style={{ background: '#c9a227', padding: '1rem', textAlign: 'center' }}>
        <p style={{ margin: 0, color: '#1a4d2e' }}>All Services: <strong style={{ fontSize: '1.5rem' }}>$299</strong></p>
      </div>

      <div style={{ padding: '2rem 1rem', maxWidth: '50rem', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#1a4d2e' }}>Select Your Prayer</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
          {prayers.map(p => (
            <div key={p.id} onClick={() => setSelected(p.id)} style={{ 
              background: selected === p.id ? '#1a4d2e' : 'white', 
              color: selected === p.id ? 'white' : '#1a4d2e',
              borderRadius: '0.75rem', 
              padding: '1.5rem', 
              textAlign: 'center', 
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{p.icon}</div>
              <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{p.title}</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{p.cn}</div>
            </div>
          ))}
        </div>

        {selected && (
          <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', marginTop: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#1a4d2e', textAlign: 'center' }}>{prayer?.icon} {prayer?.title} - $299</h3>
            
            <input type="text" placeholder="Your Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '0.5rem' }} />
            <input type="date" value={form.birthDate} onChange={e => setForm({...form, birthDate: e.target.value})} style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '0.5rem' }} />
            <textarea placeholder="Your prayer request..." value={form.request} onChange={e => setForm({...form, request: e.target.value})} style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '0.5rem', minHeight: '100px' }} />
            
            <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={e => { if (!form.name || !form.birthDate || !form.request) { e.preventDefault(); alert('Please fill all fields'); } }} style={{ display: 'block', textAlign: 'center', background: '#25D366', color: 'white', padding: '1rem', borderRadius: '0.5rem', textDecoration: 'none' }}>
              💬 Contact via WhatsApp
            </a>
          </div>
        )}
      </div>

      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <a href="/" style={{ color: '#1a4d2e' }}>← Back to Home</a>
      </div>
    </div>
  )
}
