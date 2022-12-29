import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    //Add your basic Colors here
    white: '#FFFFFF',
    black: '#000000',
    black60: 'rgba(0,0,0,0.60)',

    //Add your theme Colors here
    primary: {
      50: '#FFF1EB',
      100: '#FFE2D6',
      200: '#FFC2A8',
      300: '#FFA680',
      400: '#FF8957',
      500: '#FF6A2A',
      600: '#F04800',
      700: '#B33600',
      800: '#752300',
      900: '#3D1200',
    },
    secondary: {
      50: '#E8F7FC',
      100: '#D2EFF9',
      200: '#A9E0F4',
      300: '#7BD0EF',
      400: '#4EC0E9',
      500: '#22AFE4',
      600: '#178FBA',
      700: '#116C8D',
      800: '#0C495F',
      900: '#06232D',
    },
    success: {
      50: '#F4FBFA',
      100: '#EDF8F6',
      200: '#DAF1ED',
      300: '#C8EAE4',
      400: '#B1E2D9',
      500: '#A0DBD0',
      600: '#67C5B4',
      700: '#3FA693',
      800: '#2A6F62',
      900: '#153731',
    },
    info: {
      50: '#F4F9FB',
      100: '#EDF6F8',
      200: '#D7EBEF',
      300: '#C4E1E8',
      400: '#B2D8E1',
      500: '#9ECED9',
      600: '#69B3C4',
      700: '#3F8FA1',
      800: '#2A5E6A',
      900: '#163137',
    },
    warning: {
      50: '#FFFDEB',
      100: '#FEFAD7',
      200: '#FEF6AF',
      300: '#FDF28B',
      400: '#FDED63',
      500: '#FCEA3B',
      600: '#F6DE04',
      700: '#BAA803',
      800: '#796D02',
      900: '#3C3601',
    },
    error: {
      50: '#FBE5EA',
      100: '#F7CFD8',
      200: '#EE9BAD',
      300: '#E66B85',
      400: '#DD375B',
      500: '#BC2041',
      600: '#941934',
      700: '#711328',
      800: '#4A0D1A',
      900: '#27070E',
    },
  },
  //Overwrite your components styling as per your requirements
  components: {
    Heading: {
      baseStyle: {
        color: 'black',
      },
      defaultProps: {
        fontSize: '22px',
      },
    },
    Button: {
      baseStyle: {
        borderRadius: 'full',
      },
      defaultProps: {
        colorScheme: 'primary',
        py: '14px',
        _text: {
          fontSize: '18px',
          fontWeight: 700,
          lineHeight: 24,
        },
      },
    },
  },
});
