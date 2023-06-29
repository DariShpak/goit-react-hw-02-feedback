import styled from "styled-components"
// import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
  color: #2e2f42;
`
export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
`

export const Subtitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
`


export const BtnWrapper = styled.div`
`

export const Button = styled.button`
  cursor: pointer;
  width: 65px;
  background: #e7e9fc;
  border-radius: 8px;
  border: 2px solid #8e8f99;
  color: #434455;
  margin-right: 15px;
  padding: 8px;

  &:hover {
    border: 2px solid #2e2f42;
    color: #2e2f42;
  }
`
export const Statistics = styled.ul`
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`
export const Item = styled.li``