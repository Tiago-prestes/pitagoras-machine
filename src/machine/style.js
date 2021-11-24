import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    /* border: 1px solid red; */
    margin-top: 10vh;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: salmon;
    border-radius: 8px;
    width: 25vw;
    height: 25vw;

        input{
            height: 30px;
            width: 15vw;
            border-radius: 8px;
            border: none;
        }

        button{
            height: 4vh;
            width: 15vw;


            border: none;
            border-radius: 8px;
            background-color: pink;
        }
`

export const TitleContainer = styled.div`

`