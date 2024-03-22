type TProp = {
	colorMode: string,
}
  
const globalStyles = {
  colors: {
    gray: {
      700: '#1f2733',
    },
  },
  styles: {
    global: (props: TProp) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.50',
        fontFamily: "'Roboto', sans-serif",
      },
      html: {
        fontFamily: "'Roboto', sans-serif",
      },
    }),
  },
};

export default globalStyles;
