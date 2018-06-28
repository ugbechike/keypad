import React from 'react'
import Output from './output.jsx'



class Btn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            collect: '',
            hub: []
        }
    }
    handleClick (show){
        let store = this.state.hub;
        if (typeof show == 'number'){
            store.push(show);
            this.setState({
                collect: store
            })
        }

        if(show == 'Bs'){
            store.pop()
           this.setState({
                collect: store
        })
        
        }

        if(show == 'Ok'){
            alert(`your is this ${store}`)
        }
    }   
    render(){
        let BtnArr = this.props.NumArr.map((value) =>{
            return <button className="btn" onClick={this.handleClick.bind(this, value)}>{value}</button>
        });

        return (
            <div>
                <Output th={this.state.collect} />
                {BtnArr}
            </div>
        )
    }
}




export default Btn


// import '../src/style.css'
// const Btn = (props) =>{
//     return (
//     <div>
//     <button>{props.text}</button>
//     </div>
//     )
// }
