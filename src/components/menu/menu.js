import React from 'react';
import { Container, InputGroup,Form, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getMenuItems } from "../../actions";

const mapStateToProps = state => {
    return {
        // menuItem : state.customerReducer.menuItem,
        menuItemsList: state.menuReducer.menuItemsList
    }
};

const mapDispatchToProps = dispatch => ({
    // changeMenuItem : menuItem => dispatch(changeMenuItem(menuItem)),
    getMenuItems: (business_id) => dispatch(getMenuItems(business_id))
});

class MenuItem extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <header className="card-header">{this.props.categoryName}</header>
                </div>
                <div>
                    {this.props.itemName}({this.props.quantity} {this.props.unit})- {this.props.price}
                    <br />
                </div>
            </div>
        );
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
        // this.getMenuItems = business_id => this.props.dispatch(getMenuItems(business_id));
        this.props.getMenuItems();
        console.log('menu items list ' + this.props.menuItemsList);
    }
    addItem(){
        alert('add item!');
    }
    addCategory(){
        alert('add Category!');
    }
    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <FormControl aria-describedby="basic-addon1" />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
                <Button href="#" onClick={()=>{this.addItem();}}>Add Item</Button>{' '}
                <Button href="#" onClick={()=>{this.addCategory();}}>Add Item Category</Button>
                {/* <Form inline className="align-right">
                    <FormControl type="text" placeholder="Search item"/>
                    <Button className="text-right" variant="outline-success">Search</Button>
                  </Form> */}
                <Container className="container-fluid h-100">
                    {this.props.menuItemsList.map((item) => (
                        <div key={item.item_id}>
                            <MenuItem categoryName={item.item_category} itemName={item.item_name} quantity={item.quantity} unit="units" price={"Rs " + item.price} />
                        </div>
                    ))}
                </Container>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);