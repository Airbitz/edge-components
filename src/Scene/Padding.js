// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'

const debug = {
  // borderColor: 'red', borderWidth: 1
}

export const rawStyles = {
  padding: {
    ...debug
  }
}
export const styles = StyleSheet.create(rawStyles)

export type PaddingProps = {
  children?: Node,
  // $FlowFixMe
  style?: Object
}
export class Padding extends Component<PaddingProps> {
  render () {
    const { children, style, ...props } = this.props

    return (
      <View style={[styles.padding, style]} {...props}>
        {children}
      </View>
    )
  }
}

export default Padding
