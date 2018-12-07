import { createStore } from 'redux';
import rootReducer from '../redusers';

const createAppStore = () => {
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}

export default createAppStore