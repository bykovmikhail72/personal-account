import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import cn from 'classnames'

import styles from './styles.module.scss'
import Typography from '../../../ui/Typography'

import logo from '../images/logo.png'

export interface SiderMenuItem {
  Icon: React.FC
  title: string
  link: string
}

interface SiderProps {
  navItems: SiderMenuItem[]
  footerItems: SiderMenuItem[]
}

const Sider = ({ navItems, footerItems }: SiderProps) => {
  return (
    <aside className={styles.sider}>
      <div className={styles.logo}>
        <Link to={'/'}>
          <img alt="Логотип" src={logo} width={152} />
        </Link>
      </div>

      <div className={styles['flex-container']}>
        <div>
          {navItems.map(({ Icon, title, link }) => (
            <NavLink
              key={title}
              className={({ isActive }) =>
                cn(styles['menu-item'], {
                  [styles.active]: isActive,
                })
              }
              to={link}
              end={link === '/'}>
              <Icon />
              <Typography size={16}>
                {title}
              </Typography>
            </NavLink>
          ))}
        </div>
        <div>
          {footerItems.map(({ link, title, Icon }) => (
            <NavLink
              key={title}
              to={link}
              className={({ isActive }) =>
                cn(styles['menu-item'], {
                  [styles.active]: isActive,
                })
              }>
              <Icon />
              <Typography size={16}>
                {title}
              </Typography>
            </NavLink>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Sider
