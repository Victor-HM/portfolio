import styled from "styled-components";

type TButtonProps = {
 typeButton: 'PRIMARY' | 'SECONDARY' | 'DISABLE';
}

export const ButtonStyle = styled.button<TButtonProps>`
 background-color: ${props => props.typeButton === 'PRIMARY' ? 'rgb(109 40 217 / var(--tw-text-opacity));' : 'transparent'};
 border: 0.1rem solid ${props => props.typeButton === 'PRIMARY' ? 'none' : props.typeButton === 'DISABLE' ? '#52525b' : 'rgb(109 40 217 / var(--tw-text-opacity));'};
 color: ${props => props.typeButton === 'PRIMARY' ? 'white' : props.typeButton === 'DISABLE' ? '#52525b' : 'rgb(109 40 217 / var(--tw-text-opacity));'};
 cursor: ${props => props.typeButton ===  'DISABLE' ? 'no-drop' : 'pointer'};

 /* &:hover {
  background-color: ;
 } */
`