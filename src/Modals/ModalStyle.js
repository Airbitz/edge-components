// @flow

import { Dimensions, StyleSheet } from 'react-native'

import { THEME } from '../edge-theme.js'
import { scale } from '../scaling.js'

export const rawStyles = {
  modal: {},
  container: {
    padding: scale(12),
    backgroundColor: THEME.COLORS.WHITE,
    borderRadius: scale(4),
    shadowOffset: {
      width: 0,
      height: scale(5)
    },
    shadowOpacity: 1,
    shadowRadius: scale(4)
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: scale(22)
  },
  body: {
    padding: scale(6)
  },
  footer: {
    padding: scale(6)
  },
  icon: {
    height: scale(65),
    width: scale(65),
    borderRadius: scale(65),
    borderWidth: scale(4),
    borderColor: THEME.COLORS.SECONDARY,
    backgroundColor: THEME.COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: -1 * scale(32),
    zIndex: 1
  },
  androidHackSpacer: {
    paddingTop: scale(26)
  },
  item: {
    flex: 1,
    paddingVertical: scale(4)
  },
  row: {
    flexDirection: 'row'
  },
  title: {
    fontSize: scale(22),
    fontFamily: THEME.FONTS.DEFAULT,
    color: THEME.COLORS.PRIMARY
  },
  description: {
    paddingVertical: scale(6),
    fontSize: scale(14),
    color: THEME.COLORS.GRAY_1,
    fontFamily: THEME.FONTS.DEFAULT,
    alignSelf: 'center'
  },
  debug: {
    borderColor: 'red',
    borderWidth: scale(1)
  }
}

export const styles = StyleSheet.create(rawStyles)

const screenDimensions = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
}

const StaticModalStyle = {
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: (screenDimensions.height * 1) / 8,
    left: 0,
    right: 0
  },
  modalBox: {
    paddingHorizontal: screenDimensions.width / 8,
    width: screenDimensions.width,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  innerBox: {
    backgroundColor: THEME.COLORS.WHITE
  },
  header: {
    position: 'relative',
    height: 62,
    width: '100%',
    backgroundColor: THEME.COLORS.TRANSPARENT,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  bottom: {
    position: 'relative',
    width: '100%',
    backgroundColor: THEME.COLORS.WHITE
  },
  bodyRow: {
    width: '100%',
    padding: 15
  },
  bodyText: {
    width: '100%',
    textAlign: 'center',
    fontFamily: THEME.FONTS.DEFAULT
  },
  shim: 20, // Styles.Shim.height,
  icon: {
    color: THEME.COLORS.WHITE
  },
  iconSize: 36
}

export { StaticModalStyle }
