import { RepositoryList } from '@/entities/repository/RepositoryList'
import { MainLayout } from '@/shared/components/layout'

const HomePage = () => {
  return (
    <MainLayout>
      <RepositoryList />
    </MainLayout>
  )
}

export default HomePage
