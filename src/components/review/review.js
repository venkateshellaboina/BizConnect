import React from 'react';
import { connect } from 'react-redux';
import {Card }from 'react-bootstrap'
const mapStateToProps = state => {
    return {
    }};
  
  const mapDispatchToProps = dispatch => ({

  });
  class Review extends React.Component {
    render()
    {
        return(
            <div>
            <Card>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
            </Card>
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Review);