const queryReducer = (prev, curr) => prev.total_karakter > curr.total_karakter ? prev : curr;

export default queryReducer;
