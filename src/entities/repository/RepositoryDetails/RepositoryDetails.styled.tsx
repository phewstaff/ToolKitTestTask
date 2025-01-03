import styled from 'styled-components'

export const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  border: 1px solid #e1e4e8;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e1e4e8;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 1.75rem;
  color: #24292f;
  flex: 1;
`

export const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: #57606a;
  font-size: 0.875rem;
  white-space: nowrap;
`

export const OwnerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 1.5rem 0;
  padding: 1rem;
  background: #f6f8fa;
  border-radius: 6px;
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
`

export const OwnerLink = styled.a`
  color: #0969da;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`

export const Description = styled.p`
  color: #57606a;
  font-size: 1rem;
  line-height: 1.5;
  margin: 1.5rem 0;
`

export const Languages = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin: 1.5rem 0;
  padding: 1rem;
  background: #f6f8fa;
  border-radius: 6px;
`

export const Language = styled.span<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${({ color }) => `${color}15`};
  color: ${({ color }) => color};
  border: 1px solid ${({ color }) => `${color}30`};

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ color }) => color};
  }
`
