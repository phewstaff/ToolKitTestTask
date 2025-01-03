import { formatDistanceToNow } from 'date-fns'
import { Star } from 'lucide-react'

import { FC } from 'react'

import {
  Repository,
  useGetViewerRepositoriesQuery,
  useSearchRepositoriesQuery,
} from '@shared/api/types/graphql'
import { Pagination } from '@shared/components/pagination'

import { SearchInput } from '@/features/search'

import * as S from './RepositoryList.styled.tsx'
import { repositoryFiltersStore } from './store/repository-filters.store.ts'

export const RepositoryList: FC = () => {
  const { filters, setFilter } = repositoryFiltersStore()
  const isSearching = filters.searchQuery.trim().length > 0

  const { searchQuery, itemsPerPage, isForward, after, before } = filters

  const paginationVariables = isForward
    ? { first: itemsPerPage, after }
    : { last: itemsPerPage, before }

  const {
    data: viewerData,
    loading: viewerLoading,
    error: viewerError,
  } = useGetViewerRepositoriesQuery({
    variables: paginationVariables,
    skip: isSearching,
  })

  const {
    data: searchData,
    loading: searchLoading,
    error: searchError,
  } = useSearchRepositoriesQuery({
    variables: {
      query: searchQuery,
      ...paginationVariables,
    },
    skip: !isSearching,
  })

  const loading = viewerLoading || searchLoading
  const error = viewerError || searchError

  const repositories = isSearching
    ? (searchData?.search.nodes as Repository[])
    : viewerData?.viewer.repositories.nodes

  const pageInfo = isSearching
    ? searchData?.search.pageInfo
    : viewerData?.viewer.repositories.pageInfo

  const handlePreviousPage = () => {
    if (!pageInfo?.hasPreviousPage) return

    setFilter('isForward', false)
    setFilter('after', null)
    setFilter('before', pageInfo.startCursor ?? null)
  }

  const handleNextPage = () => {
    if (!pageInfo?.hasNextPage) return

    setFilter('isForward', true)
    setFilter('before', null)
    setFilter('after', pageInfo.endCursor ?? null)
  }

  return (
    <>
      <SearchInput
        value={searchQuery}
        onChange={(value) => {
          setFilter('searchQuery', value)
          setFilter('after', null)
          setFilter('before', null)
          setFilter('isForward', true)
        }}
        placeholder="Search repositories..."
      />

      {loading ? (
        <RepositoryListSkeleton itemsPerPage={itemsPerPage} />
      ) : error ? (
        <S.ErrorWrapper>Error: {error.message}</S.ErrorWrapper>
      ) : (
        <>
          <S.RepositoryListWrapper>
            {repositories?.map((repo) => {
              if (!repo) return null
              return (
                <S.RepositoryItem key={repo.id}>
                  <S.RepositoryItemContent>
                    <div>
                      <S.RepositoryName href={`/repository/${repo.owner.login}/${repo.name}`}>
                        {repo.name}
                      </S.RepositoryName>
                      {repo.description && (
                        <S.RepositoryDescription>{repo.description}</S.RepositoryDescription>
                      )}
                    </div>
                  </S.RepositoryItemContent>
                  <S.RepositoryInfo>
                    <S.StarCount>
                      <Star size={16} />
                      {repo.stargazerCount}
                    </S.StarCount>
                    <S.UpdatedAt>
                      Updated {formatDistanceToNow(new Date(repo.updatedAt))} ago
                    </S.UpdatedAt>
                    <S.RepositoryName
                      as="a"
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </S.RepositoryName>
                  </S.RepositoryInfo>
                </S.RepositoryItem>
              )
            })}
          </S.RepositoryListWrapper>
          <Pagination
            onPreviousPage={handlePreviousPage}
            onNextPage={handleNextPage}
            pageInfo={pageInfo!}
            onPageSizeChange={(newSize) => {
              setFilter('itemsPerPage', newSize)
              setFilter('after', null)
              setFilter('before', null)
            }}
            pageSize={itemsPerPage}
            availablePageSizes={[10, 20, 50, 100]}
          />
        </>
      )}
    </>
  )
}

const RepositoryListSkeleton = ({ itemsPerPage }: { itemsPerPage: number }) => (
  <S.RepositoryListWrapper>
    {[...Array(itemsPerPage)].map((_, index) => (
      <S.SkeletonItem key={index}>
        <S.SkeletonTitle />
        <S.SkeletonDescription />
        <S.SkeletonText />
      </S.SkeletonItem>
    ))}
  </S.RepositoryListWrapper>
)
