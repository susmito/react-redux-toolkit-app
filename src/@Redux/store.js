import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import reducer1 from './reducers/reducer1'
import rootSaga from './saga'

const store = () => {
    const saga = createSagaMiddleware()
    const configStore = configureStore({
        reducer: { reducer1 },
        devTools: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || process.env.NODE_ENV !== 'production',
        middleware: [saga]
    })
    saga.run(rootSaga)
    return configStore
}

export default store()