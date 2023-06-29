import React from "react"
import {
  Title,
  Button,
  BtnWrapper,
  Subtitle,
  Container,
  Statistics,
  Item
} from "./Feedback.styled"

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1
    }))
  }

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
    return good + neutral + bad
  }

  countPositiveFeedbackPercentage() {
    const {good} = this.state
    const totalFeedback = this.countTotalFeedback()
    return totalFeedback > 0 ? Math.round(good / totalFeedback * 100) : 0
  }

  render() {
    const totalFeedback = this.countTotalFeedback()
    const positiveFeedback = this.countPositiveFeedbackPercentage()
    return <Container>
        <Title>Please leave your feedback</Title>

        <BtnWrapper>
          <Button type="button" onClick={() => this.onLeaveFeedback("good")}>
            Good
          </Button>
          <Button type="button" onClick={() => this.onLeaveFeedback("neutral")}>
            Neutral
          </Button>
          <Button type="button" onClick={() => this.onLeaveFeedback("bad")}>
            Bad
          </Button>
        </BtnWrapper>

        <Subtitle>Statistics</Subtitle>
        <Statistics>
          <Item>
            Good: {this.state.good}
          </Item>
          <Item>
            Neutral: {this.state.neutral}
          </Item>
          <Item>
            Bad: {this.state.bad}
          </Item>
          <Item>
            Total: {totalFeedback}
          </Item>
          <Item>
            Positive feedback: {positiveFeedback}%
          </Item>
        </Statistics>
      </Container>
  }
}

export default Feedback
