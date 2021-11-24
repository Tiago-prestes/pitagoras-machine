import React from 'react'
import { FormContainer, MainContainer, TitleContainer } from './style'

export const Machine = () => {
    let cateto1
    let cateto2

    console.log("testes", cateto2)
    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    return (
        <MainContainer>

            <FormContainer onSubmit={onSubmitForm}>
                <TitleContainer>
                    <h4>Calculadora de Hipotenusa</h4>
                </TitleContainer>
                <input
                    type='text'
                    placeholder=' Cateto A'
                    value={cateto1}
                />
                <input
                    type='text'
                    placeholder=' Cateto B'
                    value={cateto2}
                />
                <input
                    type='text'
                    placeholder=' Hipotenusa'
                />
                <button>Calcular</button>
            </FormContainer>
        </MainContainer >
    )
}
