import React, { memo } from 'react'

import cn from 'classnames'

import styles from './styles.module.scss'
import { TypographySizeType } from '../../../ui/Typography/types'
import Typography from '../../../ui/Typography'

interface PageWrapperProps {
  children: React.ReactNode
  title?: string
  className?: string
  fontSize?: TypographySizeType
  align?: 'start' | 'end' | 'center'
  headerRight?: React.ReactNode
  isLoading?: boolean
}

const PageWrapper = ({
  children,
  title,
  className,
  fontSize = 24,
  align,
  headerRight,
  isLoading,
}: PageWrapperProps) => (
  <div
    className={cn(styles.wrapper, className, {
      [styles[`align-${align}`]]: align,
    })}>
    {title && (
      <div className={styles.header}>
        <Typography className={styles.title} size={fontSize}>
          {title}
        </Typography>

        {headerRight}
      </div>
    )}
    <div className={styles.line}/>
    {isLoading ? (
      <div className={styles.spinner}>
        {/* <Loader color={COLORS.BRAND.OCEAN} /> */}
      </div>
    ) : (
      children
    )}
  </div>
)

export default memo(PageWrapper)
