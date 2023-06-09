import React, {
  AnchorHTMLAttributes,
  AriaRole,
  createElement,
  FC,
  memo,
  MouseEvent,
} from 'react'

import cn from 'classnames'

import {
  TypographyComponent,
  TypographySizeType,
  TypographyWeight,
} from './types'
import classes from './Typography.module.scss'

interface TypographyProps
  extends Pick<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'href' | 'target' | 'rel'
  > {
  className?: string
  weight?: TypographyWeight
  size?: TypographySizeType
  component?: TypographyComponent
  disabled?: boolean
  color?: string
  role?: AriaRole
  tabIndex?: number
  onClick?: (e: MouseEvent<HTMLElement>) => void
  children?: string | React.ReactNode
  center?: boolean
}

const Typography: FC<TypographyProps> = ({
  className = '',
  component = 'p',
  weight,
  color,
  size = 14,
  center,
  href,
  target,
  children,
  ...props
}) => {
  return createElement(
    component,
    {
      className: cn(
        classes.typography,
        weight ? classes[weight] : undefined,
        classes[`size-${size}`],
        center && classes.center,
        className,
        {
          [classes.link]: !!href,
        },
      ),
      style: { color },
      target,
      href,
      ...props,
    },
    children,
  )
}

export default memo(Typography)
