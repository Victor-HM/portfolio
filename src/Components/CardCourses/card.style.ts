import styled from "styled-components";

type TCardCourses = {
 position: "LEFT" | 'RIGHT'
}

export const CardCourses = styled.ul`
 &::before {
  content: '';
  background-color: #474747;
  border-radius: 0.375rem;
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
 }

 @media (max-width: 620px) {
  &::before {
   left: 3%;
  }
 }
`

export const CardList = styled.li<TCardCourses>`
 left: ${props => props.position === 'RIGHT' ? '50%' : '0'};
 position: relative;

 @media (max-width: 620px) {
  & {
   left: 0;
  }
 }
`

export const PointCard = styled.div<TCardCourses>`
 &::after {
  content: '';
  ${props => props.position === 'RIGHT' ? 'left: calc(0px - 1.3%)' : 'right: calc(0% - 1.7%)'}
 }

 @media (max-width: 620px) {
  &::after {
   left: 0.35rem
  }
 }
`