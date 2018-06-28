import React from 'react'

class Smart extends React.Component{
    constructor(props){
        super();
        this.state = {
            isMorning: true,
            sport: 'naija'
        }   
    }



    handleClick () {
            this.setState({
                isMorning:  !this.state.isMorning,
            });
         
        }
    
    

    render(){
        return(
        <div>
             <span>{this.state.isMorning ? "good morning" : "good afternoon"}</span><br/> 
             <button onClick={this.handleClick.bind(this)}>Toggle</button> 
        </div>
        );
    }
}

export default Smart