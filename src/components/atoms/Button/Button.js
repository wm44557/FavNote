import styled, { css } from 'styled-components';

const Button = styled.button`
  display: block;
  background-color: ${(props) => props.theme[props.activeColor]};
  width:220px;
  height: 47px;
  border:none;
  border-radius: 50px;
  font-family: "Montserrat",sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase; 
  text-decoration: none;
  color: black;
  text-align: center;
  line-height: 47px;

  
  ${({ secondary }) => (
    secondary && css`
      background-color: hsl(0,0%,90%);
      width: 105px;
      height: 30px;
      font-size: 10px;
      line-height:0;

    `
  )}
`;

export default Button;
