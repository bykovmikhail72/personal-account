import Typography from '../../../ui/Typography'
import styles from './styles.module.scss'

import cn from 'classnames'

const title = 'Заводные котята'

interface ITeamItemProps {
  inProcess?: boolean
}

const members = [
  {
    fullName: 'Макаров Антон Владимирович',
    email: 'elvira_volkova_1988@yandex.ru',
    number: '+7(910)123-23-23',
    capitan: true,
  },
  {
    fullName: 'Макаров Антон Владимирович',
    email: 'elvira_volkova_1988@yandex.ru',
    number: '+7(910)123-23-23',
    capitan: false,
  },
  {
    fullName: 'Макаров Антон Владимирович',
    email: 'elvira_volkova_1988@yandex.ru',
    number: '+7(910)123-23-23',
    capitan: false,
  },
  {
    fullName: 'Макаров Антон Владимирович',
    email: 'elvira_volkova_1988@yandex.ru',
    number: '+7(910)123-23-23',
    capitan: false,
  },
]

const TeamItem = ({ inProcess }: ITeamItemProps) => {
  return (
    <div className={cn(styles.wrapper, !inProcess && styles.disable)}>
      <div className={styles.status}>
        <Typography weight="light" color={'#6E6E6E'} size={10}>
          20.01.2023
        </Typography>
        <Typography weight="light" color={'#6E6E6E'} size={10}>
          Битва парикмахеров
        </Typography>
        <Typography
          weight="light"
          color={inProcess ? '#4DCB4A' : '#CB4A69'}
          size={10}>
          В процессе
        </Typography>
      </div>
      <Typography className={styles.title} size={16} weight="bold">
        {title}
      </Typography>
      <div className={styles.content}>
        {members.map((item, i) => {
          return (
            <div key={i} className={styles.item}>
              <Typography
                className={cn(styles.fullName, item.capitan && styles.capitan)}
                size={14}
                weight="medium">
                {`${i + 1}. ${item.fullName}`}
              </Typography>
              <Typography size={14} weight="medium" className={styles.email}>
                {item.email}
              </Typography>
              <Typography size={14} weight="medium">
                {item.number}
              </Typography>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TeamItem
