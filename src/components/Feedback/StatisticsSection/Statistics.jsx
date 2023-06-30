import React from "react"
import PropTypes from "prop-types"
import {StatsWrapper, Subtitle, StatsList, Item} from "./Stats.styled"

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return <StatsWrapper>
      <Subtitle>Statistics</Subtitle>
      <StatsList>
        <Item>
          Good: {good}
        </Item>
        <Item>
          Neutral: {neutral}
        </Item>
        <Item>
          Bad: {bad}
        </Item>
        <Item>
          Total: {total}
        </Item>
        <Item>
          Positive feedback: {positivePercentage}%
        </Item>
      </StatsList>
    </StatsWrapper>
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
}

export default Statistics;