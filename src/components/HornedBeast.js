import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfClicks: 0
        }
    }


    NumberOfLike = () => {
        this.setState({
            numberOfClicks: this.state.numberOfClicks + 1
        })
    }
    render() {
        return (
            <div>


                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text> get more information:
                            {this.props.description} <br />
                            The Number of Horns : {this.state.numberOfClicks}
                        </Card.Text>
                        <div>
                            <Button onClick={this.NumberOfLike} variant="Primary">Like</Button>
                            <p>Likes {this.state.numberOfClicks}</p></div>
                            <Button onClick={()=>{
                                this.props.beastNameButton (this.props.title,this.props.image_url,this.props.description)
                            }}  variant="Primary">Modal</Button>
                    </Card.Body>
                </Card>

            </div>

        )
    }
}

export default HornedBeast;