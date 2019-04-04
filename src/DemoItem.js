import React,{Component} from 'react';

class DemoItem extends Component{

    constructor(props){
        super(props);
        this.state={

        }
        this.itemOnclick=this.itemOnclick.bind(this)
    }

    shouldComponentUpdate(nextProps,nextState){
        const {item}=this.props;
        if(nextProps.item !== item){
            return true
        }else{
            return false
        }
    }

    render(){
        console.log('child render')
        const {item}=this.props;
        return (
            <li onClick={this.itemOnclick}>{item}</li>
        )
    }

    itemOnclick(){
        const {ReListItem,index}=this.props;
        ReListItem(index)
    }

}
export default DemoItem;
