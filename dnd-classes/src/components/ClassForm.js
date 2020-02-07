import React from 'react'
import { connect } from 'react-redux'

import { getData } from '../actions'

const ClassForm = props => {
  return (
    <div>
      <button>Who will you become?</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData,
  }
}

export default connect(mapStateToProps, {})(ClassForm)
