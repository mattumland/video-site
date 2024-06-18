import styled from "styled-components"
const CountContainer = styled.div`
  display: grid;
  align-items: center;
  font-size: .75rem;


  svg {
    grid-area: 1 / 1 / 2 / 2;
  }
  p {
    color: var(--card-color);
    grid-area: 1 / 1 / 2 / 2;
    text-align: center;
    padding-bottom: 2px;
  }
`

export const CommentCount = ({count}) => {
  return (
    <CountContainer>
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="28px" height="28px">
        <path d="M 15 3 C 7.82 3 2 7.925 2 14 C 2 17.368 3.7933281 20.378484 6.6113281 22.396484 C 6.6832805 23.932468 6.4452784 26.053382 4.3261719 27.03125 A 0.5 0.5 0 0 0 4.3222656 27.033203 A 0.5 0.5 0 0 0 4 27.5 A 0.5 0.5 0 0 0 4.5 28 C 4.5119372 28 4.5232366 27.998109 4.5351562 27.998047 A 0.5 0.5 0 0 0 4.5429688 27.998047 C 6.9769949 27.982445 9.0432734 26.667034 10.46875 25.277344 C 10.92075 24.836344 11.550875 24.619328 12.171875 24.736328 C 13.081875 24.909328 14.028 25 15 25 C 22.18 25 28 20.075 28 14 C 28 7.925 22.18 3 15 3 z"/>
      </svg>
      <p>
        {count}
      </p>
    </CountContainer>
  )
}
