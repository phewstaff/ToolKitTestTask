import { ChevronLeft, ChevronRight } from 'lucide-react'

import * as React from 'react'

import { PageInfo } from '@/shared/api/types/graphql'

import * as S from './pagination.styled'

interface Props extends React.ComponentProps<'nav'> {
  pageInfo: PageInfo
  pageSize: number
  onPageSizeChange: (newSize: number) => void
  availablePageSizes?: number[]
  onPreviousPage: () => void
  onNextPage: () => void
}

export const Pagination: React.FC<Props> = ({
  pageInfo,
  pageSize,
  onPageSizeChange,
  availablePageSizes = [10, 20, 50, 100],
  onPreviousPage,
  onNextPage,
  ...props
}) => (
  <S.Nav {...props}>
    <S.NavButton
      onClick={onPreviousPage}
      disabled={!pageInfo.hasPreviousPage}
      aria-label="Previous page"
    >
      <ChevronLeft size={16} />
      <span>Previous</span>
    </S.NavButton>

    <S.PageSizeWrapper>
      <S.PageSizeLabel htmlFor="pageSize">Items per page:</S.PageSizeLabel>
      <S.PageSizeSelect
        id="pageSize"
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
        aria-label="Select number of items per page"
      >
        {availablePageSizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </S.PageSizeSelect>
    </S.PageSizeWrapper>

    <S.NavButton onClick={onNextPage} disabled={!pageInfo.hasNextPage} aria-label="Next page">
      <span>Next</span>
      <ChevronRight size={16} />
    </S.NavButton>
  </S.Nav>
)
