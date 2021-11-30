import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { catetoFunc, hipoFunc } from '../constants/functions'
import { FormContainer, MainContainer, TitleContainer } from './style'

export const Machine = () => {
    const [catetoA, setCatetoA] = useState()
    const [catetoB, setCatetoB] = useState()
    const [hipo, setHipo] = useState()

    const teorema = () => {
        const ca = Number(catetoA)
        const cb = Number(catetoB)
        const hp = Number(hipo)

        if (!ca && !cb && !hp) {
            toast.error('Complete dois campos, com valores maior que 0.', { duration: 6000 })
        } else if (ca && cb && hp) {
            toast.error('Complete apenas dois campos, com valores maior que 0.', { duration: 6000 })
        } else if (ca > 0 && cb > 0 && !hp) {
            hipoFunc(ca, cb)
        } else if (!ca && cb > 0 && hp > 0) {
            if (cb >= hp) {
                toast.error('Ops... Esse não é um triângulo retângulo.', { duration: 6000 })
            } else {
                catetoFunc(hp, cb)
            }
        } else if (!cb && ca > 0 && hp > 0) {
            if (ca >= hp) {
                toast.error('Ops... Esse não é um triângulo retângulo.', { duration: 6000 })
            } else {
                catetoFunc(hp, ca)
            }
        } else if (ca) {
            toast.error('Complete no mínimo dois campos, com valores maior que 0', { duration: 6000 })
        } else if (cb) {
            toast.error('Complete no mínimo dois campos, com valores maior que 0', { duration: 6000 })
        } else if (hp) {
            toast.error('Complete no mínimo dois campos, com valores maior que 0', { duration: 6000 })
        }

    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        teorema()
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
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </MainContainer >
    )
}
