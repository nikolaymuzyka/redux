import { INCREMENT, DECREMENT, REFRESH } from '../const';

export default (counter = 0, action) => {
    const {type, payload} = action;

    switch(type) {
        case INCREMENT : return  counter + payload;
        case DECREMENT : return  counter - payload;
        case REFRESH : return counter = 0;

        default : return counter;
    }
}