import styled from "styled-components"
import img from "./img/cliente.jpg";
import imgComercio from "./img/spani.png"
import imgBanner from "./img/spani.jpg"

export const PerfilDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 90vh;
align-items: center;
`

export const InfoDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 20vh;
display: flex;

h3{
    margin-top: 1vh;
}

p{
    text-decoration: underline;
    color: black;
}
`

export const ImgPerfil = styled.div`
width: 120px;
height: 120px;
border-radius: 60px;
border: 1px solid black;
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
`
export const MainTrades = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

    /* h1{
    font-size: 28px;
  } */
`;

export const SectionBusiness = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;

export const DivBusiness = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;

  h3{
    margin-top: 5vh;
  }
`;

export const BoxBusiness = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 350px;
  height: 200px;
  position: relative;
  border-radius: 15px;
  border: 1px solid black;
  background-image:url(${imgBanner});
  background-position: center;
  background-size: cover;
  transition: 0.35s;

  &:hover{
    transform: scale(1.02);
  }
`;

export const CircleImg = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: -50px;
  border-radius: 50%;
  border: 1px solid black;
  background-image: url(${imgComercio});
  background-size: cover;
`;

export const CadastreComercio = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 10vh;
`

export const ButtonStyled = styled.button`
border-radius: 50px;
border: none;
width: 20vh;
height: 35px;
background-color: #0081c9;
background-image: linear-gradient(160deg, #0081c9 0%, #5bc0f8 100%);
border: 1px solid #0081c9;
cursor: pointer;
color: #fff;

box-shadow: 0 4px 30px rgba(31, 38, 135, 0.2);

&:hover{
  transition-duration:200ms;
  transform: scale(1.02);
}
`;