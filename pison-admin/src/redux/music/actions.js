export const NAME = 'MUSIC';
export const GET_MUSICS = `${NAME}/GET_MUSICS`;
export const UPDATE_INFOS = `${NAME}/UPDATE_INFOS`;

export function getMusics(musics) {
  return {
    type: GET_MUSICS,
    musics,
  };
}

export function updateInfos(music,musics) {
    return {
        type: UPDATE_INFOS,
        music,
        musics,
    }
}