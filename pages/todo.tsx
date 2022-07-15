import { Container } from '@mui/material'
import React from 'react'
import CardNewProject from '../components/card-new-project'
import CardProject from '../components/card-project'


export default function ToList() {
  return (
    <>
      <Container>
        <div className="d-flex-wrap">
          <CardProject/>
          <CardProject/>
          <CardProject/>
        </div>
      </Container>
      <CardNewProject/>
    </>
  )
}