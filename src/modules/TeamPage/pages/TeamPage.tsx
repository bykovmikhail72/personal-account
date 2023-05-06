import PageWrapper from '../../../lib/components/PageWrapper'
import TeamItem from '../components/TeamItem'

import styles from './styles.module.scss'

const TeamPage = () => {
  return (
    <PageWrapper title="Команда">
      <div className={styles.container}>
        <TeamItem inProcess={true} />
        <TeamItem inProcess={false} />
      </div>
    </PageWrapper>
  )
}

export default TeamPage
