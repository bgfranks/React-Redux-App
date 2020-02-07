import React from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'

const ClassText = styled.div`
  padding: 10px;
  font-size: 1.5rem;
  font-weight: bold;

  &.Barbarian {
    color: #e7623e;
  }

  &.Bard {
    color: #ab6dac;
  }
  &.Cleric {
    color: #91a1b2;
  }
  &.Druid {
    color: #7a853b;
  }
  &.Fighter {
    color: #7f513e;
  }
  &.Monk {
    color: #51a5c5;
  }
  &.Paladin {
    color: #b59e54;
  }
  &.Ranger {
    color: #507f62;
  }
  &.Rogue {
    color: #555752;
  }
  &.Sorcerer {
    color: #992e2e;
  }
  &.Warlock {
    color: #7b469b;
  }
  &.Wizard {
    color: #2a50a1;
  }
`

const ClassList = props => {
  return (
    <div>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.classes.map(theClass => (
          <ClassText className={theClass.name} key={theClass.index}>
            {theClass.name}
          </ClassText>
        ))
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return { classes: state.classes, error: state.error }
}

export default connect(mapStateToProps, {})(ClassList)
