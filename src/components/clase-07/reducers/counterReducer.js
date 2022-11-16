import { TYPES } from '../types';

export const initialState = { count: 0 };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { ...state, count: state.count + 1 };

    case TYPES.INCREMENT_5:
      return { ...state, count: state.count + 5 };

    case TYPES.DECREMENT:
      return { ...state, count: state.count - 1 };

    case TYPES.DECREMENT_5:
      return { ...state, count: state.count - 5 };

    case TYPES.DIVIDE:
      return { ...state, count: state.count / 2 };

    case TYPES.MULTIPLY:
      return { ...state, count: state.count * 2 };

    case TYPES.RESET:
      return initialState;

    default:
      return state;
  }
};
