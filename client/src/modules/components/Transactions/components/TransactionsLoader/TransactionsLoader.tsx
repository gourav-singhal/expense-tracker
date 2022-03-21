import React from 'react'
import ContentLoader from 'react-content-loader'
import { Space } from 'modules/ui'
import s from './TransactionsLoader.module.scss'

const LoaderItem: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width={315}
    height={60}
    viewBox='0 0 315 60'
    title='Loading...'
    backgroundColor='#ebebeb'
    foregroundColor='#d2d2d2'
    {...props}
  >
    <rect x='0' y='0' rx='10' ry='10' width='140' height='29' />
    <rect x='227' y='0' rx='10' ry='10' width='88' height='29' />
    <rect x='0' y='39' rx='10' ry='10' width='187' height='21' />
  </ContentLoader>
)

export const TransactionsLoader: React.FC = () => {
  return (
    <Space
      direction='vertical'
      className={s.container}
    >
      <LoaderItem />
      <LoaderItem />
      <LoaderItem />
    </Space>
  )
}
