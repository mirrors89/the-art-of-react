import * as types from '../actions/ActionTypes'

const initalSatate = {
  color: 'black'
}

const color = (state = initalSatate, action) => {
  switch(action.type) {
    case types.SET_COLOR:
      return {
        color: action.color
      }
    default:
      return state;
  }
}

export default color
