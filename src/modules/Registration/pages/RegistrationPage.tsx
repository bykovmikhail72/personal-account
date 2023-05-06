import styles from './styles.module.scss'
import Input from '../../../ui/Input'
import Typography from '../../../ui/Typography'
import { ConfigProvider, Select } from 'antd'

import image from '../images/background.png'
import Button from '../../../ui/Button'
import { useState } from 'react'
import IconFacebook from '../../../ui/icons/IconFacebook'
import IconWatsup from '../../../ui/icons/IconWatsup'
import IconTelegram from '../../../ui/icons/IconTelegram'
import { useNavigate } from 'react-router-dom'

const ROLES = ['Участник', 'Председатель', 'Эксперт']

const RegistrationPage = () => {
  const navigate = useNavigate()
  const [{ fullName, role, email, password, confirmPassword }, setForm] =
    useState({
      fullName: '',
      email: '',
      role: '',
      password: '',
      confirmPassword: '',
    })

  const handleChange = ({
    target: { name, value },
  }: {
    target: {
      name: string
      value: string
    }
  }) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }))
  }

  const handleChangeSelect = (value: string) => {
    setForm((prevForm) => ({ ...prevForm, role: value }))
  }

  const handleSubmit = () => {
    console.log(fullName, role, email, password, confirmPassword)
  }

  const handleLogin = () => {}

  return (
    <div className={styles.registration}>
      <img className={styles.image} src={image} alt="" />
      <div className={styles.content}>
        <Typography center weight="bold" size={16}>
          Добро пожаловать!
        </Typography>
        <Typography center size={12}>
          для регистрации заполните все поля
        </Typography>
        <div className={styles.inputs}>
          <Input
            onChange={handleChange}
            value={fullName}
            name="fullName"
            label="ФИО:"
          />
          <div className={styles.select}>
            <label>Роль:</label>
            <ConfigProvider
              theme={{
                token: {
                  borderRadius: 50,
                },
                components: {
                  Select: {
                    colorBorder: '#839bf1',
                    colorPrimaryHover: '#1343f0',
                    colorBgContainer: '#ebefff'
                  },
                },
              }}>
              <Select
                onChange={handleChangeSelect}
                style={{ borderColor: '#839bf1' }}
                allowClear
                options={ROLES.map((item) => ({
                  label: item,
                  value: item,
                  name: item,
                }))}
              />
            </ConfigProvider>
          </div>
          <Input
            onChange={handleChange}
            value={email}
            name="email"
            label="Email:"
          />
          <Input
            onChange={handleChange}
            value={password}
            name="password"
            label="Пароль:"
          />
          <Input
            onChange={handleChange}
            value={confirmPassword}
            name="confirmPassword"
            label="Повторите пароль:"
          />
        </div>
        <Button onClick={handleSubmit} className={styles.button}>
          Зарегистрироваться
        </Button>
        <Typography
          className={styles.login}
          size={16}
          center
          onClick={handleLogin}>
          Уже есть аккаунт? <b onClick={() => navigate('/')}>Войти</b>
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

export default RegistrationPage
