import { all, fork } from "redux-saga/effects"

import LayoutSaga from "./layout/saga"
import tasksSaga from "./tasks/saga"

export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    fork(tasksSaga),
  ])
}
