import PageWrapper from 'lib/components/PageWrapper/PageWrapper'
import CreateTeamItem from '../components/CreateTeamItem'

import styles from './styles.module.scss'

const mok = [
  {
    id: 1,
    name: 'Битва маркетологов',
    chairman: 'Иванов Иван Иванович',
    date: '22.03.2023',
    type: 'Командный зачет',
    teams: [
      {
        name: 'Клуб Винкс. Школа Волшебниц',
        id: 1,
      },
      {
        name: 'Клуб Винкс',
        id: 2,
      },
    ],
    members: [
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: false,
        email: 'elvira_volkova_1988@yandex.ru'
      },
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: false,
        email: 'elvira_volkova_1988@yandex.ru'
      },
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: false,
        email: 'elvira_volkova_1988@yandex.ru'
      },
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: true,
        email: 'elvira_volkova_1988@yandex.ru'
      },
    ],
  },
  {
    id: 2,
    name: 'Битва таргетологов',
    chairman: 'Иванов Иван Иванович',
    date: '22.03.2023',
    type: 'Командный зачет',
    teams: [
      {
        name: 'Клуб Винкс. Школа Волшебниц',
        id: 1,
      },
      {
        name: 'Клуб Винкс',
        id: 2,
      },
    ],
    members: [
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: true,
        email: 'elvira_volkova_1988@yandex.ru'
      },
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: false,
        email: 'elvira_volkova_1988@yandex.ru'
      },
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: false,
        email: 'elvira_volkova_1988@yandex.ru'
      },
      {
        fullName: 'Иванов Иван Иванович',
        isCaptain: false,
        email: 'elvira_volkova_1988@yandex.ru'
      },
    ],
  },
]

const CreateTeamPage = () => {
  return (
    <PageWrapper title="Создание команды">
      <div className={styles.wrapper}>
        {mok.map((item, i) => {
          return (
            <CreateTeamItem
              mok={mok}
              teams={item.teams}
              key={item.id}
              id={item.id}
              name={item.name}
              user={item.members}
              chairman={item.chairman}
              date={item.date}
              type={item.type}
            />
          )
        })}
      </div>
    </PageWrapper>
  )
}

export default CreateTeamPage
