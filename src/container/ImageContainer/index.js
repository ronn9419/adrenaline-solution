import React from 'react'

import useFetchData from '@service/useFetchData'

import ImageContainer from '@component/organism/ImageContainer'

export default () => {
  const [data, setData] = React.useState([])

  useFetchData((fetchedData) => {
    setData(fetchedData)
  })

  const generateUrl = React.useCallback((id) => `/details/${id}`, [])

  return <ImageContainer items={data} generateUrl={generateUrl} />
}
