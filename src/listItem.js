import React from 'react';
// 引用PropTypes
import PropTypes from 'prop-types';

class ListItem extends React.Component{

    constructor(props){
        super(props);
        //绑定this指向
        this.handleItem=this.handleItem.bind(this);
    }
    //一个组件要从父组件接收参数
    //只要父组件的render函数被重新执行了,子组件的这个生命周期函数就会被执行
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    } 

    //组件被剔除之前执行
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }


    render(){
        // ES6结构赋值
        const { content }=this.props;
        return <div onClick={this.handleItem}>{content}</div>
    }

    handleItem(){
         // ES6结构赋值
        const { deleteFns,index}=this.props;
        deleteFns(index);
    }
}

// 校验数据类型
ListItem.propTypes={
    //必须参数
    //test:PropTypes.string.isRequired,
    //传两个参数
    name:PropTypes.arrayOf(PropTypes.number,PropTypes.string),
    content:PropTypes.string,
    handleItem:PropTypes.func,
    index:PropTypes.number
}
//数据默认属性
ListItem.defaultProps={
    // test:'6666'
}

export default ListItem;