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

import { filmDetails } from "./data";
import {FilmDetails} from "./components/FilmDetails";

export const App = ({name}) => {
  return (
      <div>
          <header />
          <FilmDetails
              title={filmDetails.title}
              seasonCount={filmDetails.seasonsCount}
              genre={filmDetails.genre} />
          {/*<Reviews />*/}
          {/*<Recommendations />*/}
          <footer />
      </div>
  )
}