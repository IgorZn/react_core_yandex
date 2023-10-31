import {useReducer, useState} from "react";

// -- ПЛОХОЙ ПОДХОД
// const [name, setName] = useState('Tema')
// const [text, setText] = useState('Empty text')
// const [rating, setRating] = useState(10)
//
// const onNameChange = (event) => {
//     setName(event.target.value)
//     setText('')
//     setRating(5)
// }
//
// const onTextChange = (event) => {
//   setText(event.target.value)
// }
//
// const onRatingChange = (event) => {
//   setRating(event.target.value)
// }

export const NewReviewForm = () => {
    /*
    * reducer -- чистая функция, которую мы можем вызвать в любой момент
    * с одними и теми же параметрами, она вернет тоже самое значение
    *
    *  const reducer = (state, action) => {
    *       switch (action.type) {
    *           case 'DO_SOMETHING':
    *               // ...
    *               return {...}
    *           default:
    *               return state;
    *   }
    *  }
    *
    *  const action = {
    *   type: 'DO_SOMETHING',
    *   payload: {}
    *  }
    * */

    const FORM_ACTION = {
        setName: "setName",
        setText: "setText",
        setRating: "setRating",
    }

    const reducer = (state, action) => {
        switch (action?.type) {
            case FORM_ACTION.setName:
                return {name: action.payload.name, text: "", rating: 0}
            case FORM_ACTION.setText:
                return {...state, text: action.payload.text}
            case FORM_ACTION.setRating:
                return {...state, rating: action.payload.rating}
            default:
                return state
        }
    }

    const initialState = {
        name: "Tema",
        text: "text",
        rating: 10,
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const onNameChange = (event) => dispatch(
        {type: FORM_ACTION.setName, payload: {name: event.target.value}}
    )


    return (
        <div>
            <label>
                Name:
                <input
                    value={state.name}
                    onChange={onNameChange}
                    type="text"/>
            </label>
            <label>
                Text:
                <input type="text"/>
            </label>
            <label>
                Rating:
                <input type="number"/>
            </label>
        </div>
    )
}