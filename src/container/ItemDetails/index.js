import React from 'react'

import useFetchData from '@service/useFetchData'

import DetailsContent from '@component/template/DetailsContent'
import ItemDetails from '@component/organism/ItemDetails'
import FullImage from '@component/molecule/FullImage'

export default ({ id }) => {
  const [data, setData] = React.useState(null)

  useFetchData((fetchedData) => {
    setData(fetchedData.find((item) => item.id === Number(id)))
  })

  if (!data) {
    return null
  }

  return (
    <DetailsContent
      imageComponent={<FullImage image={data.image} tag={data.tag} />}
      detailsComponent={
        <ItemDetails questions={data.questions} title={data.title_long} />
      }
    />
  )
}
