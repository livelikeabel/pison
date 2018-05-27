export const NAME = 'META';
export const SET_META = `${NAME}/SET_META`;
export const SET_EDIT_MODAL_TRUE = `${NAME}/SET_EDIT_MODAL_TRUE`;
export const SET_EDIT_MODAL_FALSE = `${NAME}/SET_EDIT_MODAL_FALSE`;


export function setMeta(meta) {
    return {
        type: SET_META,
        meta,
    };
}

export function setEditModalTrue(meta) {
    return {
        type: SET_EDIT_MODAL_TRUE,
        meta,        
    };
}

export function setEditModalFalse(meta) {
    return {
        type: SET_EDIT_MODAL_FALSE,
        meta,        
    };
}