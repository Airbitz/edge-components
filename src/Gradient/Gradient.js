// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { THEME } from '../edge-theme.js'

type Coordinates = { x: number, y: number }

const REVERSE_COLORS = [THEME.COLORS.GRADIENT.DARK, THEME.COLORS.GRADIENT.LIGHT]
const COLORS = [THEME.COLORS.GRADIENT.LIGHT, THEME.COLORS.GRADIENT.DARK]
const UPPER_LEFT = { x: 0, y: 0 }
const UPPER_RIGHT = { x: 1, y: 0 }

const rawStyles = {
  gradient: {
    height: '100%',
    width: '100%'
  }
}
const styles = StyleSheet.create(rawStyles)

export type Props = {
  children?: Node,
  reverse?: boolean,
  colors?: Array<string>,
  start?: Coordinates,
  end?: Coordinates,
  style?: Object
}

export class Gradient extends Component<Props> {
  render () {
    const { children, reverse, colors, start, end, style } = this.props
    return (
      <LinearGradient
        style={[styles.gradient, style]}
        start={start || UPPER_LEFT}
        end={end || UPPER_RIGHT}
        colors={colors || reverse ? REVERSE_COLORS : COLORS}
      >
        {children}
      </LinearGradient>
    )
  }
}

export default Gradient
