import { useParams } from 'react-router-dom'

import { FC } from 'react'

import { MainLayout } from '@/shared/components/layout/MainLayout/MainLayout'

import * as S from './index.styled'

const RepoDetailsPage: FC = () => {
  const { owner, name } = useParams<{ owner: string; name: string }>()

  return (
    <MainLayout title={`${owner}/${name}`}>
      <S.Container></S.Container>
    </MainLayout>
  )
}

export default RepoDetailsPage
