import * as types from "./constants";

const initialState = {
  loading: true,
  hasError: false,
  users: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case types.SET_ERROR:
      return {
        ...state,
        hasError: action.payload
      };

    case types.GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case types.SELECT_USER:
      const { id, selected } = action.payload;
      const index = state.users.findIndex(item => item.id === id);
      const newUsers = [
        ...state.users.slice(0, index),
        { ...state.users[index], selected },
        ...state.users.slice(index + 1)
      ];
      return {
        ...state,
        users: newUsers
      };
    case types.SELECT_ALL:
      return {
        ...state,
        users: state.users.map(user => ({ ...user, selected: action.payload }))
      };
    default:
      return { ...state };
  }
};

export default reducer;
