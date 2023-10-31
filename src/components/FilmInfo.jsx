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