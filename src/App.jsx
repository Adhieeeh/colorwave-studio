import React, { useState } from 'react';


const PRESET_PALETTES = [
  { name: "🌌 Cyber Neon", primary: "#06b6d4", secondary: "#d946ef", bg: "#0f172a", text: "#f8fafc" },
  { name: "🌲 Forest Emerald", primary: "#10b981", secondary: "#f59e0b", bg: "#064e3b", text: "#ecfdf5" },
  { name: "🌅 Sunset Glow", primary: "#f43f5e", secondary: "#3b82f6", bg: "#1c1917", text: "#fafaf9" },
  { name: "🎨 Classic Royal", primary: "#6366f1", secondary: "#14b8a6", bg: "#f8fafc", text: "#0f172a" }
];

function App() {
 
  const [theme, setTheme] = useState(PRESET_PALETTES[0]);
  const [copied, setCopied] = useState(false);

  
  const handleColorChange = (key, value) => {
    setTheme(prev => ({ ...prev, [key]: value }));
  };

  
  const applyPreset = (preset) => {
    setTheme(preset);
  };

  const copyStyles = () => {
    const cssConfig = `:root {\n  --primary: ${theme.primary};\n  --secondary: ${theme.secondary};\n  --background: ${theme.bg};\n  --text: ${theme.text};\n}`;
    navigator.clipboard.writeText(cssConfig);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '20px', fontFamily: 'system-ui, sans-serif', color: '#1e293b' }}>
      
      {/*  */}
      <header style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '15px', marginBottom: '35px' }}>
        <h1 style={{ margin: '0', fontSize: '28px', color: '#4f46e5' }}> ColorWave Studio</h1>
        <p style={{ margin: '5px 0 0 0', color: '#64748b', fontSize: '14px' }}>Real-time UI color theme testing sandbox and palette code compiler.</p>
      </header>

      {/* T */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px' }}>
        
        {/*  */}
        <section style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', height: 'fit-content' }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '16px', color: '#475569' }}>Theme Customization Workbench</h3>
          
          {/*  */}
          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#64748b', marginBottom: '10px', textTransform: 'uppercase' }}>Elite Theme Presets</label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {PRESET_PALETTES.map((p, index) => (
                <button 
                  key={index} 
                  onClick={() => applyPreset(p)}
                  style={{ padding: '6px 12px', backgroundColor: '#fff', border: theme.name === p.name ? '2px solid #4f46e5' : '1px solid #cbd5e1', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', transition: '0.2s' }}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/*  */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '30px' }}>
            {['primary', 'secondary', 'bg', 'text'].map(key => (
              <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '14px', fontWeight: '600', textTransform: 'capitalize' }}>{key === 'bg' ? 'Background Color' : `${key} Accent`}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '13px', fontFamily: 'monospace', color: '#64748b' }}>{theme[key]}</span>
                  <input 
                    type="color" 
                    value={theme[key]} 
                    onChange={(e) => handleColorChange(key, e.target.value)}
                    style={{ border: 'none', background: 'none', width: '32px', height: '32px', cursor: 'pointer' }}
                  />
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={copyStyles}
            style={{ width: '100%', padding: '14px', backgroundColor: copied ? '#10b981' : '#4f46e5', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', transition: '0.2s' }}
          >
            {copied ? 'Copied Configuration! ⚡' : '📋 Copy Production CSS Variables'}
          </button>
        </section>

        {/*  */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase' }}>Interactive Component Render Canvas</div>
          
          {/*  */}
          <div style={{ backgroundColor: theme.bg, color: theme.text, padding: '35px', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.1)', minHeight: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.15s ease' }}>
            
            {/*  */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${theme.text}20`, paddingBottom: '15px' }}>
              <span style={{ fontWeight: '800', fontSize: '18px', color: theme.primary }}>⚡ Application UI</span>
              <div style={{ display: 'flex', gap: '15px', fontSize: '13px', fontWeight: '600', opacity: 0.85 }}>
                <span>Dashboard</span>
                <span>Analytics</span>
              </div>
            </div>

            {/*  */}
            <div style={{ margin: '25px 0', flexGrow: 1 }}>
              <h2 style={{ fontSize: '24px', fontWeight: '800', margin: '0 0 10px 0' }}>Welcome back, Developer</h2>
              <p style={{ fontSize: '14px', opacity: 0.8, lineHeight: '1.5', margin: '0 0 25px 0' }}>
                This card dynamically tests text legibility, color contrast ratios, and button visibility options inside real layout trees.
              </p>

              {/*  */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <button style={{ padding: '10px 20px', backgroundColor: theme.primary, color: theme.bg, border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'default' }}>
                  Primary Event
                </button>
                <button style={{ padding: '10px 20px', backgroundColor: 'transparent', color: theme.secondary, border: `2px solid ${theme.secondary}`, borderRadius: '8px', fontWeight: '700', cursor: 'default' }}>
                  Secondary Action
                </button>
              </div>
            </div>

            {/*  */}
            <div style={{ backgroundColor: `${theme.primary}15`, border: `1px solid ${theme.primary}40`, padding: '12px 16px', borderRadius: '10px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.secondary }}></span>
              <span style={{ fontWeight: '600' }}>System Check: Accent color matching operations validated.</span>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default App;