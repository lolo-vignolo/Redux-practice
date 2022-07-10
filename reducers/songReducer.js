const initialState = {
  songs: [
    {
      id: 1,
      title: '19 días y 500 Noches',
      artist: 'Joaquin Sabina',
    },
    {
      id: 2,
      title: 'Rocanroles sin Destino',
      artist: 'Callejeros',
    },
    {
      id: 3,
      title: 'Te Mentiría',
      artist: 'La konga',
    },
  ],
  selectedSong: {},
};

export const songReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'SELECT_SONG':
      return {
        ...state,
        selectedSong: actions.payload,
      };
  }
  return state;
};
