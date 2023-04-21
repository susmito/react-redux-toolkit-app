import { call, put } from 'redux-saga/effects'
import { LAUNCH_IT_RECIEVED } from "../reducers/reducer1";

export function* dummySaga({ data }) {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const response = yield call(() => fetch(url))
    const jsonData = yield response.json()
    console.log({ jsonData })
    yield put({ type: `${LAUNCH_IT_RECIEVED}`, payload: response });
}