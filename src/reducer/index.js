
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
      console.log(payload)
      return { ...state, counterSum: state.counterSum + payload }
    case "GENERATE_COUNTERS":
      console.log(payload)
      let result = { 
        ...state,
        counterItems : new Array(payload)
                    .fill(0)
                    .map(() => ({ count: 0, id: generateID() }))
       }
      return result
    default:
      return state;
  }
};

