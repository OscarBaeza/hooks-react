import React from 'react';

export default class HelloMessage extends React.Component {
    
    render() {
      return (
        <div>
          Hola {this.props.name}
          <br/>
          Me siento {this.props.estadoAnimo}
          
        </div>
      );
    }
    
  }
  
 
  