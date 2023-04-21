import { all, takeLatest } from 'redux-saga/effects'

import { dummySaga } from './saga1'

function* actionWatcher() {
    yield takeLatest('LAUNCH_IT', dummySaga)
}

export default function* rootSaga() {
    yield all([actionWatcher()])
}