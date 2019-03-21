import { friendConstants } from '../_constants/friend.constants';

const initialState = { 
    all: [],
    friend: {},
    errors: undefined
};

export function friends(state = initialState, action) {
  switch (action.type) {
    case friendConstants.GET_FRIENDS_REQUEST:
      return {
        loading: true
      };
    case friendConstants.GET_FRIENDS_SUCCESS:
      return {
        ...state,
        all: action.friends,
        loading: false
      };
    case friendConstants.GET_FRIENDS_FAILURE:
      return {
        loading: false
      };
      case friendConstants.GET_FRIEND_REQUEST:
      return {
        loading: true
      };
    case friendConstants.GET_FRIEND_SUCCESS:
      return {
        ...state,
        friend: action.friend,
        loading: false
      };
    case friendConstants.GET_FRIEND_FAILURE:
      return {
        loading: false
      };
    default:
      return state
  }
}