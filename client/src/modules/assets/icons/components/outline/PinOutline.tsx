import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const PinOutline: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 21 23'
    width={size || '21'}
    height={size || '23'}
    fill='none'
    {...props}
  >
    <path fillRule='evenodd' clipRule='evenodd'
          d='M10.5 12.8926C12.0456 12.8926 13.3 11.639 13.3 10.0944C13.3 8.54985 12.0456 7.29628 10.5 7.29628C8.95438 7.29628 7.69998 8.54985 7.69998 10.0944C7.69998 11.639 8.95438 12.8926 10.5 12.8926Z'
          stroke='black' strokeWidth='2' strokeLinecap='square' />
    <path fillRule='evenodd' clipRule='evenodd'
          d='M18.9 10.0944C18.9 17.0899 11.9 21.2872 10.5 21.2872C9.09998 21.2872 2.09998 17.0899 2.09998 10.0944C2.09998 5.45926 5.86178 1.69995 10.5 1.69995C15.1382 1.69995 18.9 5.45926 18.9 10.0944Z'
          stroke='black' strokeWidth='2' strokeLinecap='square' />
  </svg>
)
