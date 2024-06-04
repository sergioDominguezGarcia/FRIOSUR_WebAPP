import styled, { css } from 'styled-components'

export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;

  ${(props) =>
    props.mode === 'mode1' &&
    css`
      background-color: #698669;
    `}

  ${(props) =>
    props.mode === 'mode2' &&
    css`
      background-color: #f9f9f9;
    `}
`

export const Column = styled.div`
  flex: 1 1 45%;
  margin: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.mode === 'mode1' &&
    css`
      &.left-column {
        justify-content: flex-start;
        text-align: left;
      }
      &.right-column img {
        max-width: 100%;
        height: auto;
      }
    `}

  ${(props) =>
    props.mode === 'mode2' &&
    css`
      &.left-column img {
        max-width: 100%;
        height: auto;
      }
      &.right-column {
        justify-content: flex-end;
        text-align: right;
      }
    `}

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`