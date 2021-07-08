// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'

const debug = {
  // borderColor: 'red', borderWidth: 1
}

export const rawStyles = {
  item: {
    ...debug,
    flex: 1
  }
}
export const styles = StyleSheet.create(rawStyles)

export type ItemProps = {
  children?: Node,
  // $FlowFixMe
  style?: Object
}
export class Item extends Component<ItemProps> {
  render () {
    const { children, style, ...props } = this.props

    return (
      <View style={[styles.item, style]} {...props}>
        {children}
      </View>
    )
  }
}

export default Item
