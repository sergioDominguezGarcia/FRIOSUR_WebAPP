import styled from 'styled-components'

export const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: #78997d;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: opacity 0.4s ease;

  &:hover {
    background-color: #446844;
  }

  ${({ isVisible }) =>
    !isVisible &&
    `
    opacity: 0;
    pointer-events: none;
  `}
`
