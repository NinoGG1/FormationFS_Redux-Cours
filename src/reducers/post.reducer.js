const initialState = []; // Initialisation de l'état comme un tableau vide

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POSTS":
      // Assurez-vous que action.payload est un tableau
      return [...action.payload]; // Retourne un nouvel état avec les posts
    default:
      return state;
  }
}
