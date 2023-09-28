import styled from "styled-components";

export const Container  = styled.div`
display: flex;
align-itemss: center;
justify-content: center;
flex-diretion: column;
gap: 10px;
height: 100vh;
`;


export const Content = styled.div`
gap: 15px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
wigth: 100%;
box-shadow: 0 1px 2px #0003;
background-color: white;
max-width: 350px;
padding: 20x;
border-radius: 5px;
`;


export const Label = styled.label`
font-size: 18px;
font-weight: 600;
color: #676767;
`;

export const labelError = styled.label`
font-size: 14px;
color: red;


a {
    text-decoration: none;
    color: #676767;
}
`;