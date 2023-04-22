import { all, takeLatest } from 'redux-saga/effects'

import { dummySaga, getData } from './saga1'

function* actionWatcher() {
    // yield takeLatest('LAUNCH_IT', dummySaga)
    yield takeLatest('GET_DATA', getData)
}

export default function* rootSaga() {
    yield all([actionWatcher()])
}