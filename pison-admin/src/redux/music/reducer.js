import { GET_MUSICS, UPDATE_INFOS } from './actions';

const initialState = {
  musics: []
};

const music = (state = initialState, action) => {
  switch (action.type) {
    case GET_MUSICS:
      return {
        ...state,
        musics: action.musics
      };
    case UPDATE_INFOS:
      console.log('여기는 리듀서', action.music);
      return {
        ...state,
        musics: [ action.musics, action.music]
      };
    default:
      return state;
  }
};

export default music;
