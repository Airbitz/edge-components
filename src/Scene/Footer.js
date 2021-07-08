// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { Text as RNText, StyleSheet, View } from 'react-native'

export const rawStyles = {
  footer: {
    alignItems: 'stretch',
    justifyContent: 'center'
  }
}
export const styles = StyleSheet.create(rawStyles)

export type FooterProps = {
  children?: Node,
  // $FlowFixMe
  style?: Object
}
export class Footer extends Component<FooterProps> {
  static Text = RNText

  render () {
    const { children, style } = this.props

    return <View style={[styles.footer, style]}>{children}</View>
  }
}

export default Footer
