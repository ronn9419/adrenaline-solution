import React from 'react'

import style from './style.scss'

export default ({ tag, image }) => (
  <div className={style.container}>
    <span className={style.tag}>{tag}</span>

    <div className={style.imageContainer}>
      <img src={`/assets/images/${image}`} className={style.image} />
    </div>
  </div>
)
