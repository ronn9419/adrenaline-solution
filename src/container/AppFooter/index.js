import React from 'react'
import AppFooter from '@component/organism/AppFooter'
import AppLogo from '@component/atom/AppLogo'

const navLinks = [
  { label: 'Privacy', href: '#' },
  { label: 'Sitemap', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Twitter', href: '#' },
]

export default () => (
  <AppFooter
    logo={<AppLogo url={'/assets/svg/adrenalin.svg'} width={83} />}
    navLinks={navLinks}
  />
)
