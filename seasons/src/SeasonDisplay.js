import './SeasonDisplay.css'
import React from 'react'

const seasonConfig = {
  summer: {
    iconName: 'sun',
    text: 'Let\'s hit the beach',
  },
  winter: {
    iconName: 'snowflake',
    text: 'Burr, it is chilly',
  },
}

function getSeason (latitude, month) {
  if (month > 2 && month < 9) {
    return latitude < 0 ? 'winter' : 'summer'
  } else {
    return latitude < 0 ? 'summer' : 'winter'
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props, new Date().getMonth())
  const { text, iconName } = seasonConfig[season]

  return (<div className={`season-display ${season}`}>
    <i className={`icon-right ${iconName} icon massive`}/>
    <h1>{text}</h1>
    <i className={`icon-left ${iconName} icon massive`}/>
  </div>)
}

export default SeasonDisplay
