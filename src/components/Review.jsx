export const Review = (props) => {
    const {author, text, rating} = props
    return (
        <div>
            <span>{author}</span>
            <span>{text}</span>
            <span>{rating}</span>
        </div>
    )
}