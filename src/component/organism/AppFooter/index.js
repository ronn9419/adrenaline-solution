import React from 'react'
import NavLinks from '@component/molecule/NavLinks'

import style from './style.scss'

export default ({ logo, navLinks }) => (
  <div className={style.appFooter}>
    <div className={style.logo}>{logo}</div>
    <NavLinks links={navLinks} className={style.nav} />
  </div>
)
