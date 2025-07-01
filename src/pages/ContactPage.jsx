import React from 'react';

export default function ContactPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        paddingTop: 120,
        paddingBottom: 100,
        fontFamily: "'Inter', sans-serif",
        color: '#eee',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'transparent', // Aurora background handled globally
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 700,
          backgroundColor: 'rgba(0,0,0,0.35)',
          border: '1px solid #444',
          borderRadius: 12,
          padding: 40,
          boxShadow: '0 0 60px rgba(0,0,0,0.2)',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', color: '#7cff67', marginBottom: 10 }}>
          Let's Connect
        </h1>
        <p style={{ marginBottom: 30, color: '#aaa', fontSize: '1rem' }}>
          Interested in working together? Have a question or idea? Send me a message and I’ll get back to you soon.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Message submitted (hook your backend here)');
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
        >
          {/* Name */}
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              name="name"
              required
              placeholder=" "
              style={{
                width: '100%',
                background: 'transparent',
                border: '1px solid #555',
                padding: '14px 16px',
                borderRadius: 8,
                color: '#eee',
                fontSize: '1rem',
                outline: 'none',
              }}
              onFocus={(e) => e.target.style.borderColor = '#7cff67'}
              onBlur={(e) => e.target.style.borderColor = '#555'}
            />
            <label style={{
              position: 'absolute',
              top: -10,
              left: 14,
              fontSize: '0.8rem',
              backgroundColor: 'rgba(0,0,0,0.5)',
              padding: '0 4px',
              color: '#7cff67',
              pointerEvents: 'none',
            }}>Name</label>
          </div>

          {/* Email */}
          <div style={{ position: 'relative' }}>
            <input
              type="email"
              name="email"
              required
              placeholder=" "
              style={{
                width: '100%',
                background: 'transparent',
                border: '1px solid #555',
                padding: '14px 16px',
                borderRadius: 8,
                color: '#eee',
                fontSize: '1rem',
                outline: 'none',
              }}
              onFocus={(e) => e.target.style.borderColor = '#7cff67'}
              onBlur={(e) => e.target.style.borderColor = '#555'}
            />
            <label style={{
              position: 'absolute',
              top: -10,
              left: 14,
              fontSize: '0.8rem',
              backgroundColor: 'rgba(0,0,0,0.5)',
              padding: '0 4px',
              color: '#7cff67',
              pointerEvents: 'none',
            }}>Email</label>
          </div>

          {/* Subject */}
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              name="subject"
              placeholder=" "
              required
              style={{
                width: '100%',
                background: 'transparent',
                border: '1px solid #555',
                padding: '14px 16px',
                borderRadius: 8,
                color: '#eee',
                fontSize: '1rem',
                outline: 'none',
              }}
              onFocus={(e) => e.target.style.borderColor = '#7cff67'}
              onBlur={(e) => e.target.style.borderColor = '#555'}
            />
            <label style={{
              position: 'absolute',
              top: -10,
              left: 14,
              fontSize: '0.8rem',
              backgroundColor: 'rgba(0,0,0,0.5)',
              padding: '0 4px',
              color: '#7cff67',
              pointerEvents: 'none',
            }}>Subject</label>
          </div>

          {/* Message */}
          <div style={{ position: 'relative' }}>
            <textarea
              name="message"
              rows="6"
              placeholder=" "
              required
              style={{
                width: '100%',
                background: 'transparent',
                border: '1px solid #555',
                padding: '14px 16px',
                borderRadius: 8,
                color: '#eee',
                fontSize: '1rem',
                outline: 'none',
                resize: 'vertical',
              }}
              onFocus={(e) => e.target.style.borderColor = '#7cff67'}
              onBlur={(e) => e.target.style.borderColor = '#555'}
            ></textarea>
            <label style={{
              position: 'absolute',
              top: -10,
              left: 14,
              fontSize: '0.8rem',
              backgroundColor: 'rgba(0,0,0,0.5)',
              padding: '0 4px',
              color: '#7cff67',
              pointerEvents: 'none',
            }}>Message</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              background: '#7cff67',
              color: '#000',
              padding: '14px 24px',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s',
              alignSelf: 'flex-start',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#63c451'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#7cff67'}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
