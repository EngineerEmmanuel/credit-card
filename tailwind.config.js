/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'cardRightBgImage':"url('https://media.istockphoto.com/id/1358595633/photo/reuss-bank-near-stetten.jpg?s=612x612&w=0&k=20&c=Ve6cQBn7GhHwn78dih9GaqDS_FksaxNBlFtX_bBK-Fg=')",
        
        },
      colors:{
        inputbg:'#323645',
        leftCardbg:'#282A37',
        inputFocusBg:'#42BBFF',
        cardNumberFontSize:'11px',
        cardFirstColor:'#171841',
        cardSecond:'#222582',
        btn:'#42BBFF',
        textColor:'#C0C0C8',
        backGroundColor:'#1A1B23'
      },
      fontSize:{
        'special': '10px',
      },
      screens:{
        'md':'771px',
        'xl':'1029px',
        '2xl':'1043px'
      }
    },
  },
  plugins: [],
}
