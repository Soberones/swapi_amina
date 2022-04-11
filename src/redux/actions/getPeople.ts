import axiosConfig from '../../api/axiosConfig';
import { GET_PEOPLE, GET_PEOPLE_ERROR } from '../types';

export type PersonType = {
  name: string;
  birth_year?: string;
  eye_color?: string;
  gender?: string;
  hair_color?: string;
  height?: string;
  mass?: string;
  skin_color?: string;
  homeworld?: string;
  films?: string[];
  species?: string[];
  starships?: string[];
  vehicles?: string[];
  url?: string;
  created?: string;
  edited?: string;
};

export const getPeople =
  () =>
  async (
    dispatch: (arg0: { type: string; payload: PersonType | any }) => void,
  ) => {
    try {
      const res = await axiosConfig.get('/people/');

      dispatch({
        type: GET_PEOPLE,
        payload: res.data.results,
      });
    } catch (error) {
      dispatch({
        type: GET_PEOPLE_ERROR,
        payload: error,
      });
    }
  };
