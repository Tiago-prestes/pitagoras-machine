import React, { useState } from 'react'
import { FormContainer, MainContainer, TitleContainer } from './style'

export const Machine = () => {
    const [catetoA, setCatetoA] = useState()
    const [catetoB, setCatetoB] = useState()
    const [hipo, setHipo] = useState()


    const machine = () => {
        const ca = Number(catetoA)
        const cb = Number(catetoB)
        const hp = Number(hipo)

        if (!ca && !cb && !hp) {
            alert('Complete dois campos, com valores maior que 0')
        } else if (ca && cb && hp) {
            alert('Complete apenas dois campos, com valores maior que 0')
        } else if (ca > 0 && cb > 0 && !hp) {
            const resultHipo = Math.hypot(ca, cb)
            alert(`Valor da hipotenusa é ${resultHipo.toFixed(2)}`)
        } else if (!ca && cb > 0 && hp > 0) {
            if (cb >= hp) {
                alert('Ops... Esse não é um triângulo retângulo')
            } else {
                const task = (hp * hp) - (cb * cb)
                const resultCateto = Math.sqrt(task)
                alert(`Valor do cateto B é ${resultCateto.toFixed(2)}`)
            }
        } else if (!cb && ca > 0 && hp > 0) {
            if (ca >= hp) {
                alert('Esse não é um triângulo retângulo!')
            } else {
                const task = (hp * hp) - (ca * ca)
                const resultCateto = Math.sqrt(task)
                alert(`Valor do cateto A é ${resultCateto.toFixed(2)}`)
            }
        } else if (ca) {
            alert('Complete no mínimo dois campos, com valores maior que 0')
        } else if (cb) {
            alert('Complete no mínimo dois campos, com valores maior que 0')
        } else if (hp) {
            alert('Complete no mínimo dois campos, com valores maior que 0')
        }

    }



    const onSubmitForm = (event) => {
        event.preventDefault()
        machine()
    }

    const handlechangeA = (event) => {
        setCatetoA(event.target.value)
    }

    const handlechangeB = (event) => {
        setCatetoB(event.target.value)
    }

    const handlechangeH = (event) => {
        setHipo(event.target.value)

    }

    return (
        <MainContainer>
            <FormContainer onSubmit={onSubmitForm}>
                <TitleContainer>
                    <p>Pitagora's Machine</p>
                </TitleContainer>
                <input
                    type='number'
                    min='0'
                    placeholder=' Cateto A'
                    value={catetoA}
                    onChange={handlechangeA}
                />
                <input
                    type='number'
                    min='0'
                    placeholder=' Cateto B'
                    value={catetoB}
                    onChange={handlechangeB}
                />
                <input
                    type='number'
                    min='0'
                    placeholder=' Hipotenusa'
                    value={hipo}
                    onChange={handlechangeH}
                />
                <button>Calcular</button>
            </FormContainer>
        </MainContainer >
    )
}
