import { INCREMENT, DECREMENT, REFRESH } from '../const';

export function increment(val) {
    return {
        type: INCREMENT,
        payload: val
    }
}

export function decrement(val) {
    return {
        type: DECREMENT,
        payload: val
    }
}

export function refresh() {
    return {
        type: REFRESH
    }
}