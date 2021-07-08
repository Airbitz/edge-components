// @flow

import { StyleSheet } from 'react-native'

import { THEME } from '../../edge-theme.js'
import { scale } from '../../scaling.js'

export const rawStyles = {
  //  ALL BUTTONS
  button: {
    padding: 14,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: THEME.FONTS.DEFAULT,
    fontSize: 18
  },

  // PRIMARY BUTTON
  primaryButton: {
    backgroundColor: THEME.COLORS.SECONDARY
  },
  primaryButtonUnderlay: { color: THEME.COLORS.PRIMARY },
  primaryButtonText: {
    color: THEME.COLORS.WHITE
  },

  // SECONDARY BUTTON
  secondaryButton: {
    backgroundColor: THEME.COLORS.GRAY_2
  },
  secondaryButtonUnderlay: { color: THEME.COLORS.GRAY_1 },
  secondaryButtonText: {
    color: THEME.COLORS.WHITE
  },

  //  TERTIARY BUTTON
  tertiaryButton: {
    backgroundColor: THEME.COLORS.WHITE,
    borderWidth: 2,
    borderColor: THEME.COLORS.SECONDARY
  },
  tertiaryButtonUnderlay: { color: THEME.COLORS.GRAY_3 },
  tertiaryButtonText: {
    color: THEME.COLORS.PRIMARY
  },

  debug: {
    borderColor: 'red',
    borderWidth: 1
  }
}
export const MaterialInputStyle = {
  container: {
    position: 'relative',
    width: '100%',
    paddingTop: 12
  },
  baseColor: THEME.COLORS.PRIMARY,
  tintColor: THEME.COLORS.SECONDARY,
  errorColor: THEME.COLORS.ACCENT_RED,
  textColor: THEME.COLORS.BLACK,
  affixTextStyle: {
    color: THEME.COLORS.ACCENT_RED
  }
}

export const InputAndButtonStyle = StyleSheet.create({
  buttonText: {
    color: THEME.COLORS.WHITE,
    fontSize: scale(17.5)
  },
  buttonsArea: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    height: scale(52),
    justifyContent: 'space-between',
    paddingVertical: scale(4)
  },
  noButton: {
    backgroundColor: THEME.COLORS.GRAY_2,
    borderRadius: 3,
    flex: 1,
    marginRight: scale(2)
  },
  tertiaryButtonRow: {
    marginBottom: scale(12)
  },
  yesButton: {
    backgroundColor: THEME.COLORS.SECONDARY,
    borderRadius: 3,
    flex: 1,
    marginLeft: scale(2)
  }
})

export const styles = StyleSheet.create(rawStyles)
