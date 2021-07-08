// @flow

import { THEME } from '../edge-theme.js'
import { scale } from '../scaling.js'

const InputStyles = {
  container: {
    position: 'relative',
    borderBottomColor: THEME.COLORS.PRIMARY,
    borderBottomWidth: 1,
    width: '100%'
  },
  inputStyle: {
    position: 'relative',
    color: '#FFFFFF'
  },
  fontSize: scale(15),
  titleFontSize: scale(12),
  labelFontSize: scale(12)
}

export { InputStyles }
