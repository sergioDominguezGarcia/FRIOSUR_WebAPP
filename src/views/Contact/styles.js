import styled from "styled-components";
import Button from "../../components/Button";


export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  border: none;
  /* overflow-x: hidden; */
  /* border: 2px solid red; */
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 10rem;

  align-items: center;
  max-width: 1440px;
  @media screen and (max-width: 768px) {
    margin-top: 8rem;
  }
`

export const Map = styled.div`
  width: 90%;
  margin-top: 40px;
  margin-bottom: 100px;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    /* Ajusta el tamaño de la imagen */
  }
`;

export const H1 = styled.h1`
  color: #446844;
  font-family: 'Montserrat';
  font-size: 50px;
  font-weight: 800;
  line-height: 78px;
  @media screen and (max-width: 768px) {
    font-size: 27px;
    line-height: 0px;
  }
`

export const TextWrap = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: center;
  /* align-items: center;ç */
  /* width: 95%; */
  /* border: 3px solid greenyellow; */

`;

export const Column1 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  /* border: 3px solid greenyellow; */
  /* align-items: center; */
`;
export const Column2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  /* border: 3px solid greenyellow; */
  padding-left: rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Text = styled.a`
  font-family: 'K2D';
  font-style: normal;
  font-weight: 200;
  text-align: left;
  margin-top: 0rem;
  font-size: 24px;
  line-height: 31px;

  color: black;
  text-decoration: none;



  cursor: pointer;
  transition: 0.5s all ease;
  margin-left: 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`

export const InputWrap = styled.div`

  @media screen and (max-width: 768px) {

  }
`
export const CustomButton = styled(Button)``;

// export const MailForm = styled.div`
//   display: flex;
//   /* border: 3px solid green; */
//   height: 100%;
//   padding: 0.5rem;
//   margin: 15px;
//   /* flex-direction: column; */
// `;

// export const TextArea = styled.textarea`
//   background-color: rgba(217, 217, 217, 1);
//   padding: 10px;
//   border: none;
//   border-radius: 10px;
//   width: 635px;
//   height: 135px;
//   margin-top: 15px;
// `;

// export const Input = styled.input`
//   padding: 10px;
//   border: none;
//   margin: 5px;
//   background-color: rgba(217, 217, 217, 1);
//   border-radius: 10px;
//   width: 300px;
//   height: 55px;
// `;



