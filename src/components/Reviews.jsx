import {Review} from "./Review";

export const Reviews = (props) => {
    const {reviews} = props
    return (
        <div>
            {
                Boolean(reviews.length) && reviews.map((review) => (
                        <Review
                            key={review.id}
                            author={review.author}
                            text={review.text}
                            rating={review.rating}/>
                ))
            }
        </div>
    )
}