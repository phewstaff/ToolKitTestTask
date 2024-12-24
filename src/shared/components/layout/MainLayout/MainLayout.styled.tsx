import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  padding: 1rem 2rem;
  background-color: #24292e;
  color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`

export const Main = styled.main`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f8fa;
`

export const Footer = styled.footer`
  padding: 1rem 2rem;
  background-color: #24292e;
  color: white;
  text-align: center;
`

export const FooterText = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #8b949e;
`
