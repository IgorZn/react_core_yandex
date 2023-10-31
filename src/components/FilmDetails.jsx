import {useCount} from "../hooks/useCount";

export const FilmInfo = (props) => {
    const {title, seasonCount, genre} = props
    return (
        /*
        * <React.Fragment> или <> </>- заглушка, не создает DOM элементы
        * */
        <>
            <p>{title || 'No title'}</p>
            <p>{seasonCount > 0 ? `Count of seasons is: ${seasonCount}` : 'No seasons'}</p>
            {Boolean(genre) && <p>{genre}</p>}
        </>
    )
}

export const FilmDetails = (props) => {
    const {title, seasonCount, genre} = props
    const {count, increment, decrement} = useCount(0)

    return (
        <div>
            <FilmInfo
                title={title}
                seasonCount={seasonCount}
                genre={genre}
            />
            <div>
                <button onClick={increment}>+</button>
                {count <= 0 ? 0 : count}
                <button onClick={decrement}>-</button>
            </div>
        </div>
    )

}