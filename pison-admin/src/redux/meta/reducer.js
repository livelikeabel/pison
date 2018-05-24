import {
    SET_META,
} from './actions';

const initialState = {
    meta: 'meta',
};

const meta = (state = initialState, action) => {
    switch (action.type) {
        case SET_META:
            return {
                ...state,
                ...action.meta,
            };
        default:
            return state;
    }
};

export default meta;