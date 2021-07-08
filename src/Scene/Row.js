// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'

const debug = {
  // borderColor: 'red', borderWidth: 1
}

export const rawStyles = {
  row: {
    ...debug,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
}
export const styles = StyleSheet.create(rawStyles)

export type RowProps = {
  children?: Node,
  // $FlowFixMe
  style?: Object
}
export class Row extends Component<RowProps> {
  render () {
    const { children, style, ...props } = this.props

    return (
      <View style={[styles.row, style]} {...props}>
        {children}
      </View>
    )
  }
}

export default Row
