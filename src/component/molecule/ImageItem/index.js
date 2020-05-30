import React from 'react'
import { Link } from 'react-router-dom'

import ItemLink from '@component/atom/ItemLink'

import style from './style.scss'

export default ({ data: { id, thumb, title_long, tag }, generateUrl }) => {
  const url = React.useMemo(() => generateUrl(id), [id])

  return (
    <div className={style.container}>
      <span className={style.tag}>{tag}</span>

      <Link to={url}>
        <div className={style.imageContainer}>
          <img src={`/assets/images/${thumb}`} className={style.image} />
        </div>
      </Link>

      <div className={style.title}>{title_long}</div>

      <div className={style.footer}>
        <ItemLink href={url}>VIEW CASE STUDY</ItemLink>
      </div>
    </div>
  )
}
