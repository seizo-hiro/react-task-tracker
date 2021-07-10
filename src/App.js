import React, { Component } from 'react'
import Card from './Card'

export class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             arr:[
                 [0,"hello",new Date().toLocaleString()],
                 [1,"hoge",new Date().toLocaleString()],
                ],
             msg:""
        }
    }

    handleChange = message =>{
        this.setState({msg:message})
    }

    handleSubmit = e =>{
        e.preventDefault();
        if(this.state.msg===""){
            alert("内容を入力してください")
            return;
        }
        if(this.state.arr.length>=1 && this.state.msg===this.state.arr[this.state.arr.length-1][1]){
            const isOK =window.confirm("前回と内容ですがよろしいですか？")
            if(!isOK){
                return;
            }
        }
        this.setState({arr:[...this.state.arr,[this.state.arr.length,this.state.msg,new Date().toLocaleString()],
    ]})
    }
    
    itemDelete = (idx) =>{
        return () =>{
            this.setState({arr:this.state.arr.filter(item => item[0]!==idx)})
        }
    }

    render() {
        const {arr} = this.state
        return (
            <div>
                <form onSubmit={e=>this.handleSubmit(e)}>
                    <input type="text" onChange={e=>this.handleChange(e.target.value)}></input>
                    <input type="submit" value="add message"></input>
                </form>
                {arr.map((val,key)=>{
                    return <Card itemDelete={this.itemDelete} key={key} val={val}/>
                })}
            </div>
        )
    }
}

export default App
