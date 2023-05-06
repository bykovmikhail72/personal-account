import { Button as ButtonAntd } from 'antd'
import { ReactNode } from 'react'

import cn from 'classnames'

import styles from './styles.module.scss'

type TPosition = 'left' | 'center' | 'right'

interface IButtonProps {
  children: string | ReactNode
  className?: string
  position?: TPosition
  disabled?: boolean
  rightIcon?: ReactNode
  leftIcon?: ReactNode
  onClick?: () => void
}

const Button = ({
  children,
  className,
  onClick,
  disabled = false,
  position = 'center',
  rightIcon,
  leftIcon,
}: IButtonProps) => {
  const classNames = cn(
    styles.wrapper,
    styles[position],
    disabled && styles.disabled,
    className,
  )
  return (
    <div className={classNames}>
      <ButtonAntd
        disabled={disabled}
        onClick={onClick}
        className={cn(styles.button, className)}>
        {leftIcon}
        {children}
        {rightIcon}
      </ButtonAntd>
    </div>
  )
}

export default Button
