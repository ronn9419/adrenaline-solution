import React from 'react'
import axios from 'axios'

let dataCacheRef = {
  current: null,
}

export default (callback, dependencies = []) => {
  React.useEffect(() => {
    if (dataCacheRef.current) {
      callback(dataCacheRef.current.slice())
      return
    }

    ;(async () => {
      const response = await axios.get('/json/data.json')

      dataCacheRef.current = response.data

      callback(dataCacheRef.current.slice())
    })()
  }, dependencies)
}
