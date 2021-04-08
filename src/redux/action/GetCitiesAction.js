import * as ACTIONS from './ActionTypes';
import RestClient from '../../rest/Api';

export const getCitiesData = item => dispatch => {
  RestClient.get()
    .then(response => {
      let Cities = response.data?.list;
      dispatch({ type: ACTIONS.GET_CITIES, payload: Cities });
    })
    .catch(err => console.log(err));
};