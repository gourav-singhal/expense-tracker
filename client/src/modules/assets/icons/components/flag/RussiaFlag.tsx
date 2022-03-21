import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const RussiaFlag: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 512 512'
    width={size || '20'}
    height={size || '20'}
    {...props}
  >
    <g xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' strokeWidth='1pt'>
      <path fill='#fff' d='M0 0h512v512H0z' />
      <path fill='#0039a6' d='M0 170.7h512V512H0z' />
      <path fill='#d52b1e' d='M0 341.3h512V512H0z' />
    </g>
  </svg>
)
