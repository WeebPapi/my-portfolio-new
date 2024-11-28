import React from 'react';

// Comprehensive color palette for technologies
const technologyColors: { [key: string]: { bg: string; text: string } } = {
  // Frontend
  'React': { bg: '#0A192F', text: '#61DAFB' },
  'TypeScript': { bg: '#1D1D1D', text: '#3178C6' },
  'JavaScript': { bg: '#1D1D1D', text: '#F7DF1E' },
  'HTML': { bg: '#1D1D1D', text: '#E34F26' },
  'CSS': { bg: '#1D1D1D', text: '#1572B6' },
  'Tailwind': { bg: '#0F172A', text: '#06B6D4' },
  'Next.js': { bg: '#000000', text: '#FFFFFF' },
  'Vite': { bg: '#1D1D1D', text: '#646CFF' },
  'Vue': { bg: '#1D1D1D', text: '#4FC08D' },
  'Svelte': { bg: '#1D1D1D', text: '#FF3E00' },

  // Backend
  'Node.js': { bg: '#0A2C11', text: '#339933' },
  'Express': { bg: '#1D1D1D', text: '#FFFFFF' },
  'Python': { bg: '#0A192F', text: '#3776AB' },
  'Django': { bg: '#0F2B46', text: '#092E20' },
  'Flask': { bg: '#1D1D1D', text: '#FFFFFF' },
  'FastAPI': { bg: '#0F172A', text: '#009688' },

  // Databases
  'MongoDB': { bg: '#001E2B', text: '#47A248' },
  'PostgreSQL': { bg: '#0A192F', text: '#4169E1' },
  'MySQL': { bg: '#1D1D1D', text: '#4479A1' },
  'Firebase': { bg: '#1D1D1D', text: '#FFCA28' },

  // Cloud & Deployment
  'AWS': { bg: '#0A192F', text: '#FF9900' },
  'Vercel': { bg: '#000000', text: '#FFFFFF' },
  'Netlify': { bg: '#0A192F', text: '#00C7B7' },
  'Docker': { bg: '#1D1D1D', text: '#2496ED' },

  // Other Tools
  'Git': { bg: '#0A192F', text: '#F05032' },
  'GraphQL': { bg: '#1D1D1D', text: '#E10098' },
  'Redux': { bg: '#0A192F', text: '#764ABC' },
  'Socket.io': { bg: '#1D1D1D', text: '#FFFFFF' }
};

// Fallback color for technologies not in the predefined list
const DEFAULT_COLORS = { bg: '#1D1D1D', text: '#6B7280' };

interface BadgeProps {
  technology: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ technology, className = '' }) => {
  // Get colors for the technology, use default if not found
  const { bg, text } = technologyColors[technology] || DEFAULT_COLORS;

  return (
    <div 
      style={{ 
        backgroundColor: bg, 
        color: text,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        display: 'inline-flex',
        alignItems: 'center',
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingTop: '4px',
        paddingBottom: '4px',
        borderRadius: '9999px',
        fontSize: '0.75rem',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: 'wider',
        transition: 'all 0.3s ease-in-out',
        transform: 'scale(1)',
        cursor: 'default'
      }}
      className={`hover:scale-105 hover:shadow-lg ${className}`}
    >
      {technology}
    </div>
  );
};

export default Badge;
