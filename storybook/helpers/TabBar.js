// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { Text as RNText, StyleSheet, View } from 'react-native'

import { THEME } from '../../src/edge-theme.js'

const debugStyle = { borderColor: 'red', borderWidth: 1 }

const rawStyles = {
  tabBarText: {
    // fontFamily: THEME.FONTS.DEFAULT,
    color: THEME.COLORS.PRIMARY,
    fontSize: 18
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: THEME.COLORS.PRIMARY,
    borderWidth: 1
  },
  tabBar: {
    flexDirection: 'row',
    height: THEME.TAB_BAR.HEIGHT,
    width: '100%',
    alignItems: 'stretch',
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.WHITE
  }
}
const styles = StyleSheet.create(rawStyles)

export type TabProps = {
  children?: Node,
  style?: Object
}
export class Tab extends Component<TabProps> {
  render () {
    const { children, style } = this.props
    return <View style={[styles.tab, style]}>{children}</View>
  }
}

export type TextProps = {
  children?: Node,
  style?: Object
}
export class Text extends Component<TextProps> {
  render () {
    const { children, style } = this.props
    return <RNText style={[styles.tabBarText, style]}>{children}</RNText>
  }
}

export type Props = {}
export class TabBar extends Component<Props> {
  static Text = Text
  render () {
    return (
      <View style={[styles.tabBar, debugStyle]}>
        <Tab>
          <Text>Tab 1</Text>
        </Tab>
        <Tab>
          <Text>Tab 2</Text>
        </Tab>
        <Tab>
          <Text>Tab 3</Text>
        </Tab>
        <Tab>
          <Text>Tab 4</Text>
        </Tab>
      </View>
    )
  }
}

export default TabBar
