import React from 'react'

import CardTag from '@component/atom/CardTag'

import style from './style.scss'

export default ({ tag, image }) => (
  <div className={style.container}>
    <CardTag>{tag}</CardTag>

    <div className={style.imageContainer}>
      <img src={`/assets/images/${image}`} className={style.image} />
    </div>
  </div>
)
