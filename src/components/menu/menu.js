import React from 'react';
import { Container, InputGroup, ListGroup, FormControl, Col, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getMenuItems,getMenuCategories } from "../../actions";
// import Popup from 'react-popup';
import { ItemPopup, CategoryPopup } from './popup.js';
import './menu.css';

const mapStateToProps = state => {
    console.log('state');
    return {
        // menuItem : state.menuReducer.menuItem,
        menuItemsList: state.menuReducer.menuItemsList,
        menuCategories: state.menuReducer.menuCategories
    }
};

const mapDispatchToProps = dispatch => ({
    // changeMenuItem : menuItem => dispatch(changeMenuItem(menuItem)),
    getMenuItems: (business_id) => dispatch(getMenuItems(business_id)),
    getMenuCategories: (business_id) => dispatch(getMenuCategories(business_id))
});

class MenuItem extends React.Component {
    render() {
        return (
            <Container fluid>
                <div className="menuCard">
                    <Row style={{ paddingBottom: "10px", width: "100%" }}>
                        <Col sm={4} xs={6}>
                            <h4 className="menuCategoryStyle">{this.props.itemGroup[0].item_category}</h4>
                        </Col>
                    </Row>
                    <Row style={{ width: "100%", paddingLeft: "1vw" }}>
                        <Col sm={10}>
                            <div style={{ width: "100%" }}>
                                {this.props.itemGroup.map((item) => (
                                    <Row key={item.item_id} style={{ padding: "10px" }}>
                                        <Col sm={3} xs={3}>
                                            <h6 className="menuItemStyle">{item.item_name}</h6>
                                        </Col>
                                        <Col sm={3} xs={3}>
                                            <h6 className="menuItemStyle">{item.description}</h6>
                                        </Col>
                                        <Col sm={3} xs={3}>
                                            <h6 className="menuItemStyle">
                                                {item.quantity}&nbsp;{item.unit}{" "}
                                            </h6>
                                        </Col>
                                        <Col sm={2} xs={2}>
                                            <h6 className="menuItemStyle">Rs. {item.price}</h6>
                                        </Col>
                                        <Col sm={1} xs={1}>
                                            <h6 className="menuItemStyle">{item.is_available}</h6>
                                        </Col>
                                    </Row>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.props.getMenuItems();
        this.props.getMenuCategories();
        this.state = { showPopup1: false ,showPopup2:false};
        console.log('menu items list ' + this.props.menuItemsList);
    }
    togglePopup1() {
        this.setState({
            showPopup2: false,
            showPopup1: !this.state.showPopup1
        });
    }
    togglePopup2() {
        this.setState({
            showPopup1: false,
            showPopup2: !this.state.showPopup2
        });
    }
    render() {
        console.log(this.props.menuItemsList);
        const items = this.props.menuItemsList;
        var result = items.reduce(function (r, a) {
            r[a.item_category] = r[a.item_category] || [];
            r[a.item_category].push(a);
            return r;
        }, Object.create(null));
        console.log(result);
        console.log(this.props.menuCategories);
        return (
            <Container fluid>
                <Col sm={6} xs={10}>
                <Row className="rowStyle2">
                    <Col sm={3} xs='6'>
                        <FormControl aria-describedby="basic-addon1" />
                    </Col>
                    <Col>
                        <Button variant="outline-secondary">Search</Button>
                    </Col>
                    <Col xs='auto'>
                            <Button onClick={this.togglePopup1.bind(this)}>Add Item</Button>{' '}
                        </Col>
                    <Col xs='auto'>
                            <Button onClick={this.togglePopup2.bind(this)}>Add Item Category</Button>
                       </Col>
                </Row>
                        </Col>
                {this.state.showPopup1 ?
                    <ItemPopup categories={this.props.menuCategories}
                        text='Add item'
                        closePopup={this.togglePopup1.bind(this)}
                    />
                    : null
                }
                {this.state.showPopup2 ?
                    <CategoryPopup
                        text='Add category'
                        closePopup={this.togglePopup2.bind(this)}
                    />
                    : null
                }
                <Row className="rowStyle2">
                    <Col sm={6} xs={10}>
                        {
                            Object.values(result).map((items) => (
                                <div key={items[0].item_id}>
                                    {/* <MenuItem categoryName={item.item_category} itemName={item.item_name} quantity={item.quantity} unit="units" price={"Rs " + item.price} /> */}
                                    <MenuItem itemGroup={items} />
                                </div>
                            ))
                        }
                    </Col>
                </Row>
            </Container >
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);