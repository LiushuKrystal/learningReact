import React, {Component, Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import style from './style.css';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            show: true,
            list: []
        }
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    render(){
        return (
            <Fragment>
                <TransitionGroup>
                {
                    this.state.list.map((item,index) => {
                        return (
                            <CSSTransition
                                in={this.state.show}
                                timeout={1000}
                                classNames='fade'
                                unmountOnExit
                                onEntered={(el) => {el.style.color='blue'}}
                                appear={true}
                                key={index}
                            >
                                <div>{item}</div>
                            </CSSTransition>
                        )
                    })
                }
                </TransitionGroup>
                <button onClick={this.handleItemClick}>toggle</button>
            </Fragment>
        )
    }

    handleItemClick(){
        this.setState((prevState) => {
            return {
                list: [...prevState.list,'item']
            }
        })
    }
}

export default App;