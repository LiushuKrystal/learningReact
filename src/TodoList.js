import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
    const { list,inputValue,changeInputValue,handleClick,deleteItem } = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue}/>
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item,index) => {
                        return <li key={index} onClick={(e) => deleteItem(index,e)}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        inputValue: state.inputValue,
        list: state.list
    }
}

//为了让input里面的输入改变store里面的值
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e){
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },
        handleClick(e){
            const action = {
                type: 'add_item'
            };
            dispatch(action);
        },
        deleteItem(index,e){
            const action = {
                type: 'delete_item',
                index
            };
            dispatch(action);
        }
    }
}

//connect方法通过把UI组件和业务逻辑连接起来，返回一个容器组件

//让TodoList组件和store做关联，store里面的数据可以映射到TodoList的Props
// 如果想对store里面的数据做修改，也可以通过store的props做修改，mapDispatch指的是store.dispatch，
// 把store的dispatch方法挂载到props上,让组件可以通过this.props访问这个方法
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);