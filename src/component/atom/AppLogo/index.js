import React from 'react'

export default ({ url, width, height = null }) => (
  <img src={url} width={width} height={height} />
)
