import React from 'react'
import { connect } from 'react-redux'

import { getData } from '../actions'

import styled from 'styled-components'

const FormContainer = styled.div`
  padding: 50px;

  button {
    font-size: 1.5rem;
    border: 1px solid #111111bf;
    border-radius: 20px;
    background: #111111bf;
    padding: 10px 20px;
    cursor: pointer;
    animation: colorchange 20s infinite;
    transition: 0.3s;

    &:hover {
      font-size: 1.6rem;
    }

    @keyframes colorchange {
      0% {
        color: #c73032;
      }
      8% {
        color: #e7623e;
      }
      16% {
        color: #ab6dac;
      }
      25% {
        color: #91a1b2;
      }
      33% {
        color: #7a853b;
      }
      41% {
        color: #7f513e;
      }
      50% {
        color: #51a5c5;
      }
      58% {
        color: #b59e54;
      }
      66% {
        color: #507f62;
      }
      75% {
        color: #555752;
      }
      83% {
        color: #992e2e;
      }
      91% {
        color: #7b469b;
      }
      100% {
        color: #2a50a1;
      }
    }
  }
`

const ClassForm = props => {
  const handleGetData = e => {
    e.preventDefault()
    props.getData()
    console.log('clicked')
  }

  return (
    <FormContainer>
      <button onClick={handleGetData}>Who will you become?</button>
    </FormContainer>
  )
}

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData,
  }
}

export default connect(mapStateToProps, { getData })(ClassForm)
