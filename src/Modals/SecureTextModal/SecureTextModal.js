// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { Text, View } from 'react-native'

import { PrimaryButton } from '../../Buttons/PrimaryButton.js'
import { SecondaryButton } from '../../Buttons/SecondaryButton.js'
import { FormField } from '../../FormField/FormField.js'
import { InputAndButtonStyle, MaterialInputStyle } from '../components/styles.js'
import { styles } from '../ModalStyle.js'

// CONTAINER /////////////////////////////////////////////////////////////////////////////
export type ContainerProps = {
  children: Node,
  style?: Object
}
export class Container extends Component<ContainerProps> {
  render () {
    const { children, style, ...props } = this.props
    return (
      <View style={[styles.container, style]} {...props}>
        {children}
      </View>
    )
  }
}

// HEADER /////////////////////////////////////////////////////////////////////////////
export type HeaderProps = {
  children: Node,
  style?: Object
}
export class Header extends Component<HeaderProps> {
  render () {
    const { children, style, ...props } = this.props
    return (
      <View style={[styles.header, style]} {...props}>
        {children}
      </View>
    )
  }
}

// ANDROID_HACK_SPACER /////////////////////////////////////////////////////////////////////////////
/*
  This spacer should be used with Icon to overcome the limitations on Android
  React Native on Android does not support 'Overflow'
  If/When React Native on Android supports 'Overflow',
    * remove the hack component
    * move the Icon component inside Modal.Container
  https://github.com/facebook/react-native/issues/6802
*/
type AndroidHackSpacerProps = {
  style?: Object
}
export class AndroidHackSpacer extends Component<AndroidHackSpacerProps> {
  render () {
    return <View style={styles.androidHackSpacer} />
  }
}

// ICON /////////////////////////////////////////////////////////////////////////////
export type IconProps = {
  children: Node,
  style?: Object
}
export class Icon extends Component<IconProps> {
  static AndroidHackSpacer = AndroidHackSpacer
  render () {
    const { children, style, ...props } = this.props
    return (
      <View style={[styles.icon, style]} {...props}>
        {children}
      </View>
    )
  }
}

// TITLE /////////////////////////////////////////////////////////////////////////////
type TitleProps = {
  children: Node,
  style?: Object
}
export class Title extends Component<TitleProps> {
  render () {
    const { children, style, ...props } = this.props
    return (
      <Text style={[styles.title, style]} {...props}>
        {children}
      </Text>
    )
  }
}

// DESCRIPTION /////////////////////////////////////////////////////////////////////////////
export type DescriptionProps = {
  children: Node,
  style?: Object
}
export class Description extends Component<DescriptionProps> {
  render () {
    const { children, style, ...props } = this.props
    return (
      <Text style={[styles.description, style]} {...props}>
        {children}
      </Text>
    )
  }
}

// BODY /////////////////////////////////////////////////////////////////////////////
type BodyProps = {
  children: Node,
  style?: Object
}
export class Body extends Component<BodyProps> {
  render () {
    const { children, style, ...props } = this.props
    return (
      <View style={[styles.body, style]} {...props}>
        {children}
      </View>
    )
  }
}

// FOOTER /////////////////////////////////////////////////////////////////////////////
type FooterProps = {
  children: Node,
  style?: Object
}
export class Footer extends Component<FooterProps> {
  render () {
    const { children } = this.props
    return <View>{children}</View>
  }
}

// Item /////////////////////////////////////////////////////////////////////////////
type ItemProps = {
  children: Node,
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

// Row /////////////////////////////////////////////////////////////////////////////
type RowProps = {
  children: Node,
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

// INTERACTIVE_MODAL /////////////////////////////////////////////////////////////////////////////
type SecureTextModalProps = {
  isActive?: boolean,
  style?: Object,
  input: {|
    label: string,
    autoCorrect?: boolean,
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad',
    initialValue?: string,
    autoFocus?: boolean
  |},
  yesButton: {
    title: string
  },
  noButton: {
    title: string
  },
  icon: Node,
  message?: string | Node,
  title?: string,
  onDone: any => void,
  validateInput: string => Promise<{ success: boolean, message: string }>
}

type SecureTextModalState = {
  value: string,
  error: string
}
export class SecureTextModal extends Component<SecureTextModalProps, SecureTextModalState> {
  static Icon = Icon
  static Title = Title
  static Description = Description
  static Body = Body
  static Footer = Footer
  static Item = Item
  static Row = Row

  constructor (props: SecureTextModalProps) {
    super(props)
    this.state = {
      value: this.props.input.initialValue || '',
      error: ''
    }
  }

  updateValue = (value: string) => {
    this.setState({
      value
    })
  }

  validateInput = async () => {
    const { validateInput, onDone } = this.props
    const { value } = this.state
    const result = await validateInput(value)
    if (result.success) {
      onDone(true)
    } else {
      this.setState({
        error: result.message
      })
    }
  }

  render () {
    const { isActive, style, ...props } = this.props
    const { error } = this.state
    return (
      <View style={styles.modal} {...props}>
        <SecureTextModal.Icon>{this.props.icon}</SecureTextModal.Icon>
        <Container style={style}>
          <Icon.AndroidHackSpacer />
          <SecureTextModal.Title style={{ textAlign: 'center' }}>
            <Text>{this.props.title || ''}</Text>
          </SecureTextModal.Title>
          <SecureTextModal.Body>
            {this.props.message && (
              <SecureTextModal.Row style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <SecureTextModal.Description style={{ textAlign: 'center' }}>
                  {this.props.message || ''}
                </SecureTextModal.Description>
              </SecureTextModal.Row>
            )}
            <View>
              <FormField
                style={MaterialInputStyle}
                {...this.props.input}
                value={this.state.value}
                onChangeText={this.updateValue}
                error={error}
                secureTextEntry
              />
            </View>
          </SecureTextModal.Body>
          <SecureTextModal.Footer>
            <SecureTextModal.Row style={InputAndButtonStyle.row}>
              <SecondaryButton onPress={() => this.props.onDone(null)} style={InputAndButtonStyle.noButton}>
                <SecondaryButton.Text style={InputAndButtonStyle.buttonText}>
                  {this.props.noButton.title}
                </SecondaryButton.Text>
              </SecondaryButton>
              <PrimaryButton
                onPress={
                  // $FlowFixMe
                  this.validateInput
                }
                style={InputAndButtonStyle.yesButton}
              >
                <PrimaryButton.Text style={InputAndButtonStyle.buttonText}>
                  {this.props.yesButton.title}
                </PrimaryButton.Text>
              </PrimaryButton>
            </SecureTextModal.Row>
          </SecureTextModal.Footer>
        </Container>
      </View>
    )
  }
}

export type SecureTextModalOpts = {
  title?: string,
  message?: string | Node,
  icon: Node,
  yesButton: Object,
  noButton: Object,
  input?: Object,
  validateInput: string => Promise<{ success: boolean, message: string }>
}

export const createSecureTextModal = (opts: SecureTextModalOpts) =>
  function SecureTextModalComponent (props: { +onDone: Function }) {
    return <SecureTextModal {...opts} {...props} />
  }
