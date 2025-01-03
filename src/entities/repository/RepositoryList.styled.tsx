import styled, { keyframes } from 'styled-components'

export const RepositoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  max-width: 600px;
`

export const RepositoryItem = styled.div`
  padding: 1rem;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);
  }
`

export const RepositoryName = styled.a`
  color: #0366d6;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const RepositoryDescription = styled.p`
  margin: 0.5rem 0 0;
  color: #586069;
  font-size: 0.9rem;
`

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`

export const ErrorWrapper = styled.div`
  color: #cf222e;
  padding: 1rem;
  text-align: center;
`

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`

export const SkeletonBase = styled.div`
  background: linear-gradient(to right, #f6f7f8 8%, #edeef1 18%, #f6f7f8 33%);
  background-size: 800px 104px;
  animation: ${shimmer} 1.2s ease-in-out infinite;
`

export const SkeletonItem = styled(RepositoryItem)`
  height: 106px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const SkeletonTitle = styled(SkeletonBase)`
  height: 20px;
  width: 60%;
  border-radius: 4px;
`

export const SkeletonDescription = styled(SkeletonBase)`
  height: 16px;
  width: 90%;
  border-radius: 4px;
`

export const SkeletonText = styled(SkeletonBase)`
  height: 14px;
  width: 40%;
  border-radius: 4px;
`
