export const NAME = 'META';
export const SET_META = `${NAME}/SET_META`;
export const SET_EDIT_MODAL_TRUE = `${NAME}/SET_EDIT_MODAL_TRUE`;
export const SET_EDIT_MODAL_FALSE = `${NAME}/SET_EDIT_MODAL_FALSE`;
export const SET_LICENSOR_MODAL_TRUE =`${NAME}/SET_LICENSOR_MODAL_TRUE`;
export const SET_LICENSOR_MODAL_FALSE =`${NAME}/SET_LICENSOR_MODAL_FALSE`;
export const CHANGE_LICENSOR_INPUT = `${NAME}/CHANGE_LICENSOR_INPUT`;

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

export function setLicensorModalTrue(meta) {
    return {
        type: SET_LICENSOR_MODAL_TRUE,
        meta,        
    };
}

export function setLicensorModalFalse(meta) {
    return {
        type: SET_LICENSOR_MODAL_FALSE,
        meta,        
    };
}

export function changeLicensorInput(meta) {
    return {
        type: CHANGE_LICENSOR_INPUT,
        meta,
    }
}