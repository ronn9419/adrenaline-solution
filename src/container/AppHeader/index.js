import React from 'react'
import AppHeader from '@component/organism/AppHeader'
import AppLogo from '@component/atom/AppLogo'

const navLinks = [
  { label: 'Culture', href: '#' },
  { label: 'Work', href: '#' },
  { label: 'Clients', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: '#' },
]

export default () => (
  <AppHeader
    logo={<AppLogo url={'/assets/svg/adrenalin.svg'} width={100} />}
    navLinks={navLinks}
  />
)
