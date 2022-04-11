import { RootStateOrAny } from 'react-redux';

import { GET_PEOPLE, GET_PEOPLE_ERROR } from '../types';

const initialState = {
  people: [],
  peopleLoading: true,
};

export default function peopleReducer(
  state = initialState,
  action: RootStateOrAny,
) {
  switch (action.type) {
    case GET_PEOPLE:
      return {
        ...state,
        people: action.payload,
        peopleLoading: false,
      };
    case GET_PEOPLE_ERROR:
      return {
        peopleLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
