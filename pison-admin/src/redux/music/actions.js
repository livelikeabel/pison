export const NAME = 'MUSIC';
export const GET_MUSICS = `${NAME}/GET_MUSICS`;

export function getMusics(musics) {
  return {
    type: GET_MUSICS,
    musics,
  };
}
