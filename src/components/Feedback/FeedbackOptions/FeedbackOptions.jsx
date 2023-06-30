import React from "react"
import PropTypes from "prop-types"
import {Section, Title, Button, BtnWrapper} from "./FeedbackOptions.styled"

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <Section>
      <Title>Please leave your feedback</Title>

      <BtnWrapper>
        {options.map(option => {
          return (
            <Button
              key={option}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Button>
          )
        })}
      </BtnWrapper>
    </Section>
  )
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions
