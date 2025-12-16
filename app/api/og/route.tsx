import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Bacco ERP'
    const description = searchParams.get('description') || 'Sistema Completo para Gestão de Vinícolas'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b0e 100%)',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(139, 69, 19, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 69, 19, 0.08) 0%, transparent 50%)',
            }}
          />

          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px',
              maxWidth: '1200px',
            }}
          >
            {/* Logo/Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '40px',
                padding: '12px 24px',
                backgroundColor: 'rgba(139, 69, 19, 0.1)',
                borderRadius: '9999px',
                border: '1px solid rgba(139, 69, 19, 0.3)',
              }}
            >
              <span style={{ fontSize: '18px', color: '#d4a574', fontWeight: 600 }}>
                Sistema Completo para Vinícolas
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: '#ffffff',
                textAlign: 'center',
                marginBottom: '32px',
                lineHeight: '1.1',
                fontFamily: 'serif',
              }}
            >
              {title}
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: '32px',
                color: '#a3a3a3',
                textAlign: 'center',
                maxWidth: '900px',
                lineHeight: '1.5',
                marginBottom: '48px',
              }}
            >
              {description}
            </p>

            {/* Features */}
            <div
              style={{
                display: 'flex',
                gap: '32px',
                marginTop: '40px',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 24px',
                  backgroundColor: 'rgba(139, 69, 19, 0.1)',
                  borderRadius: '12px',
                  border: '1px solid rgba(139, 69, 19, 0.2)',
                }}
              >
                <span style={{ fontSize: '24px' }}>🤖</span>
                <span style={{ fontSize: '20px', color: '#d4a574', fontWeight: 600 }}>IA Integrada</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 24px',
                  backgroundColor: 'rgba(139, 69, 19, 0.1)',
                  borderRadius: '12px',
                  border: '1px solid rgba(139, 69, 19, 0.2)',
                }}
              >
                <span style={{ fontSize: '24px' }}>🇧🇷</span>
                <span style={{ fontSize: '20px', color: '#d4a574', fontWeight: 600 }}>100% Brasileiro</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 24px',
                  backgroundColor: 'rgba(139, 69, 19, 0.1)',
                  borderRadius: '12px',
                  border: '1px solid rgba(139, 69, 19, 0.2)',
                }}
              >
                <span style={{ fontSize: '24px' }}>🍷</span>
                <span style={{ fontSize: '20px', color: '#d4a574', fontWeight: 600 }}>Do Vinhedo à Garrafa</span>
              </div>
            </div>

            {/* URL */}
            <div
              style={{
                marginTop: '60px',
                fontSize: '24px',
                color: '#737373',
                fontWeight: 500,
              }}
            >
              bacco-erp.com
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}

