import React from 'react'

import style from './style.scss'

export default ({ date }) => (
  <div className={style.date} data-test-id="date-view">
    {date}
  </div>
)
