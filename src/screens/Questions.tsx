import React from 'react'
import styled from 'styled-components/native'
import { Questions } from '../components/Questions'

const Container = styled.SafeAreaView({
  flex: 1,
}) 

export const QuestionsScreen: React.FC = () => (
  <Container>
    <Questions />
  </Container>
)
