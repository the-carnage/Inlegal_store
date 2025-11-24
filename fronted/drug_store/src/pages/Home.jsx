import { useMemo } from 'react'

export default function Home() {
  const inlegalItems = [
    { name: 'Mattress Tag Removal Tool', description: 'A small pair of scissors for legally removing that "Do Not Remove" tag.', icon: '✂️' },
    { name: 'The Fast Lane Token', description: 'A legal right to use the fast lane with no other cars in sight.', icon: '🚗' },
    { name: 'Bulk Cash Carrier', description: 'A briefcase optimized for carrying large, legally acquired sums of cash.', icon: '💰' },
    { name: 'Public Domain Music Collection', description: 'A vast collection of music that feels copyrighted, but is perfectly free to use.', icon: '🎶' },
    { name: 'Expired License ID', description: 'A novelty ID that strongly resembles your old, expired one—for emergencies only.', icon: '🪪' },
    { name: 'Gravel Road Speed Pass', description: 'A document legally allowing you to drive 5 MPH over the limit on unpaved roads.', icon: '💨' },
  ]

  const itemsView = useMemo(() => (
    inlegalItems.map((item, index) => (
      <div key={index} style={{
        border: '1px solid #333',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        textAlign: 'center', // Center content
        backgroundColor: '#1a1a1a',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Placeholder for the image/icon */}
        <div style={{
          fontSize: '3em',
          marginBottom: 10,
          padding: 10,
          background: '#000',
          borderRadius: '50%',
          width: '1.5em',
          height: '1.5em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 0 10px #4CAF50'
        }}>
          {item.icon}
        </div>

        <h3 style={{ color: '#4CAF50', marginTop: 0, marginBottom: 8 }}>{item.name}</h3>
        <p style={{ color: '#ccc', margin: 0 }}>{item.description}</p>
      </div>
    ))
  ), [inlegalItems])

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the product management system.</p>
      <div style={{ padding: '0 16px' }}>
        <h2 style={{ fontSize: '2.5em', color: '#646cff', textShadow: '0 0 5px rgba(100, 108, 255, 0.5)' }}>The Black Market of Legalities</h2>
        <p style={{ color: '#aaa', marginBottom: 24 }}>
          Welcome to the Zero Proof Hub. These items are perfectly legal to possess and use. But they feel... wrong.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, maxWidth: 900, margin: '0 auto' }}>
          {itemsView}
        </div>
      </div>
    </div>
  )
}
