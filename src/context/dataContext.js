import { useReducer, useContext, createContext } from "react"

export const ActionType = Object.freeze({
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
})

const initialState = {
  data: [],
  error: null,
  loading: false,
}

// Action creators

export const fetchAPILoading = isLoading => ({
  type: ActionType.LOADING,
  payload: isLoading,
})

export const fetchAPISuccess = data => ({
  type: ActionType.SUCCESS,
  payload: data,
})

export const fetchAPIError = error => ({
  type: ActionType.ERROR,
  payload: error,
})

// Reducer

const APIStateContext = createContext()
const APIDispatchContext = createContext()

const apiReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case ActionType.SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case ActionType.LOADING:
      return { ...state, loading: action.payload }
    case ActionType.ERROR:
      return { ...state, loading: false, error: action.payload }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const APIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState)
  return (
    <APIStateContext.Provider value={state}>
      <APIDispatchContext.Provider value={dispatch}>
        {children}
      </APIDispatchContext.Provider>
    </APIStateContext.Provider>
  )
}

export const useAPIState = () => {
  const context = useContext(APIStateContext)
  if (context === undefined) {
    throw new Error("useAPIState must be used within a APIStateContextProvider")
  }
  return context
}

export const useAPIDispatch = () => {
  const context = useContext(APIDispatchContext)
  if (context === undefined) {
    throw new Error("useAPIDispatch must be used within a APIDispatchContextProvider")
  }
  return context
}
