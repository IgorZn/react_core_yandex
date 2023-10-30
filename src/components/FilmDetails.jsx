import { useCount } from "../hooks/useCount";

export const FilmDetails = (props) => {
    const {title, seasonCount, genre} = props
    const {count, increment, decrement} = useCount(0)

    return (
        <div>
            <p>{title || 'No title'}</p>
            <p>{seasonCount > 0 ? `Count of seasons is: ${seasonCount}` : 'No seasons'}</p>
            {Boolean(genre) && <p>{genre}</p>}
            <div>
                <button onClick={increment}>+</button>
                {count <= 0 ? 0 : count}
                <button onClick={decrement}>-</button>
            </div>
        </div>
    )

}