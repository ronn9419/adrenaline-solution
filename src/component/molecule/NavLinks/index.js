import React from 'react'
import NavLink from '@component/atom/NavLink'

import style from './style.scss'

export default ({ links = [], className = null }) => (
  <nav {...{ className }}>
    <ul className={style.navList}>
      {links.map(({ label, href }) => (
        <li key={label} className={style.navItem}>
          <NavLink href={href}>{label}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
)
