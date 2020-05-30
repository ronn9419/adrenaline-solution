import React from 'react'
import style from './style.scss'

export default ({ imageComponent, detailsComponent }) => (
  <div className={style.container}>
    <div className={style.imageContainer}>{imageComponent}</div>
    <div className={style.detailsContainer}>{detailsComponent}</div>
  </div>
)
