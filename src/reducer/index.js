
const initialState = {
  counterSum: 0,
  counterItems: []
};

const generateID = () => {
  return new Date().getTime() + Math.random();
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "COUNTERSUM":
      return { ...state, counterSum: state.counterSum + payload }
    case "GENERATE_COUNTERS":
      {
        state.counterSum = 0
        let result = {
          ...state,
          counterItems: new Array(payload)
            .fill(0)
            .map(() => ({ count: 0, id: generateID() }))
        }
        return result
      }
    case "INCREASE_ONE_COUNTER":
      {
        let counterItems = state.counterItems.map(counterItem => {
          if (counterItem.id === payload.id) {
            return { id: counterItem.id, count: counterItem.count + payload.changedNum };
          } else {
            return counterItem;
          }
        });
        return { ...state, counterItems }
      }
    case "DECREASE_ONE_COUNTER":
      {
        let counterItems = state.counterItems.map(counterItem => {
          if (counterItem.id === payload.id) {
            return { id: counterItem.id, count: counterItem.count - payload.changedNum };
          } else {
            return counterItem;
          }
        });
        return { ...state, counterItems }
      }
    default:
      return state
  }
};

