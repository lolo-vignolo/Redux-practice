const initialState = {
  infoAbility: {},
  loading: false,
};

export const abilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ABILITY':
      return {
        ...state,
        infoAbility: action.payload,
      };
    case 'SET_ABILITY_LOADING_TRUE':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_ABILITY_LOADING_FALSE':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
