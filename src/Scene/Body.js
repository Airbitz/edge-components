// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { Text as RNText, StyleSheet, View } from 'react-native'

import { THEME } from '../edge-theme.js'

const debug = {
  // borderColor: 'red', borderWidth: 1
}

export const rawStyles = {
  text: {
    ...debug,
    // fontFamily: THEME.FONTS.DEFAULT,
    color: THEME.COLORS.WHITE,
    fontSize: 14
  },
  body: {
    ...debug,
    alignItems: 'stretch'
  }
}
export const styles = StyleSheet.create(rawStyles)

export type TextProps = {
  children?: Node,
  // $FlowFixMe
  style?: Object
}
export class Text extends Component<TextProps> {
  render () {
    const { children, style, ...props } = this.props

    return (
      <RNText ellipsizeMode="middle" numberOfLines={1} style={[styles.text, style]} {...props}>
        {children}
      </RNText>
    )
  }
}

export type BodyProps = {
  children?: Node,
  // $FlowFixMe
  style?: Object
}
export class Body extends Component<BodyProps> {
  static Text = Text

  render () {
    const { children, style, ...props } = this.props

    return (
      <View style={[styles.body, style]} {...props}>
        {children}
      </View>
    )
  }
}

export default Body
