import {
    GET_MUSICS,
} from './actions';

const initialState = {
    musics: [],
};

const music = (state = initialState, action) => {
    console.log('여기는 리듀서',action)
    switch (action.type) {
        case GET_MUSICS:
            return {
                ...state,
                musics: action.musics,
            };
        default:
            return state;
    }
};

export default music;