import React ,{Component,Fragment} from 'react';
import DemoItem from './DemoItem';
import axios from 'axios';
import './index.css'


class Demo extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[
            ],
            value:'',
        }
        this.InputValue=this.InputValue.bind(this)
        this.PushListBtn=this.PushListBtn.bind(this)
        this.RmListItem=this.RmListItem.bind(this)
    }
    render(){
        console.log('prent render')
        return (
            <Fragment>
                <div className={'input'}>
                    输入内容：
                    <input onChange={this.InputValue} value={this.state.value}></input>
                    <button onClick={this.PushListBtn}>提交</button>
                </div>
                <ul>
                   {
                       this.MapItem()
                   }
                </ul>
            </Fragment>
        )
    }

    // 循环list列表
    MapItem(){
       return this.state.list.map((item,index)=>{
            return  (
                <DemoItem
                ReListItem={this.RmListItem} 
                key={index}
                index={index}
                item={item}/>
            )
        })
    }

    //value
    InputValue(e){
        let value=e.target.value;
        this.setState(()=>{
            return{
                value
            }
        })
    }
    
    //新增数组
    PushListBtn(){
        if(this.state.value===''){
            return
        }
        console.log(this.state.value)
        this.setState((prevState)=>{
            return {
                list:[...prevState.list,this.state.value],
                value:''
            }
        },()=>{
            console.log(this.state.list)
        }
        )
    }

    //删除数组
    RmListItem(index){
      this.setState((prevState)=>{
          const list=prevState.list;
          list.splice(index,1)
        return{
            list
        }
      })
    }

    //生命周期函数
    //组件第一次挂载到页面之后执行的函数
    //只执行一次
    componentDidMount(){
        axios.get('http://www.mcyl913.tech:3000/').then((res)=>{
            console.log('res')
        }).catch((error)=>{
            console.log('error')
        })
    }

}

export default Demo;