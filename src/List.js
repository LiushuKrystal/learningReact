import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import TodoListUI from './TodoListUI';
import {  getInputChangeAction,getAddItemAction,getDeleteItemAction,getInitList } from './store/actionCreator.js';

class MyList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render(){
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleButtonClick={this.handleButtonClick}
                handleItemDelete={this.handleItemDelete}
                list={this.state.list}
            />
        )
    }

    componentDidMount(){
        const action = getInitList();
        store.dispatch(action);
    }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    handleButtonClick(){
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index){
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}

export default MyList;