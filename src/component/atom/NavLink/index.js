import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

export default ({ href, children }) => (
  <Link to={href} className={style.link}>
    {children}
  </Link>
)
