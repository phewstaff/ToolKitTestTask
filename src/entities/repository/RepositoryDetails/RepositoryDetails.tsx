import { formatDistanceToNow } from 'date-fns'
import { Star } from 'lucide-react'

import { FC } from 'react'

import { Repository } from '@/shared/api/types/graphql'

import * as S from './RepositoryDetails.styled'

interface Props {
  repository: Repository
}

export const RepositoryDetails: FC<Props> = ({ repository }) => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>{repository.name}</S.Title>
        <S.Stats>
          <span>
            <Star size={16} /> {repository.stargazerCount}
          </span>
          <span>Updated {formatDistanceToNow(new Date(repository.updatedAt))} ago</span>
        </S.Stats>
      </S.Header>

      <S.OwnerInfo>
        <S.Avatar src={repository.owner.avatarUrl} alt={repository.owner.login} />
        <S.OwnerLink href={repository.owner.url} target="_blank" rel="noopener noreferrer">
          {repository.owner.login}
        </S.OwnerLink>
      </S.OwnerInfo>

      {repository.description && <S.Description>{repository.description}</S.Description>}

      <S.Languages>
        {repository.languages?.nodes?.map(
          (lang) =>
            lang && (
              <S.Language key={lang.name} color={lang.color || '#000'}>
                {lang.name}
              </S.Language>
            ),
        )}
      </S.Languages>
    </S.Container>
  )
}
