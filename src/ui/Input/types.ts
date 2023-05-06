import { ComponentProps, ReactNode, Ref } from 'react'

import { TypographySizeType, TypographyWeight } from '../Typography/types'

export type InputState = 'default' | 'warning' | 'error'
export type InputSize = 'small' | 'medium' | 'large'

export interface IInputChangeEvent<T = string> {
  target: {
    value: T
    name: string
  }
}
export interface IInputProps extends ComponentProps<'input'> {
  name?: string
  label?: string
  id?: string
  error?: boolean
  errorText?: string
  state?: InputState
  contentSize?: InputSize
  rightIcon?: ReactNode
  leftIcon?: ReactNode
  labelWeight?: TypographyWeight
  labelSize?: TypographySizeType
  mask?: string
  clearButton?: boolean
  maskPlaceholder?: string
  inputWrapperClass?: string
  ref?: Ref<HTMLInputElement>
  onClick?: () => void
  onChange?: (e: IInputChangeEvent) => void
}
