import React from 'react';
import { Form } from 'react-bootstrap';

class FormModels extends React.Component {

    render() {
        return (

            <div>

                <Form>
                    <Form.Group controlId="Email">
                        <Form.Label>The Filter</Form.Label>
                        <Form.Select aria-label="Example">
                            <option value="1">Number Of Horns</option>
                            <option value="2">One</option>
                            <option value="3">Two</option>
                            <option value="100">Whooold!</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}
export default FormModels;

