import React from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
class ItemPopup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <Container>
                    <br/>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Row>
                                <Col><Form.Control placeholder="Item Name" /></Col>
                                <Col><Form.Control placeholder="Item Price" /></Col>
                                <Col><Form.Control placeholder="Item Quantity" /></Col>
                                <Col><Form.Control placeholder="Item Unit" /></Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Select item Category</Form.Label>
                            <Form.Control type="text" as="select">
                                {this.props.categories.map((category)=>(
                                <option key={category.item_category}>{category.item_category}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Item Description</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                    {/* <h5>{this.props.text}</h5> */}
                    <Button onClick={this.props.closePopup}>add</Button>
                    </Container>
                </div>
            </div>
        );
    }
}
class CategoryPopup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <Container>
                    <br/>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Item category" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Item Description</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                    <Button onClick={this.props.closePopup}>add</Button>
                    </Container>
                </div>
            </div>
        )
    }
}
export { ItemPopup, CategoryPopup };