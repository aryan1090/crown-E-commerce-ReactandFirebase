import styled, { css } from "styled-components";


const buttonStyles = css`

    background-color: white;
    color: black;
    border: 1px solid black;
    width: 80%;
    // display: none;
    position: absolute;
    top:295px;

  &:hover {
    background-color: black;
    color: white;
    border:none;
  }
    
`;

const invertedButtonStyles = css`
    background-color: black;
    color: white;
    border:none;

    &:hover{
      background-color: white;
      color: black;
      border: 1px solid black;
      opacity: 0.85;
      display: flex;
    }
  
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border:1px solid #4285f4;

  &:hover {
    background-color: #357ae8;
    border: 1px solid #4285f4;
  }
`;


const getButtonStyles = props =>{
    if(props.isGoogleSignIn){
        return googleSignInStyles;
    }
    return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  // letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 12px;
  text-transform: uppercase;
  // font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  transition: 200ms ease all;
  display: flex;
  justify-content: center;

  ${getButtonStyles}

`;
