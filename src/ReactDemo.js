// 1.引入React组件
import React ,{Component,Fragment} from 'react';
//引入组件
import ListItem from './listItem.js';
//引入css
import './index.css';


//2.用class定义组件
class ReactDemo extends Component{

    //组件默认加载数据
    constructor(props){
        super(props);
        //state 负责存储组件里的数据
        this.state={
            list:[
               
            ],
            inputValue:''
        }
        this.handleBtn=this.handleBtn.bind(this);
        this.handleInputValue=this.handleInputValue.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    }

    //在组件即将挂载到页面的时刻自动执行的函数
    componentWillMount(){
        console.log('componentWillMount')
    }


//3.render函数return 模板
    render(){
        return(
            <Fragment>
                <div>
                    <label htmlFor='insertArea'>输入内容</label>
                    {/* 绑定数据以及事件时必须在前面加this  bind绑定this指向*/}
                    <input value={this.state.inputValue} placeholder='TodoList'
                           onChange={this.handleInputValue}
                           className='input'
                           id='insertArea'
                    ></input>
                    {/* this很重要 */}
                    <button onClick={this.handleBtn}>提交</button>
                    {/* //ref 是获取组件里面的元素 */}
                    <ul ref={(ul)=>{this.ul=ul}}>
                        { this.getItem() }
                    </ul>
                </div>
            </Fragment>
        );
    }

    //组件被挂载到页面之后执行的函数
    componentDidMount(){
        console.log('componentDidMount')
    }

    //组件被更新之前执行的生命周期函数
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        //组件是否更新 true 为更新 false为不更新
        return true;
    }

    //组件被更新之前执行。但是它在shouldComponentUpdate函数之后执行
    //如果shouldComponentUpdate返回true执行
    //如果返回false则不执行
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    //组件更新完成之后执行
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    getItem(){
        //Es6map循环
      return this.state.list.map((item,index)=>{
            return  (
                    <ListItem 
                        key={item}
                        content={item} 
                        index={index}
                        //传递到子组件时绑定this
                        deleteFns={this.handleDelete}
                    />
            )
            // return  <li key={index} onClick={this.handleDelete.bind(this,index)}
            //             dangerouslySetInnerHTML={{__html:item}}
            //         >
            //             {/* {item} */}
            //         </li>
        })
    }

    handleInputValue(e){
        const value=e.target.value;
        this.setState(()=>{
            return{
                inputValue:value
            }
        })
       
    }

    //数组新增
    handleBtn(){
        //setState接收的参数  是修改数据之前的参数
       
        // this.setState((prevState)=>({
        //     //Es6数组连接 ...展开运算符
        //     //数组新增
        //     list:[...prevState.list,prevState.inputValue],
        //     inputValue:''
        // }),()=>{

        //     console.log(this.ul)
        //     console.log(this.ul.querySelectorAll('div').length)

        // })

        this.setState((prevState)=>{
            return {
                list:[...prevState.list,prevState.inputValue],
                inputValue:''
            }

            // 在函数结束后的回调
        },()=>{
        console.log(this.ul)
        console.log(this.ul.querySelectorAll('div').length)
        })
    }
    //数组删除
    handleDelete(index){
        this.setState((prevState,index)=>{
            //setState接收的参数  是修改数据之前的参数
            const list=prevState.list;
            //splice 删除第一个参数 从第几个开始， 第二个参数  输出几个
            list.splice(index,1)
            return{
                //Es语法  变量名一致可以不用写list :list
                list
            }
        })
    }
}

//4.输出
export default ReactDemo;