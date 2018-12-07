import { INCREMENT, DECREMENT, REFRESH } from '../const';

export default (procedure = "0", action) => {
    const {type, payload} = action;

    switch(type) {
        case INCREMENT : return procedure + "+" + payload;
        case DECREMENT : return procedure + "-" + payload;
        case REFRESH : return '0';
        default : return procedure;
    }
}