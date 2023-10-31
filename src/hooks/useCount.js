import {useCallback, useEffect, useState} from "react";

export const useCount = (initValue) => {
    const [count, setCount] = useState(initValue || 0)

    // Каждый раз будет вычисляться функция
    // const decrement = () => {setCount(count - 1)}
    // const increment = () => {setCount(count + 1)}

    /*
    * Зависимость от [count], используем 'useCallback' чтобы создать
    * постоянные ссылки на decrement и increment
    * 'useCallback', чтобы при каждом рендере не создавать функции
    * */
    // const decrement = () => useCallback(
    //     () => {setCount(count - 1)},
    //     [count]
    // )

    const decrement = useCallback(
        () => {setCount((currentCount) => currentCount - 1)},
        []
    )
    const increment = useCallback(
        () => {setCount((currentCount) => currentCount + 1)},
        []
    )


    return {count, decrement, increment}
}