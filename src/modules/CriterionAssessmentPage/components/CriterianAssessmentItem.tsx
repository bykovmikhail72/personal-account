import Button from '../../../ui/Button'
import Typography from '../../../ui/Typography'
import cn from 'classnames'

import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'

interface ICriterionAssessmentItemProps {
  status?: string
  chairman?: string
  kind?: string
  date?: string
  title?: string
  id?: number
}

const CriterionAssessmentItem = ({
  status,
  chairman,
  kind,
  date,
  title,
  id,
}: ICriterionAssessmentItemProps) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/assessment/module')
  }

  const classNames = cn(styles.item, status === 'Завершено' && styles.finished)

  const disabled = status === 'Завершено' && true

  return (
    <div className={classNames}>
      <div className={styles.info}>
        <Typography size={10} color={'#6E6E6E'}>
          {date}
        </Typography>
        <Typography
          size={10}
          color={'#6E6E6E'}>{`Председатель жюри: ${chairman}`}</Typography>
        <Typography size={10} color={'#6E6E6E'}>{`Вид: ${kind}`}</Typography>
        <Typography
          size={10}
          color={status === 'В процессе' ? '#4DCB4A' : '#CB4A69'}>
          {status}
        </Typography>
      </div>
      <Typography size={16} weight="bold" className={styles.title}>
        {title}
      </Typography>
      <div className={styles.modules}>
        <div className={styles.module}>
          <div className={styles.moduleItem}>
            <Typography>Модуль А:</Typography>
            <Button onClick={handleClick} disabled={disabled}>
              Оценить
            </Button>
          </div>
          <div className={styles.moduleItem}>
            <Typography>Модуль B:</Typography>
            <Button onClick={handleClick} disabled={disabled}>
              Оценить
            </Button>
          </div>
          <div className={styles.moduleItem}>
            <Typography>Модуль C:</Typography>
            <Button onClick={handleClick} disabled={disabled}>
              Оценить
            </Button>
          </div>
        </div>
        <div className={styles.module}>
          <div className={styles.moduleItem}>
            <Typography>Модуль D:</Typography>
            <Button onClick={handleClick} disabled={disabled}>
              Оценить
            </Button>
          </div>
          <div className={styles.moduleItem}>
            <Typography>Модуль E:</Typography>
            <Button onClick={handleClick} disabled={disabled}>
              Оценить
            </Button>
          </div>
          <div className={styles.moduleItem}>
            <Typography>Модуль F:</Typography>
            <Button onClick={handleClick} disabled={disabled}>
              Оценить
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CriterionAssessmentItem
