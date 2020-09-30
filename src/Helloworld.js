import React from 'react';


class HelloWorld extends React.Component{

        state = {
            response: ''
        }

    handleClick = greeting => {
        console.log('World clicked', greeting)
        this.setState({response: greeting})
    }


    render(){
        return  <div>
                    <p>Hello, {this.state.response}</p>
                    <button onClick={()=>this.handleClick('World!')}>World</button>
                    <button onClick={()=>this.handleClick('Friend!')}>Friend</button>
                    <button onClick={()=>this.handleClick('React!')}>React</button>
                </div>
    }
}
export default HelloWorld