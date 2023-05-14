import { useState } from 'react'
import Typography from '../../../ui/Typography'

import styles from './styles.module.scss'
import PageWrapper from '../../../lib/components/PageWrapper'
import ShowTeam from 'lib/components/ShowTeam/ShowTeam'

const history = [
  {
    id: 1,
    name: 'Битва маркетологов',
    date: '23.02.2023',
    status: 'В процессе',
    winner: '------',
    members: [
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: true,
        email: 'elvira_volkova_1988@yandex.ru',
      },
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: false,
        email: 'elvira_volkova_1988@yandex.ru',
      },
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: false,
        email: 'elvira_volkova_1988@yandex.ru',
      },
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: false,
        email: 'elvira_volkova_1988@yandex.ru',
      },
    ],
  },
  {
    id: 2,
    name: 'Битва',
    date: '23.02.2023',
    status: 'Завершено',
    winner: 'Заводные котята',
    members: [
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: true,
        email: 'elvira_volkova_1988@yandex.ru',
      },
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: false,
        email: 'elvira_volkova_1988@yandex.ru',
      },
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: false,
        email: 'elvira_volkova_1988@yandex.ru',
      },
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: false,
        email: 'elvira_volkova_1988@yandex.ru',
      },
    ],
  },
  {
    id: 3,
    name: 'маркетологов',
    date: '23.02.2023',
    status: 'Завершено',
    winner: 'Веселые гномы',
    members: [
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: false,
        email: 'elvira_volkova_1988@yandex.ru',
      },
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: false,
        email: 'elvira_volkova_1988@yandex.ru',
      },
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: true,
        email: 'elvira_volkova_1988@yandex.ru',
      },
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: false,
        email: 'elvira_volkova_1988@yandex.ru',
      },
    ],
  },
]

const HistoryPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [id, setId] = useState<number | undefined>(undefined)

  const handleClick = (id?: number) => {
    const index = history.findIndex((item) => item.id === id)
    setId(index)
    setShowModal(!showModal)
  }
  return (
    <PageWrapper title="История чемпионатов">
      <table className={styles.table}>
        <tr onClick={() => handleClick} className={styles.row}>
          <td>
            <Typography color={'#454B53'} size={12}>
              НАЗВАНИЕ
            </Typography>
          </td>
          <td>
            <Typography color={'#454B53'} size={12}>
              ДАТА ПРОВЕДЕНИЯ
            </Typography>
          </td>
          <td>
            <Typography color={'#454B53'} size={12}>
              СТАТУС
            </Typography>
          </td>
          <td>
            <Typography color={'#454B53'} size={12}>
              ПОБЕДИТЕЛЬ
            </Typography>
          </td>
        </tr>
        {history.map((item, i) => {
          return (
            <tr
              id={`${item.id}`}
              onClick={() => handleClick(item.id)}
              className={styles.row}
              key={i}>
              <td>
                <Typography size={12}>{item.name}</Typography>
              </td>
              <td>
                <Typography size={12}>{item.date}</Typography>
              </td>
              <td>
                <Typography
                  color={item.status === 'В процессе' ? '#4DCB4A' : '#CB4A69'}
                  size={12}>
                  {item.status}
                </Typography>
              </td>
              <td>
                <Typography size={12}>{item.winner}</Typography>
              </td>
            </tr>
          )
        })}
      </table>
      <ShowTeam showModal={showModal} handleClick={handleClick} data={history} id={id} />
    </PageWrapper>
  )
}

export default HistoryPage
