import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  background: white;
  color: #24292e;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: #f6f8fa;
    border-color: #d1d5da;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const PageSizeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const PageSizeLabel = styled.label`
  font-size: 0.875rem;
  color: #24292e;
`

export const PageSizeSelect = styled.select`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #e1e4e8;
  background-color: white;
  font-size: 0.875rem;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px #007bff;
  }
`
