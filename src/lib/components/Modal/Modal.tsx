import React, { memo, ReactNode, useEffect } from 'react'
import { default as ReactModal } from 'react-modal'

import { rootElement } from '../../..'

import IconX from '../../../ui/icons/IconX'

import cn from 'classnames'

import styles from './Modal.module.scss'
import { TypographySizeType } from '../../../ui/Typography/types'
import Typography from '../../../ui/Typography'

interface IModal {
  open: boolean
  onClose: () => void
  title: string
  content: ReactNode
  footer?: ReactNode
  className?: string
  titleSize?: TypographySizeType
}

const Modal = ({
  open,
  onClose,
  title,
  content,
  footer,
  className,
  titleSize = 24,
}: IModal) => {
  const handleCloseModal = () => {
    onClose()
  }

  useEffect(() => {
    if (open) {
      rootElement.style.filter = 'blur(5px)'
    } else {
      rootElement.style.filter = 'none'
    }

    return () => {
      rootElement.style.filter = 'none'
    }
  }, [open])

  return (
    <ReactModal
      isOpen={open}
      className={cn(styles.modal, className)}
      overlayClassName={styles.overlay}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc>
      <div className={styles.header}>
        <Typography size={titleSize} weight="medium">
          {title}
        </Typography>
        <IconX onClick={handleCloseModal}
        />
      </div>
      <div className={styles.content}>{content}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </ReactModal>
  )
}

export default memo(Modal)
