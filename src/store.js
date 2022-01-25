import { createStore } from 'redux'

import rootReducer from './Reducers/root'

export default function configureStore(preloadedState) {

  const store = createStore(rootReducer, preloadedState)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./Reducers/root', () => store.replaceReducer(rootReducer))
  }

  return store
}