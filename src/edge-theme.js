// @flow

import { Platform } from 'react-native'

// https://projects.invisionapp.com/d/main#/console/10954562/239168414/inspect
export const THEME = {
  BUTTON: {
    HEIGHT: 44
  },

  NAV_BAR: {
    HEIGHT: Platform.OS === 'ios' ? 62 : 44
  },
  TAB_BAR: {
    HEIGHT: 50
  },

  FONTS: {
    DEFAULT: 'SourceSansPro-Black',
    BOLD: 'SourceSansPro-Bold',
    SYMBOLS: Platform.OS === 'android' ? 'SF-UI-Text-Regular' : 'SourceSansPro-Black'
  },

  OPACITY: {
    FULL: 1.0,
    HIGH: 0.8,
    MID: 0.5,
    LOW: 0.1,
    NONE: 0.0
  },

  ALPHA: {
    FULL: 100,
    HIGH: 80,
    MID: 50,
    LOW: 10,
    NONE: 0
  },

  COLORS: {
    PRIMARY: '#0D2145',
    SECONDARY: '#0E4B75',

    GRADIENT: {
      DARK: '#0D2145',
      LIGHT: '#0E4B75'
    },

    ACCENT_GREEN: '#0073D9',
    ACCENT_ORANGE: '#F1AA19',
    ACCENT_RED: '#E85466',
    ACCENT_MINT: '#66EDA8',

    BLACK: '#25292C',
    GRAY_1: '#4A5157',
    GRAY_2: '#87939E',
    GRAY_3: '#D9E3ED',
    GRAY_4: '#F4F5F6',
    WHITE: '#FFFFFF',

    TRANSPARENT: 'transparent'
  }
}
