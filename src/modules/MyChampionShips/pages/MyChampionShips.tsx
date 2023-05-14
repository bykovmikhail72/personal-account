import PageWrapper from 'lib/components/PageWrapper/PageWrapper'
import CreateBattleComponent from '../components/CreateBattleComponent'

import styles from './styles.module.scss'

const mok = [
  {
    id: 1,
    name: 'Битва маркетологов',
    status: 'В процессе',
  },
  {
    id: 2,
    name: 'Битва титанов',
    status: 'Завершено',
  },
]

const MyChampionShips = () => {
  return (
    <PageWrapper title="Мои Чемпионаты">
      <div className={styles.wrapper}>
        {mok.map((item, i) => {
          return (
            <CreateBattleComponent
              title={item.name}
              status={item.status}
              id={item.id}
              key={i}
            />
          )
        })}
      </div>
    </PageWrapper>
  )
}

export default MyChampionShips
