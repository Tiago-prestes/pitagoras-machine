import toast from 'react-hot-toast'

export const catetoFunc = (num1, num2) => {
    const task = (num1 * num1) - (num2 * num2)
    const resultCateto = Math.sqrt(task)
    const area = (resultCateto * num2) / 2
    toast.success(`O cateto mede ${resultCateto.toFixed(2)}. E sua área é ${area.toFixed(2)}u.a.`, { duration: 8000 })
}

export const hipoFunc = (num1, num2) => {
    const resultHipo = Math.hypot(num1, num2)
    const area = (num1 * num2) / 2
    toast.success(`Valor da hipotenusa é ${resultHipo.toFixed(2)}. E sua área é ${area.toFixed(2)}u.a.`, { duration: 8000 })
}