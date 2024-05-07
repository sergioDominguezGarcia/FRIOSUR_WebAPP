import styled from "styled-components";
import Button from "../../components/Button";


export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  margin-top: 200px;
  flex-direction: column;
  align-items: center;
  /* border: 3px solid red; */
  /* justify-content: space-between; */
`;

export const Map = styled.div`
  width: 90%;
  margin-top: 100px;
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
  font-family: "Montserrat";
  font-size: 64px;
  font-weight: 800;
  line-height: 78px;
  width: 100%;
`;

export const TextWrap = styled.div`
  /* border: 3px solid red; */
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;

  width: 95%;

`;

export const Column1 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  /* border: 3px solid greenyellow; */
  /* align-items: center; */
`;
export const Column2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  /* border: 3px solid greenyellow; */
  padding-left:rem;
`;

export const Text = styled.a`
  font-family: "K2D";
  font-style: normal;
  font-weight: 200;
  text-align: left;
  margin-top: 0rem;
  font-size: 24px;
  line-height: 31px;
  padding: 2px;
  color: black;
  text-decoration: none;
  margin: 3px;
  padding: 0.5rem;
  height: auto;
  width: auto;
  cursor: pointer;
  transition: 0.5s all ease;
  margin-left: 3.5rem;
  `;

export const InputWrap = styled.div``;
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



