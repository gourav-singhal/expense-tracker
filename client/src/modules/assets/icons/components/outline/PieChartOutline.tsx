import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const PieChartOutline: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 26 26'
    width={size || '20'}
    height={size || '20'}
    {...props}
  >
    <path id='bg' fill='none'
          d='M1.8 13C1.8 6.814 6.814 1.8 13 1.8c6.186 0 11.2 5.014 11.2 11.2 0 6.186-5.014 11.2-11.2 11.2-6.186 0-11.2-5.014-11.2-11.2Z' />
    <path fill='#000'
          d='M13 13h-1a1 1 0 0 0 .293.707L13 13Zm0 10.2C7.367 23.2 2.8 18.633 2.8 13h-2c0 6.738 5.462 12.2 12.2 12.2v-2ZM23.2 13c0 5.633-4.567 10.2-10.2 10.2v2c6.738 0 12.2-5.462 12.2-12.2h-2ZM13 2.8c5.633 0 10.2 4.567 10.2 10.2h2C25.2 6.262 19.738.8 13 .8v2Zm0-2C6.262.8.8 6.262.8 13h2C2.8 7.367 7.367 2.8 13 2.8v-2ZM12 1v12h2V1h-2Zm1.447 12.894 9.6-4.8-.894-1.788-9.6 4.8.894 1.788Zm-1.154-.187 8 8 1.414-1.414-8-8-1.414 1.414Z' />
  </svg>
)
