import { useState } from 'react'
import Button from '../../../ui/Button'
import Typography from '../../../ui/Typography'
import { Modal } from '../../../lib/components/Modal'
import PageWrapper from '../../../lib/components/PageWrapper'
import { Input } from 'antd'

import styles from './styles.module.scss'

const ReportsPage = () => {
  const [showModal, setShowModal] = useState(false)
  const { Search } = Input;
  const handleClick = () => {
    setShowModal(!showModal)
  }

  return (
    <PageWrapper title="Отчеты">
      <div className={styles.reports}>
        <Typography size={16}>Вы получите:</Typography>
        <Typography size={16}>1. ФИО, e-mail, телефон</Typography>
        <Typography size={16}>
          2. Список битв (название, дата проведения, тип, результаты), в которых
          принимал участие выбранный участник
        </Typography>
        <Button className={styles.button} onClick={handleClick}>
          Вывод информации по конкретному участнику
        </Button>
      </div>
      <Modal
        onClose={handleClick}
        open={showModal}
        title="Отчет по конкретному участнику"
        titleSize={16}
        content={
          <>
            <div className={styles.input}>
              <Typography className={styles.label} size={14}>Поиск участника:</Typography>
              <Search />
            </div>
            <Button className={styles.modalButton} position='right' >Сформировать</Button>
          </>
        }
      />
    </PageWrapper>
  )
}

export default ReportsPage
