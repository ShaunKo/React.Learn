import React from 'react';

//父傳子這是子
//父是board
//上頁傳來的資料是value
export default class Square extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:null,
            times:1,//第一次點是1
        }
    }
    render(){
        return(
            <button className="square" onClick={()=>{
                this.setState({ value:'X' });
            }}>
                {this.state.value}
            </button>
        );
    }
}