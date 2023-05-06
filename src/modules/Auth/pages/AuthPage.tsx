import { Button } from 'antd'

import styles from './styles.module.scss'
import { useCallback, useState } from 'react'
import IconFacebook from '../../../ui/icons/IconFacebook'
import IconWatsup from '../../../ui/icons/IconWatsup'
import IconTelegram from '../../../ui/icons/IconTelegram'
import Typography from '../../../ui/Typography'
import Input from '../../../ui/Input'

import background from '../images/Auth.png'

const AuthPage = () => {
  const [{ login, password }, setForm] = useState({ login: '', password: '' })

  const handleChange = useCallback(
    ({
      target: { name, value },
    }: {
      target: {
        name: string
        value: string
      }
    }) => {
      setForm((prevForm) => ({ ...prevForm, [name]: value }))
    },
    [],
  )

  const handleSubmit = () => {
    setForm({ login: '', password: '' })
  }

  return (
    <div className={styles.auth}>
      <img className={styles.image} src={background} alt="" />
      <div className={styles.authContainer}>
        <Typography className={styles.title} weight="bold" size={16}>
          Здравствуйте!
        </Typography>
        <div className={styles.form}>
          <div className={styles.input}>
            <Typography className={styles.label}>E-mail:</Typography>
            <Input
              contentSize="small"
              name="login"
              value={login}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input}>
            <Typography className={styles.label}>Пароль:</Typography>
            <Input
              contentSize="small"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button onClick={handleSubmit} className={styles.button} size="large">
          Войти
        </Button>
        <Typography size={14} className={styles.info}>
          Нет данных для входа? <b>Обратитесь к организатору</b>
        </Typography>
        <div className={styles.social}>
          <IconFacebook />
          <IconWatsup />
          <IconTelegram />
        </div>
      </div>
    </div>
  )
}

export default AuthPage
