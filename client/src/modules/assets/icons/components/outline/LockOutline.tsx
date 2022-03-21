import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const LockOutline: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 21 23'
    width={size || '21'}
    height={size || '23'}
    fill='none'
    {...props}
  >
    <path
      d='M6.29998 10.1V5.89995C6.29998 3.58036 8.18038 1.69995 10.5 1.69995C12.8196 1.69995 14.7 3.58036 14.7 5.89995V10.1M3.49998 10.1H17.5C18.2732 10.1 18.9 10.7268 18.9 11.5V19.8999C18.9 20.6731 18.2732 21.2999 17.5 21.2999H3.49998C2.72678 21.2999 2.09998 20.6731 2.09998 19.8999V11.5C2.09998 10.7268 2.72678 10.1 3.49998 10.1Z'
      stroke='black' strokeWidth='2' />
  </svg>
)
