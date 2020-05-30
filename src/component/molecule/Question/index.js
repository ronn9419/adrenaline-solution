import React from 'react'

import DateView from '@component/atom/DateView'

import style from './style.scss'

export default ({ formattedDate, text, title }) => (
  <div className={style.container}>
    <h4 className={style.title}>{title}</h4>
    <DateView date={formattedDate} />
    <div className={style.body}>{text}</div>
  </div>
)
