import PageWrapper from '../../../lib/components/PageWrapper/PageWrapper'
import CriterionAssessmentItem from '../components/CriterianAssessmentItem'

import styles from './styles.module.scss'

const mok = [
  {
    title: 'Битва маркетологов',
    status: 'В процессе',
    chairman: 'Иванов Иван Иванович',
    date: '22.03.2023',
    id: 1,
    kind: 'командный зачет',
  },
  {
    title: 'Битва маркетологов',
    status: 'Завершено',
    chairman: 'Сидоров Иван Иванович',
    date: '22.03.2023',
    id: 2,
    kind: 'командный зачет',
  },
  {
    title: 'Битва маркетологов',
    status: 'Завершено',
    chairman: 'Петров Иван Иванович',
    date: '22.03.2023',
    id: 3,
    kind: 'командный зачет',
  },
]

const CriterionAssessmentPage = () => {
  return (
    <PageWrapper title="Критериальная оценка">
      <div className={styles.container}>
        {mok.map(({ chairman, date, id, kind, title, status }) => {
          return (
            <CriterionAssessmentItem
              chairman={chairman}
              date={date}
              id={id}
              kind={kind}
              status={status}
              title={title}
              key={id}
            />
          )
        })}
      </div>
    </PageWrapper>
  )
}

export default CriterionAssessmentPage
