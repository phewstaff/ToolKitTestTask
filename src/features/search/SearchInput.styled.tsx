import styled from 'styled-components'

export const InputWrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  max-width: 600px;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #0366d6;
    box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
  }
`
