import * as ACTIONS from '../action/ActionTypes';

const initialState = {
  gatheredCites: [],
};

export const GetCitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_CITIES: {
      return {
        ...state,
        gatheredCites: action.payload,
      };
    }
    default:
      return { ...state };
  }
};
