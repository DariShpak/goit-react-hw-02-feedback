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
// import css from "styled-components"

class FeedbackButtons extends React.Component {
  render() {
    return <Container>
        <Title>Please leave your feedback</Title>

        <BtnWrapper>
          <Button type="button">Good</Button>
          <Button type="button">Neutral</Button>
          <Button type="button">Bad</Button>
        </BtnWrapper>
        <Subtitle>Statistics</Subtitle>
        <Statistics>
          <Item>Good: 0</Item>
          <Item>Neutral: 0</Item>
          <Item>Bad: 0</Item>
        </Statistics>
      </Container>
  }
}

export default FeedbackButtons
