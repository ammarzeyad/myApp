import React from 'react';
import HornedBeast from './HornedBeast';
import newArra from './Data.json';

class Main extends React.Component {

    render() {

        return(
            <div>
                {newArra.map((element,index) =>{
                    return( <HornedBeast key={index} title={element.title}
                        image_url={element.image_url} description ={element.description}
                        keyword ={element.keyword} horns ={element.horns} />)
                    
                })}
            </div>
        )

    }
}

export default Main;