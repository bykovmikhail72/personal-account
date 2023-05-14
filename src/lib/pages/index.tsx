import React from 'react'
import { Outlet } from 'react-router-dom'

import { observer } from 'mobx-react-lite'

import { SiderMenuItem } from './Sider/Sider'
import Sider from './Sider'
import styles from './styles.module.scss'
import IconExit from '../../ui/icons/IconExit'
import IconMyPage from '../../ui/icons/IconMyPage'
import IconTeam from '../../ui/icons/IconTeam'
import IconHistory from '../../ui/icons/IconHistory'
import IconReport from '../../ui/icons/IconReport'
import IconCriterionAssessment from '../../ui/icons/IconCriterionAssessment'
import IconMyChampionShips from 'ui/icons/IconMyChampionShips'
import IconCreateCommand from 'ui/icons/IconCreateComand'

const role = 'chairman'

/**
 * @prop [litePage] Флаг отображения страницы только с логотипом.
 */
interface IPageProps {
  litePage?: boolean
}

const footerItems: SiderMenuItem[] = [
  {
    title: 'Выйти',
    link: '/auth',
    Icon: IconExit,
  },
]

const content = (): SiderMenuItem[] => {
  if (role === 'chairman') {
    return [
      {
        title: 'Моя страница',
        link: '/',
        Icon: IconMyPage,
      },
      {
        title: 'Критериальная оценка',
        link: '/assessment',
        Icon: IconCriterionAssessment,
      },
      {
        title: 'Мои чемпионаты',
        link: '/champion-ships',
        Icon: IconMyChampionShips,
      },
      {
        title: 'Создание команд',
        link: '/create-command',
        Icon: IconCreateCommand,
      },
      {
        title: 'История чемпионатов',
        link: '/history',
        Icon: IconHistory,
      },
      {
        title: 'Отчеты',
        link: '/reports',
        Icon: IconReport,
      },
    ]
  }

  if (role === 'expert') {
    return [
      {
        title: 'Моя страница',
        link: '/',
        Icon: IconMyPage,
      },
      {
        title: 'Критериальная оценка',
        link: '/assessment',
        Icon: IconCriterionAssessment,
      },
      {
        title: 'История чемпионатов',
        link: '/history',
        Icon: IconHistory,
      },
      {
        title: 'Отчеты',
        link: '/reports',
        Icon: IconReport,
      },
    ]
  }

  return [
    {
      title: 'Моя страница',
      link: '/',
      Icon: IconMyPage,
    },
    {
      title: 'Команда',
      link: '/team',
      Icon: IconTeam,
    },
    {
      title: 'История чемпионатов',
      link: '/history',
      Icon: IconHistory,
    },
    {
      title: 'Отчеты',
      link: '/reports',
      Icon: IconReport,
    },
  ]
}

/**
 * Компонент страницы.
 */
const Page: React.FC<IPageProps> = () => {

  return (
    <section className={styles.page}>
      <Sider
        navItems={content()}
        footerItems={[
          ...footerItems,
        ]}
      />
      <section className={styles.main}>
        <main>
          <Outlet />
        </main>
      </section>
    </section>
  )
}

export default observer(Page)
