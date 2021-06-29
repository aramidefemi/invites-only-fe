const initialState = {

};

export default function applicationReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case 'GET_INVITE': 
      const new_state = { ...state, ...payload };
      return new_state; 
    default:
      return state;
  }
}
