/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#006973', 
          dark: '#4ed8e9'
        },
        onPrimary: {
          light: '#ffffff',
          dark: '#00363c'
        },
        primaryContainer: {
          light: '#90f1ff',
          dark: '#004f57'
        },
        onPrimaryContainer: {
          light: '#001f23',
          dark: '#90f1ff',
        },

        secondary: {
          light: '#4a6366',
          dark: '#b1cbcf'
        },
        onSecondary: {
          light: '#ffffff',
          dark: '#1c3438'
        },
        secondaryContainer: {
          light: '#cde7eb',
          dark: '#324b4e', 
        },
        onSecondaryContainer: {
          light: '#051f22',
          dark: '#cde7eb'
        },
        tertiary: {
          light: '#515e7d', 
          dark: '#b9c6ea',
        },
        onTertiary: {
          light: '#ffffff',
          dark: '#23304d'
        },
        tertiaryContainer: {
          light: '#d9e2ff',
          dark: '#3a4664'
        },
        onTertiaryContainer: {
         light: '#0d1b36',
         dark: '#d9e2ff' 
        },
        error: {
          light: '#ba1a1a',
          dark: '#ffb4ab'
        },
        onError: {
          light: '#ffffff',
          dark: '#690005'
        },
        errorContainer: {
          light: '#ffdad6',
          dark: '#93000a'
        },
        onErrorContainer: {
          light: '#410002',
          dark: '#ffdad6'
        },
        neutral: {
          light: '#8e9192',
          dark: '#8e9192',
        },
        background: {
          light: '#fafdfd',
          dark: '#191c1d'
        },
        onBackground: {
          light: '#191c1d',
          dark: '#e0e3e3'
        },
        surface: {
          light: '#fafdfd',
          dark: '#191c1d'
        },
        onSurface: {
          light: '#191c1d',
          dark: '##e0e3e3'
        },
        surfaceVariant: {
          light: '#dbe4e6',
          dark: '#3f484a'
        },
        onSurfaceVariant: {
          light: '#3f484a',
          dark: '#bec8ca'
        },
        outline: {
          light: '#6f797a',
          dark: '#899294'
        }
      },
    },
  },
  plugins: [],
}

