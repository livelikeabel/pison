import {
    SET_META,
    SET_EDIT_MODAL_TRUE,
    SET_EDIT_MODAL_FALSE,
} from './actions';

const initialState = {
    meta: 'meta',
    showEditModal: false,
};

const meta = (state = initialState, action) => {
    switch (action.type) {
        case SET_META:
        case SET_EDIT_MODAL_TRUE:
        case SET_EDIT_MODAL_FALSE:
            return {
                ...state,
                ...action.meta,
            };
        default:
            return state;
    }
};

export default meta;