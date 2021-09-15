import React from 'react';
import {Modal,Button} from 'react-bootstrap'
import newArra from './Data.json';
import HornedBeast from './HornedBeast';

class Selectedbeast extends React.Component {
    render (){
        return(
            <div>
            {newArra.map((element, index) => {
                return ( <HornedBeast key={index} title={element.title}
                    image_url={element.image_url} description={element.description}
                    keyword={element.keyword} horns={element.horns}
                    beastNameButton={this.beastNameButton} />)

            })}

            
            <Modal show={this.state.showModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.beastName.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.state.beastName.image_url} alt={this.state.beastName.title} style={{width:'100%'}}/>
                    <br />
                    {this.state.beastName.description}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        );
    }
}

export default Selectedbeast;