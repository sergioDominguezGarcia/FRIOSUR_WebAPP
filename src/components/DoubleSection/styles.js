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
      @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Column = styled.div`
  flex: 1 1 45%;
  margin: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: ${(props) => (props.mode === 'mode1' ? 'left' : 'right')};

  @media (max-width: 780px) {
    flex: 1 1 100%;
    justify-content: center;
    text-align: center;
  }

  &.left-column {
    ${(props) =>
      props.mode === 'mode1' &&
      css`
        justify-content: flex-start;
        text-align: left;
      `}
    ${(props) =>
      props.mode === 'mode2' &&
      css`
        justify-content: center;
        text-align: center;
      `}
  }

  &.right-column {
    ${(props) =>
      props.mode === 'mode1' &&
      css`
        justify-content: center;
        text-align: center;
      `}
    ${(props) =>
      props.mode === 'mode2' &&
      css`
        justify-content: flex-end;
        text-align: right;
      `}
  }
`  