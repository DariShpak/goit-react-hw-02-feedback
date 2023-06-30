import React from "react"
import Statistics from "./Feedback/Statistics/Statistics"
import FeedbackOptions from "./Feedback/FeedbackOptions/FeedbackOptions"
import {Container} from "./Feedback/Feedback.styled"


class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
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
    const {good, neutral, bad} = this.state
    const totalFeedback = this.countTotalFeedback()
    const positiveFeedback = this.countPositiveFeedbackPercentage()

    return (
      <Container>
        {
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        }

        {
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedback}
          />
        }
      </Container>
    )
  }
}

export default App
