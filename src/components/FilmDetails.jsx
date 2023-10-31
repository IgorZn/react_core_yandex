import {useCount} from "../hooks/useCount";
import {FilmInfo} from "./FilmInfo";


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