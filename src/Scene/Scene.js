// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'

import { Body } from './Body.js'
import { Footer } from './Footer.js'
import { Header } from './Header.js'
import { Item } from './Item.js'
import { Padding } from './Padding.js'
import { Row } from './Row.js'

export const debug = {
  // borderColor: 'red', borderWidth: 1
}

export const rawStyles = {
  scene: {
    ...debug,
    flex: 1
  }
}
export const styles = StyleSheet.create(rawStyles)

export type Props = {
  children?: Node,
  // $FlowFixMe
  style?: Object
}
export class Scene extends Component<Props> {
  static Padding = Padding
  static Header = Header
  static Body = Body
  static Footer = Footer
  static Row = Row
  static Item = Item

  render () {
    const { children, style, ...props } = this.props

    return (
      <View style={[styles.scene, style]} {...props}>
        {children}
      </View>
    )
  }
}

export { Header, Body, Footer }
export default Scene
