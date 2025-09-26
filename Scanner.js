tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          animation: {
            'fade-in': 'fadeIn 0.5s ease-out',
            'slide-up': 'slideUp 0.3s ease-out',
            'bounce-gentle': 'bounceGentle 2s infinite',
            'pulse-soft': 'pulseSoft 2s infinite',
            'scan': 'scan 2s linear infinite',
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0', transform: 'translateY(10px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' }
            },
            slideUp: {
              '0%': { transform: 'translateY(100%)' },
              '100%': { transform: 'translateY(0)' }
            },
            bounceGentle: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' }
            },
            pulseSoft: {
              '0%, 100%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.05)' }
            },
            scan: {
              '0%': { transform: 'translateX(-100%)' },
              '100%': { transform: 'translateX(100vw)' }
            }
          }
        }
      }
    }
