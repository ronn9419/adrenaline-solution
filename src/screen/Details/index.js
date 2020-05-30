import React from 'react'

import AppShell from '@component/template/AppShell'

import AppHeader from '@container/AppHeader'
import ItemDetails from '@container/ItemDetails'
import AppFooter from '@container/AppFooter'

export default ({ match }) => (
  <AppShell
    header={<AppHeader />}
    content={<ItemDetails id={match.params.id} />}
    footer={<AppFooter />}
  />
)
