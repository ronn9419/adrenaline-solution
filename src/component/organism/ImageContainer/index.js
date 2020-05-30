import React from 'react'

import ImageItem from '@component/molecule/ImageItem'

import style from './style.scss'

export default ({ items = [], generateUrl }) => (
  <div className={style.container}>
    {items.map((item) => (
      <ImageItem key={item.id} data={item} generateUrl={generateUrl} />
    ))}
  </div>
)
