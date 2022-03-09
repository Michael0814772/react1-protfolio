module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        textp1: ['calc(10px + 2vw)', { lineHeight: '1rem' }],
        texth1: ['calc(20px + 5vw)', { lineHeight: '3rem' }],
        textp2: ['calc(10px + 0.5vw)', { lineHeight: '1.7rem' }],
        textcard: ['11px', { lineHeight: '0.5rem'}],
      },
      colors: {
        textcl1: 'rgb(97,249,213)',
        textcl2: 'rgb(204,214,246)',
        textcl3: 'rgb(136,146,176)',
        textcl4: 'rgb(191,202,233)',
        textcl5: 'rgb(121,131,160)',
        textcl6: 'rgb(40,54,78)',
      },
      backgroundColor: {
        backgroundcl: 'rgb(10,25,47)',
        backgroundcl2: 'rgb(29,71,83)',
        backgroundcl3: 'rgb(97,249,213)',
        backgroundcl4: 'rgba(192, 231, 192, 0.1)',
        backgroundcl5: '#2b5048',
        backgroundcard: 'rgb(17,34,64)',
        backgroundscroll: 'rgb(73,86,112)',
        textimage: 'rgba(97,249,213,0.5)',
      },
      width: {
        width2px: '2px',
        width150px: '160px',
        width350: '350px',
        width390: '390px',
        widththings: '420px',
        widththings2: '470px',
        widththings3: '510px',
        widththings4: '530px',
        widththings5: '570px',
        widththings6: '630px',
        widthCard: '420px',
        widthcard2: '510px'
      },
      height: {
        height1px: '1px',
        height350: '300px',
        height390: '360px',
        height405: '405px',
        height430: '430px',
        height440: '440px',
        height450px: '450px',
        height550px: '650px',
        height720px: '550px'
      },
      translate: {
        translatesm: '220px',
        translatemd: '275px',
        translatelg: '310px',
        translate350: '405px',
        translate3: '429.6px'
      },
      fontFamily: {
        sansita: ['Artifika']
      },
    },
  },
  plugins: [],
}
