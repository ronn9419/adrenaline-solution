import React from 'react'

import AppShell from '@component/template/AppShell'

import AppHeader from '@container/AppHeader'
import ImageContainer from '@container/ImageContainer'
import AppFooter from '@container/AppFooter'

export default () => (
  <AppShell
    header={<AppHeader />}
    content={<ImageContainer />}
    footer={<AppFooter />}
  />
)
