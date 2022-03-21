import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const HomeOutline: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 26 26'
    width={size || '20'}
    height={size || '20'}
    {...props}
  >
    <path id='bg' fill='none' fillRule='evenodd'
          d='M13 1.8 1.8 11.4v11.2a1.6 1.6 0 0 0 1.6 1.6h6.4v-4.8a3.2 3.2 0 1 1 6.4 0v4.8h6.4a1.6 1.6 0 0 0 1.6-1.6V11.4L13 1.8Z'
          clipRule='evenodd' />
    <path
      d='m13 1.8.65-.76a1 1 0 0 0-1.3 0l.65.76ZM1.8 11.4l-.65-.76-.35.3v.46h1Zm8 12.8v1a1 1 0 0 0 1-1h-1Zm6.4 0h-1a1 1 0 0 0 1 1v-1Zm8-12.8h1v-.46l-.35-.3-.65.76ZM3.4 25.2h6.4v-2H3.4v2Zm21.45-14.56-11.2-9.6-1.3 1.52 11.2 9.6 1.3-1.52Zm-12.5-9.6-11.2 9.6 1.3 1.52 11.2-9.6-1.3-1.52ZM10.8 24.2v-4.8h-2v4.8h2Zm4.4-4.8v4.8h2v-4.8h-2Zm1 5.8h6.4v-2h-6.4v2Zm9-2.6V11.4h-2v11.2h2ZM.8 11.4v11.2h2V11.4h-2ZM13 17.2a2.2 2.2 0 0 1 2.2 2.2h2a4.2 4.2 0 0 0-4.2-4.2v2Zm0-2a4.2 4.2 0 0 0-4.2 4.2h2a2.2 2.2 0 0 1 2.2-2.2v-2Zm9.6 10a2.6 2.6 0 0 0 2.6-2.6h-2a.6.6 0 0 1-.6.6v2Zm-19.2-2a.6.6 0 0 1-.6-.6h-2a2.6 2.6 0 0 0 2.6 2.6v-2Z' />
  </svg>
)
