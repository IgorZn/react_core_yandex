/*
export const App = () => {
    return React.createElement(
        'div',
        {
            children: [
                React.createElement('span', {children: 'Hello'}),
                React.createElement('span', {children: 'Student'}),
            ]
        }
    )
}
*/

import {filmDetails} from "./data";
import {FilmDetails} from "./components/FilmDetails";
import {useMemo} from "react";
import {Reviews} from "./components/Reviews";

export const App = ({name}) => {

    const filmRating = useMemo(() => {
        Math.floor(
            filmDetails.reviews.reduce((sum, reviews) => {
                return sum + reviews.rating
            }, 0) / filmDetails.reviews.length
        )
    },[filmDetails.reviews])


    return (
        <div>
            <header/>
            <FilmDetails
                title={filmDetails.title}
                seasonCount={filmDetails.seasonsCount}
                genre={filmDetails.genre}/>
            <Reviews reviews={filmDetails.reviews}/>
            <p>{filmRating}</p>
            {/*<Recommendations />*/}
            <footer/>
        </div>
    )
}