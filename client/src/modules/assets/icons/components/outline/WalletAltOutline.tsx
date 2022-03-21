import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const WalletAltOutline: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 26 24' width={size || '20'}
       height={size || '20'} {...props}>
    <path id='bg' fill='none'
          d='M3.4 21.6H21a1.6 1.6 0 0 0 1.6-1.6v-4.8h-6.4a3.2 3.2 0 1 1 0-6.4h6.4V4A1.6 1.6 0 0 0 21 2.4H3.4A1.6 1.6 0 0 0 1.8 4v16a1.6 1.6 0 0 0 1.6 1.6Z' />
    <path id='bg' fill='none'
          d='M24.2 15.09V8.91a.11.11 0 0 0-.11-.11H16.2a3.2 3.2 0 1 0 0 6.4H24.09a.11.11 0 0 0 .11-.11Z' />
    <path stroke='#000' strokeWidth='2'
          d='M22.6 9.6v-.8m0 5.6v.8m0 0V20a1.6 1.6 0 0 1-1.6 1.6H3.4A1.6 1.6 0 0 1 1.8 20V4a1.6 1.6 0 0 1 1.6-1.6H21A1.6 1.6 0 0 1 22.6 4v4.8m0 6.4h-6.4a3.2 3.2 0 1 1 0-6.4h6.4m0 6.4h1.49a.11.11 0 0 0 .11-.11V8.91a.11.11 0 0 0-.11-.11H22.6' />
  </svg>
)
