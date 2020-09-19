import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { getBusinessCategoriesList } from "../../actions";
import TimePicker from "react-bootstrap-time-picker";

const mapStateToProps = (state) => {
  return {
    businessCategoriesList: state.customerReducer.businessCategoriesList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getBusinessCategoriesList: () => dispatch(getBusinessCategoriesList()),
});

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        user_email: '',
        first_name: '',
        last_name: '',
        type: '',
        password: '',
        contact_no: '',
      },
      business: {
        name: "",
        description: "",
        location: {
          address1: "",
          address2: "",
          city: "",
          state: "",
          zip: "",
        },
        timing: {
          monday: {
            start_Time: "",
            end_Time: "",
          },
          tuesday: {
            start_Time: "",
            end_Time: "",
          },
          wednesday: {
            start_Time: "",
            end_Time: "",
          },
          thursday: {
            start_Time: "",
            end_Time: "",
          },
          friday: {
            start_Time: "",
            end_Time: "",
          },
          satuarday: {
            start_Time: "",
            end_Time: "",
          },
          sunday: {
            start_Time: "",
            end_Time: "",
          },
        },
        avatar: "",
      },
      showBusinessForm: false,
    };
    this.props.getBusinessCategoriesList();
    this.handleUserInputChange = this.handleUserInputChange.bind(this);
    this.handleUser = this.handleUser.bind(this);
  }
  handleUserInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const newState = Object.assign({}, this.state);
    newState.user[name]=value;
    this.setState(newState);
    
  }
  handleUser(){
    if(this.state.user.type==="business"){
      this.setState({
        showBusinessForm: true
      });
    }
    console.log(this.state);
  }
  renderForm() {
    return (
      <div>
        <h3>SignUp Form</h3>
        <hr />
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
              name="first_name"
              type="text" 
              placeholder="Enter First Name" 
              onChange={this.handleUserInputChange}
               />
            </Form.Group>
            <Form.Group as={Col} controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
              name="last_name"
              type="text" 
              defaultValue=""
              placeholder="Enter Last Name" 
              onChange={this.handleUserInputChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            name="user_email"
            type="email" 
            placeholder="Enter email" 
            onChange={this.handleUserInputChange}
             />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              name="password"
              type="password" 
              placeholder="Password" 
              onChange={this.handleUserInputChange}
               />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control 
            name="contact_no"
            type="number" 
            placeholder="Contact Number" 
            onChange={this.handleUserInputChange}
             />
          </Form.Group>

          <Form.Group>
            <Form.Label>User Type</Form.Label>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Check
                  type="radio"
                  label="Customer"
                  name="type"
                  value="customer"
                  id="formHorizontalRadios1"
                  onChange={this.handleUserInputChange}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Check
                  type="radio"
                  label="Business"
                  name="type"
                  value="business"
                  id="formHorizontalRadios2"
                  onChange={this.handleUserInputChange}
                />
              </Form.Group>
            </Form.Row>
          </Form.Group>

          <Button variant="primary" onClick={this.handleUser}>
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
  renderBuisnessForm() {
    return (
      <div>
        <h3>Business Registration Form</h3>
        <hr />
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Business Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="formBasicDescription">
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              {(this.props.businessCategoriesList || []).map((category, id) => (
                <option value={category} key={id} id={id + 1}>
                  {category}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Label>Business Timings</Form.Label>
            <Table responsive>
              <thead>
                <tr>
                  <th>Days</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>
                    <TimePicker />
                  </td>
                  <td>
                    <TimePicker />
                  </td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>
                    <TimePicker />
                  </td>
                  <td>
                    <TimePicker />
                  </td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>
                    <TimePicker />
                  </td>
                  <td>
                    <TimePicker />
                  </td>
                </tr>
                <tr>
                  <td>Thusrday</td>
                  <td>
                    <TimePicker />
                  </td>
                  <td>
                    <TimePicker />
                  </td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>
                    <TimePicker />
                  </td>
                  <td>
                    <TimePicker />
                  </td>
                </tr>
                <tr>
                  <td>Satuarday</td>
                  <td>
                    <TimePicker />
                  </td>
                  <td>
                    <TimePicker />
                  </td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>
                    <TimePicker />
                  </td>
                  <td>
                    <TimePicker />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Form.Row>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Container className="container-fluid h-100">
          <Row></Row>
          <Row className="justify-content-center align-items-center h-100">
            <Col xs={12} md={8} lg={6}>
              {this.state.showBusinessForm
                ? this.renderBuisnessForm()
                : this.renderForm()}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
