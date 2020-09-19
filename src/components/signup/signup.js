import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { getBusinessCategoriesList } from "../../actions";
import moment from 'moment';
import { TimePicker } from 'antd';
import 'antd/dist/antd.css'; 

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
        user_email: "",
        first_name: "",
        last_name: "",
        type: "",
        password: "",
        contact_no: "",
      },
      business: {
        name: "",
        description: "",
        category: "",
        location: {
          address1: "",
          address2: "",
          city: "",
          region: "",
          zipcode: "",
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
      userValidated: false,
      userSetValidated: false,
    };
    this.props.getBusinessCategoriesList();
    this.handleUserInputChange = this.handleUserInputChange.bind(this);
    this.handleBusinessInputChange = this.handleBusinessInputChange.bind(this);
    this.handleBusinessLocationChange = this.handleBusinessLocationChange.bind(
      this
    );
    this.handleBusinessTimingChange = this.handleBusinessTimingChange.bind(
      this
    );
    this.handleUser = this.handleUser.bind(this);
  }
  handleUserInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const newState = Object.assign({}, this.state);
    newState.user[name] = value;
    this.setState(newState);
  }
  handleBusinessInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const newState = Object.assign({}, this.state);
    newState.business[name] = value;
    this.setState(newState);
  }
  handleBusinessLocationChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const newState = Object.assign({}, this.state);
    newState.business.location[name] = value;
    this.setState(newState);
  }
  handleBusinessTimingChange(event) {
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;
    // const label = target.label;
    // const newState = Object.assign({}, this.state);
    // newState.business.timing[label][name] = value;
    // this.setState(newState);
    console.log(event.format("HH:mm:ss"));
  }
  handleUser(event) {
    if (this.state.user.type === "business") {
      this.setState({
        showBusinessForm: true,
      });
    }
    console.log(this.state);
  }
  renderForm() {
    return (
      <div>
        <h3>SignUp Form</h3>
        <hr />
        <Form noValidate validated={this.state.validated}>
          <Form.Row>
            <Form.Group as={Col} controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="first_name"
                type="text"
                placeholder="Enter First Name"
                onChange={this.handleUserInputChange}
                required
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
                required
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
              required
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
                required
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
              required
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
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter Name"
              onChange={this.handleBusinessInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              rows="3"
              onChange={this.handleBusinessInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicDescription">
            <Form.Label>Category</Form.Label>
            <Form.Control
              name="category"
              as="select"
              defaultValue="Choose..."
              onChange={this.handleBusinessInputChange}
            >
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
            <Form.Control
              name="address1"
              type="text"
              placeholder="1234 Main St"
              onChange={this.handleBusinessLocationChange}
            />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              name="address2"
              type="text"
              placeholder="Apartment, studio, or floor"
              onChange={this.handleBusinessLocationChange}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                name="address2"
                type="text"
                placeholder="City"
                onChange={this.handleBusinessLocationChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                name="region"
                as="select"
                defaultValue="Choose..."
                onChange={this.handleBusinessLocationChange}
              >
                <option>Choose...</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                name=" zipcode"
                placeholder="Zip Code"
                type="text"
                onChange={this.handleBusinessLocationChange}
              />
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
                  <TimePicker 
                  id="mondayStart"
                  format="HH:mm:ss"
                  onChange={this.handleBusinessTimingChange}
                  />

                  </td>
                  <td>
                    <TimePicker 
  
                    
                    />
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
          <Button variant="primary" onClick={this.handleUser}>
            Register
          </Button>
        </Form>
      </div>
    );
  }
  render() {
    return (
      <div>
        <br></br>
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
