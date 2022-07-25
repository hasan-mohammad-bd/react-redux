

//defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

//state
//===========================
/* 
What I would like to do.
*/

const initialCounterState = {
    count: 0,
}

const initalUsersState = {
    users: [{name: "Hasan Mohammad"}],
}

//Action(object) -type, payload (What would happen are written in action)
//========================================================
const increamentCounter = () => {
    return {
        type: INCREMENT
    };
};

const decrementCounter = () => {
    return {
        type: DECREMENT
    };
};
const addUser = () => {
    return {
        type: ADD_USER,
        payload: {name: 'shakil'}
    };
};

//reducer (reducer will work based on acton type/ it will handle all logic)

const counterReducer = (state=initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
            
    
        default:
         
    }
}



//1. state
//2. dispatch action
//3. reducer
//4. store -getState(), dispatch(), subscribe()

//create store
