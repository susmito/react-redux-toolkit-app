import { call, put } from 'redux-saga/effects'
import { GET_DATA_RECIEVED } from "../reducers/reducer1";

export function* dummySaga({ data }) {
    // const url = 'https://jsonplaceholder.typicode.com/todos/1';
    // const response = yield call(() => fetch(url))
    // const jsonData = yield response.json()
    // console.log({ jsonData })
    // yield put({ type: `${LAUNCH_IT_RECIEVED}`, payload: response });
}

export function* getData() {
    const url = 'https://62d6e78b49c87ff2af2f9413.mockapi.io/search-history'
    const response = yield call(() => fetch(url))
    const jsonData = yield response.json()
    // console.log({ jsonData })
    yield put({ type: `${GET_DATA_RECIEVED}`, payload: jsonData });
}