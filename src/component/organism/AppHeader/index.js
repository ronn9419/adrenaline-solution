import React from 'react'
import NavLinks from '@component/molecule/NavLinks'

import style from './style.scss'

export default ({ logo, navLinks }) => (
  <div className={style.appHeader}>
    <div>{logo}</div>
    <NavLinks links={navLinks} className={style.nav} />

    <div className={style.mobileMenu}>
      <img src="/assets/svg/mobile-menu.svg" />
    </div>
  </div>
)
