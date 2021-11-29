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
    background-color: #2196f3;
    border-radius: 8px;
    width: 25vw;
    height: 25vw;
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
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
            background-color: #6ec6ff; 
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
            :hover {
                background-color: #0069c0;
            }  
            :active {
                background-color: #6ec6ff;
                /* transform: translateY(2px); */
            }
        }

`

export const TitleContainer = styled.div`
    p{
        font-weight: bold;
    }
`