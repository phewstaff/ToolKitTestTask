import { FC, PropsWithChildren } from 'react'

import * as S from './MainLayout.styled'

interface Props extends PropsWithChildren {
  title?: string
}

export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>
      </S.Header>
      <S.Main>{children}</S.Main>
      <S.Footer>
        <S.FooterText>© {new Date().getFullYear()} GitHub Repository Explorer</S.FooterText>
      </S.Footer>
    </S.Container>
  )
}
