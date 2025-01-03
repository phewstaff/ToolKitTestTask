import { useParams } from 'react-router-dom'

import { FC } from 'react'

import { RepositoryDetails } from '@/entities/repository'
import { Repository, useGetRepositoryDetailsQuery } from '@/shared/api/types/graphql'
import { MainLayout } from '@/shared/components/layout'

const RepoDetailsPage: FC = () => {
  const { owner, name } = useParams<{ owner: string; name: string }>()

  const { data, loading, error } = useGetRepositoryDetailsQuery({
    variables: { owner: owner!, name: name! },
    skip: !owner || !name,
  })

  if (loading) return <MainLayout>Loading...</MainLayout>
  if (error) return <MainLayout>Error: {error.message}</MainLayout>
  if (!data?.repository) return <MainLayout>Repository not found</MainLayout>

  return (
    <MainLayout>
      <RepositoryDetails repository={data.repository as Repository} />
    </MainLayout>
  )
}

export default RepoDetailsPage
