import axios from 'axios';

const setAbilityLoading = () => {
  return {
    type: 'SET_ABILITY_LOADING_TRUE',
    payload: true,
  };
};
const setAbilityLoadingOff = () => {
  return {
    type: 'SET_ABILITY_LOADING_FALSE',
    payload: false,
  };
};

const setAbility = (abilityInfo) => {
  return {
    type: 'SET_ABILITY',
    payload: abilityInfo,
  };
};

export const getAbilityInfo = (ability) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/ability/${ability}/`
    );
    dispatch(setAbilityLoading());
    dispatch(setAbility(res.data));
    dispatch(setAbilityLoadingOff());
  };
};
