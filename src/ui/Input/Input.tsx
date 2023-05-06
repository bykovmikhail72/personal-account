import Typography from '../Typography'
import { IInputProps } from './types'

import styles from './styles.module.scss'
import cn from 'classnames'

const Input = ({
  className,
  label,
  type = 'text',
  contentSize = 'small',
  labelWeight = 'regular',
  labelSize = 16,
  state = 'default',
  disabled = false,
  id,
  value,
  onChange,
  name,
  ref,
  ...rest
}: IInputProps) => {
  const inputClass = cn(
    styles.input,
    styles[state],
    styles[contentSize],
  )

  return (
    <div className={styles.inputContainer}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          <Typography size={labelSize} weight={labelWeight}>
            {label}
          </Typography>
        </label>
      )}
      <input
        id={id}
        className={inputClass}
        disabled={disabled}
        type={type}
        ref={ref}
        value={value}
        name={name}
        onChange={onChange}
        {...rest}
      />
    </div>
  )
}

export default Input
