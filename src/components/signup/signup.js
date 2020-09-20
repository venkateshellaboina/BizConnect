import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { getBusinessCategoriesList } from "../../actions";
import moment from "moment";
import { TimePicker } from "antd";
import "antd/dist/antd.css";
import "./signup.css";

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
        user_email: null,
        first_name: null,
        last_name: null,
        type: null,
        password: null,
        contact_no: null,
      },
      business: {
        name: "",
        description: "",
        user_email: "",
        contact_details: "",
        category: "",
        location: {
          address1: "",
          address2: "",
          city: "",
          region: "",
          zipcode: "",
        },
        timing: [
          {
            day: "Monday",
            start_time: "",
            end_time: "",
          },
          {
            day: "Tuesday",
            start_time: "",
            end_time: "",
          },
          {
            day: "Wednesday",
            start_time: "",
            end_time: "",
          },
          {
            day: "Thursday",
            start_time: "",
            end_time: "",
          },
          {
            day: "Friday",
            start_time: "",
            end_time: "",
          },
          {
            day: "Saturday",
            start_time: "",
            end_time: "",
          },
          {
            day: "Sunday",
            start_time: "",
            end_time: "",
          },
        ],
        avatar: "",
        gallery: "",
      },
      showBusinessForm: false,
      userValidated: false,
      businessValidated: false
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
    this.handleBusiness = this.handleBusiness.bind(this);
    this.validateUser = this.validateUser.bind(this);
    this.validateBusiness = this.validateBusiness.bind(this);
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
  handleBusinessTimingChange(index, key, value) {
    const newState = Object.assign({}, this.state);
    newState.business.timing[index][key] = value.format("HH:mm");
    this.setState(newState);
  }
  handleUser(event) {
    event.preventDefault();
    const userValidation = this.validateUser();
    if (userValidation) {
      if (this.state.user.type === "business") {
        this.setState({
          showBusinessForm: true,
        });
      } else {
        window.location.href = "/login";
      }
    }
    else{
      this.setState({
        ...this.state,
        userValidated: true,
      });
    }

    console.log(this.state);
  }
  handleBusiness(event) {
    event.preventDefault();
    const businessValidation  = this.validateBusiness();
    if(businessValidation){
      window.location.href = "/login";
    }
    else{
      this.setState({
        ...this.state,
        businessValidated: true
      });
    }

  }
  validateBusiness() {
    let business = this.state.business;
    if (
      business["name"] &&
      business["description"] &&
      business["user_email"] &&
      business["category"] &&
      business["location"]["address1"] &&
      business["location"]["city"]
    ) {
      return true;
    }
    return false;
  }
  validateUser() {
    let user = this.state.user;
    if (
      user["first_name"] &&
      user["password"] &&
      user["user_email"] &&
      user["type"]
    ) {
      return true;
    }
    return false;
  }
  renderForm() {
    return (
      <div className="formStyle">
        <h5>Howdy!! Please go ahead and create an account.</h5>
        <hr />
        <Form
          noValidate
          validated={this.state.userValidated}
          onSubmit={this.handleUser}
        >
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="first_name"
                type="text"
                placeholder="Enter First Name"
                onChange={this.handleUserInputChange}
                required={true}
              />
              <Form.Control.Feedback type="invalid">
                Please provide your first name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
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
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide your email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                minLength="6"
                onChange={this.handleUserInputChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide your password.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              name="contact_no"
              type="number"
              placeholder="Contact Number"
              required={true}
              onChange={this.handleUserInputChange}
            />
            <Form.Control.Feedback type="invalid">
                Please provide contact number.
              </Form.Control.Feedback>
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
                  required
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
                  required
                />
              </Form.Group>
            </Form.Row>
            <Form.Control.Feedback type="invalid">
                  Please select user type.
                </Form.Control.Feedback>
            </Form.Group>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </div>
    );
  }
  renderBuisnessForm() {
    return (
      <div className="formStyle">
        <h6>You are just a step away from listing your business</h6>
        <hr />
        <Form noValidate onSubmit={this.handleBusiness} validated={this.state.businessValidated} >
          <Form.Group controlId="formBasicName">
            <Form.Label>Business Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter Name"
              onChange={this.handleBusinessInputChange}
              required
            />
             <Form.Control.Feedback type="invalid">
                  Please enter your Business/Service name
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              rows="3"
              onChange={this.handleBusinessInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
                  Please enter a short description about what you do.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicBusinessEmail">
            <Form.Label>Business Email</Form.Label>
            <Form.Control
              name="user_email"
              type="text"
              placeholder="Enter Email"
              onChange={this.handleBusinessInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicBusinessContact">
            <Form.Label>Business Contact</Form.Label>
            <Form.Control
              name="contact_details"
              type="Number"
              placeholder="Enter Contact Number"
              onChange={this.handleBusinessInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
                  Providing a contact number helps your customers to connect with you easily.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              name="category"
              as="select"
              defaultValue="Choose..."
              onChange={this.handleBusinessInputChange}
              required
            >
              <option>Choose...</option>
              {(this.props.businessCategoriesList || []).map((category, id) => (
                <option value={category} key={id} id={id + 1}>
                  {category}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
                  Please select a category
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="address1"
              type="text"
              placeholder="1234 Main St"
              onChange={this.handleBusinessLocationChange}
              required
            />
            <Form.Control.Feedback type="invalid">
                  Please provide your address
              </Form.Control.Feedback>
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
                required
              />
              <Form.Control.Feedback type="invalid">
                  Please select your City
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                name="region"
                as="select"
                defaultValue="Choose..."
                onChange={this.handleBusinessLocationChange}
                required
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
              <Form.Control.Feedback type="invalid">
                  Please select your State
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                name=" zipcode"
                placeholder="Zip Code"
                type="text"
                onChange={this.handleBusinessLocationChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                  Please enter your zipcode
              </Form.Control.Feedback>
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
                      required
                      format="HH:mm"
                      onChange={(time) =>
                        this.handleBusinessTimingChange(0, "start_time", time)
                      }
                    />
                  </td>
                  <td>
                    <TimePicker
                      required
                      format="HH:mm"
                      onChange={(time) =>
                        this.handleBusinessTimingChange(0, "end_time", time)
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>
                    <TimePicker
                      required
                      format="HH:mm"
                      onChange={(time) =>
                        this.handleBusinessTimingChange(1, "start_time", time)
                      }
                    />
                  </td>
                  <td>
                    <TimePicker
                      required
                      format="HH:mm"
                      onChange={(time) =>
                        this.handleBusinessTimingChange(1, "end_time", time)
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>
                    <TimePicker
                      required
                      format="HH:mm"
                      onChange={(time) =>
                        this.handleBusinessTimingChange(2, "start_time", time)
                      }
                    />
                  </td>
                  <td>
                    <TimePicker
                      required
                      format="HH:mm"
                      onChange={(time) =>
                        this.handleBusinessTimingChange(2, "end_time", time)
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Thusrday</td>
                  <td>
                    <TimePicker
                      required
                      format="HH:mm"
                      onChange={(time) =>
                        this.handleBusinessTimingChange(3, "start_time", time)
                      }
                    />
                  </td>
                  <td>
                    <TimePicker
                      required
                      format="HH:mm"
                      onChange={(time) =>
                        this.handleBusinessTimingChange(3, "end_time", time)
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>
                    <TimePicker
                      required
                      format="HH:mm"
                      onChange={(time) =>
                        this.handleBusinessTimingChange(4, "start_time", time)
                      }
                    />
                  </td>
                  <td>
                    <TimePicker
                      required
                      format="HH:mm"
                      onChange={(time) =>
                        this.handleBusinessTimingChange(4, "end_time", time)
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>
                    <TimePicker
                      required
                      format="HH:mm"
                      onChange={(time) =>
                        this.handleBusinessTimingChange(5, "start_time", time)
                      }
                    />
                  </td>
                  <td>
                    <TimePicker
                      required
                      format="HH:mm"
                      onChange={(time) =>
                        this.handleBusinessTimingChange(5, "end_time", time)
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>
                    <TimePicker
                      required
                      format="HH:mm"
                      onChange={(time) =>
                        this.handleBusinessTimingChange(6, "start_time", time)
                      }
                    />
                  </td>
                  <td>
                    <TimePicker
                      required
                      format="HH:mm"
                      onChange={(time) =>
                        this.handleBusinessTimingChange(6, "end_time", time)
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
            <Form.Control.Feedback type="invalid">
                  Please select your day-to-day timings
              </Form.Control.Feedback>
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
