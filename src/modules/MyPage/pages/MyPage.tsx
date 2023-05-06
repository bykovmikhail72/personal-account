import { Input } from 'antd'

import image from '../images/photo.png'
import styles from './styles.module.scss'
import TextArea from 'antd/es/input/TextArea'
import Typography from '../../../ui/Typography'
import { useState } from 'react'
import PageWrapper from '../../../lib/components/PageWrapper'

const MyPage = () => {
  const [{ fullName, phone, email, about }, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    about: '',
  })

  const handleChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string }
  }) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }))
  }
  return (
    <PageWrapper title="Моя страница">
      <div className={styles.card}>
        <img className={styles.image} src={image} alt="" />
        <div className={styles.content}>
          <div className={styles.input}>
            <Typography size={16}>ФИО:</Typography>
            <Input
              value={fullName}
              name={'fullName'}
              onChange={handleChange}
              style={{ width: 418 }}
            />
          </div>
          <div className={styles.input}>
            <Typography size={16}>Телефон:</Typography>
            <Input
              value={phone}
              name={'phone'}
              onChange={handleChange}
              style={{ width: 418 }}
            />
          </div>
          <div className={styles.input}>
            <Typography size={16}>E-mail:</Typography>
            <Input
              value={email}
              name={'email'}
              onChange={handleChange}
              style={{ width: 418 }}
            />
          </div>
          <div className={styles.input}>
            <Typography size={16}>О себе:</Typography>
            <TextArea
              value={about}
              name={'about'}
              onChange={handleChange}
              style={{ width: 418 }}
            />
          </div>
          <div className={styles.properties}>
            <Typography size={16}>Свойства:</Typography>
            <div className={styles.group}>
              <Typography size={14} className={styles.groupItem}>
                комуникабельная
              </Typography>
              <Typography size={14} className={styles.groupItem}>
                душа компании
              </Typography>
              <Typography size={14} className={styles.groupItem}>
                красиво пою
              </Typography>
              <Typography size={14} className={styles.groupItem}>
                веселая
              </Typography>
              <Typography size={14} className={styles.groupItem}>
                быстро считаю
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default MyPage
