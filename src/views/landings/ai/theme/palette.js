/***************************  DEFAULT / AI THEME - DARK PALETTE (PRIMARY ORANGE)  ***************************/

export default function paletteDark() {
  const textPrimary = '#F5F5F5'; // putih terang untuk teks utama
  const textSecondary = '#A7ADB5'; // abu terang untuk teks sekunder
  const divider = '#333333'; // outline di dark mode
  const background = '#000000'; // hitam pekat

  const darkPalette = {
    primary: {
      lighter: '#FFD180',  // oranye muda
      light: '#FFB74D',    // oranye terang
      main: '#FF9800',     // oranye utama
      dark: '#F57C00',     // oranye gelap
      darker: '#E65100'    // oranye pekat
    },
    secondary: {
      lighter: '#B3E5FC',
      light: '#81D4FA',
      main: '#29B6F6',
      dark: '#0288D1',
      darker: '#01579B'
    },
    grey: {
      50: '#0D0D0D',
      100: '#1A1A1A',
      200: '#262626',
      300: '#333333',
      400: '#404040',
      500: '#4D4D4D',
      600: '#666666',
      700: '#808080',
      800: textSecondary,
      900: textPrimary
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary
    },
    divider,
    background: {
      default: background, // full black background
      paper: '#121212'     // abu gelap glossy untuk card / surface
    }
  };

  return {
    ...darkPalette
  };
}
