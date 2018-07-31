import { GET_ERRORS } from '../actions/types';

const initialState = {}

export default function (state = initialState, action) {
    // test by using switch
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}