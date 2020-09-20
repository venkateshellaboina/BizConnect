import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";
import { connect } from "react-redux";
import { getMenuItems, getMenuCategories } from "../../actions";
import "./menu.css";

const mapStateToProps = (state) => {
  return {
    menuItemsList: state.menuReducer.menuItemsList,
    menuCategories: state.menuReducer.menuCategories,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getMenuItems: (business_id) => dispatch(getMenuItems(business_id)),
  getMenuCategories: (business_id) => dispatch(getMenuCategories(business_id)),
});

class MenuItem extends React.Component {
  render() {
    return (
      <div>
        <div>
          <header className="card-header">{this.props.categoryName}</header>
        </div>
        <div>
          {this.props.itemName}({this.props.quantity} {this.props.unit})-{" "}
          {this.props.price}
          <br />
        </div>
      </div>
    );
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openCategoryModal: false,
      openItemModal: false,
    };
    this.props.getMenuItems(1);
    this.props.getMenuCategories(1);
    console.log("menu items list " + this.props.menuItemsList);
  }
  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(prevProps.menuItemsList) !=
      JSON.stringify(this.props.menuItemsList)
    ) {
      this.updateItems();
    }
  }
  updateItems = () => {};
  handleClick = (event) => {
    let button = event.target.id;
    if (button == "category") {
    } else {
    }
  };

  renderMenuItems = (category) => {
    let menuItemsList = this.props.menuItemsList;
    let selectedCategoryList = menuItemsList.filter(
      (item) => item.item_category == category
    );
    // for(let i=0; i< selectedCategoryList.length ; i++){
    return (
      <div style={{ width: "100%" }}>
        {selectedCategoryList &&
          selectedCategoryList.map((item) => (
            <Row style={{ padding: "10px" }}>
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
    );
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row className="rowStyle">
            {/* <Example/> */}
            <Col sm={1} xs={4}>
              <span className="buttonSpanStyle">
                <Button
                  className="addButtonsStyle"
                  id="category"
                  onClick={this.handleClick}
                >
                  Add Category
                </Button>
              </span>
            </Col>
            <Col sm={2} xs={4}>
              <span className="buttonSpanStyle">
                <Button
                  className="addButtonsStyle"
                  id="category"
                  onClick={this.handleClick}
                >
                  Add Menu Item
                </Button>
              </span>
            </Col>

            <Col sm={3} xs={4}>
              <FormControl
                style={{ width: "100%" }}
                aria-describedby="basic-addon1"
              />
            </Col>
          </Row>
          <Row className="rowStyle2">
            <Col sm={6} xs={10}>
              {this.props &&
                this.props.menuCategories &&
                this.props.menuCategories.map((category) => (
                  <Container fluid>
                    <Row className="menuCard">
                      <Row style={{ paddingBottom: "10px", width: "100%" }}>
                        <Col sm={4} xs={6}>
                          <h4 className="menuCategoryStyle">
                            {category.item_category}
                          </h4>
                        </Col>
                      </Row>
                      <hr />
                      <Row style={{ width: "100%", paddingLeft: "1vw" }}>
                        <Col sm={10}>
                          {this.renderMenuItems(category.item_category)}
                        </Col>
                      </Row>
                    </Row>
                  </Container>
                ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
