import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_DATA} from './actionTypes';

const defaultState = {
    inputValue: '',
    list: [1,2]
}

//reducer可以接收state，但绝不能修改state
//第一个参数是之前的数据，第二个参数是action
export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE){
        //对原来的数据深拷贝，然后修改值
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    if(action.type === INIT_LIST_DATA){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    return state;
}