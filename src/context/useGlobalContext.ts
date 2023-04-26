import createGlobalState from 'react-create-global-state'

const initialState = { initialPosition: null, finalPosition: null }

const [useGlobalContext, Provider] = createGlobalState(initialState)

export const GlobalContextProvider = Provider

export default useGlobalContext
