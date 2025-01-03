import { Link } from 'react-router-dom'

import { FC, PropsWithChildren } from 'react'

import * as S from './MainLayout.styled'

interface Props extends PropsWithChildren {
  title?: string
  titleLink?: string
}

export const MainLayout: FC<Props> = ({
  children,
  title = 'Github Repository Explorer',
  titleLink = '/',
}) => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to={titleLink}>
            <S.Title>{title}</S.Title>
          </Link>
        </S.Title>
      </S.Header>
      <S.Main>{children}</S.Main>
      <S.Footer>
        <S.FooterText>© {new Date().getFullYear()} GitHub Repository Explorer</S.FooterText>
      </S.Footer>
    </S.Container>
  )
}
