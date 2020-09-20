import React from 'react';
import { connect } from 'react-redux';
import {Card,Image,Button,Row,Col }from 'react-bootstrap';
import {getServices} from "../../actions";
import './service.css';
class Service extends React.Component{
    render()
    {
        return(
        <div className="Card">
          <Card>
          <Card.Body >
              <Card.Title>{this.props.title} {this.props.type}</Card.Title>
              <Card.Text style={{float: "left",clear: "none"}} >
              <Row>
              <Col sm={2} xs={2}><Image src="nodata.jpg" thumbnail rounded/></Col>
              <Col>&emsp;{this.props.description}</Col>
              </Row>
              </Card.Text>
          </Card.Body>
          </Card>
          </div>
        )
    }
}

export default (Service);