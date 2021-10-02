import React from 'react';
import HornedBeast from './HornedBeast';
import newArra from './Data.json';
import {Modal,Button} from 'react-bootstrap'
import FormModels from './FormModels';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beastName: { title: '', image_url: '', description: '' },
            showModal: false
        }
    }
    handleClose = () => {
        this.setState({
            showModal: false
        })
    }

    beastNameButton = (title, image_url, description) => {
        this.setState({
            beastName: { title, image_url, description },
            showModal: true
        })
    }
    render() {

        return (
            <div>
                <FormModels /> 
                {newArra.map((element, index) => {
                    return (<HornedBeast key={index} title={element.title}
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
        )

    }
}

export default Main;