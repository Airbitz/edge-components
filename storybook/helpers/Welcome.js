// @flow

import React from 'react'
import { Text, View } from 'react-native'

import { THEME } from '../../src/edge-theme.js'
import { Gradient } from '../../src/Gradient/Gradient.js'

const styles = {
  scene: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    // fontFamily: THEME.FONTS.DEFAULT,
    color: THEME.COLORS.WHITE,
    fontSize: 18,
    marginBottom: 18
  },
  content: {
    // fontFamily: THEME.FONTS.DEFAULT,
    color: THEME.COLORS.WHITE,
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 18,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
    width: '100%'
  }
}

export type Props = {}
export default class Welcome extends React.Component<Props> {
  render () {
    return (
      <Gradient>
        <View style={styles.scene}>
          <Text style={styles.header}>Welcome to Edge Components</Text>

          <Text style={styles.content}>This is a UI component catalog and development environment for Edge.</Text>
          <Text style={styles.content}>
            Here you can display and interact with your UI components as stories. A story is a single state of one or
            more UI components. You can have as many stories as you want.
          </Text>
          <Text style={styles.content}>In other words a story is like a visual test case.</Text>
        </View>
      </Gradient>
    )
  }
}
