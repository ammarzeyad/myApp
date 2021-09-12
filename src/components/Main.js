import React from 'react';
 

class Main extends React.Component{

    render(){
        
        return(
<div> 
          <h2>
              
              {this.props.h}

          </h2>

            <img src={this.props.photo} alt="" />

            <p>
                {this.props.pargraph}

                </p>

            </div>
        )
    }
}

export default Main;