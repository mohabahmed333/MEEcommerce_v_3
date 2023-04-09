
import {all,call} from 'redux-saga/effects'

import{ categorySaga} from './categories/category.saga'
import { CombineUserSaga } from './user/user.sega'
export function* rootSaga(){
    yield all([call(categorySaga),call(CombineUserSaga)])

}