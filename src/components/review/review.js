import React from 'react';
import { connect } from 'react-redux';
import { Card,Col,Row, Button, Container } from 'react-bootstrap';
import { getReviews } from "../../actions";
// import './review.css';

const mapStateToProps = state => {
    return {
        reviewsList: state.reviewReducer.reviewsList
    }
};

const mapDispatchToProps = dispatch => ({
    getReviews: () => dispatch(getReviews())
});

class Review extends React.Component {
    render() {
        return (
            <Card fluid className="cardstyle">
                    <Card.Title>{this.props.fName} {this.props.lName} ({this.props.rating})</Card.Title>
                    <Card.Text>{this.props.comment}</Card.Text>
            </Card>
        )
    }
}
class Reviews extends React.Component {
    constructor(props) {
        super(props);
        // this.getReviews = business_id => this.props.dispatch(getReviews(business_id));
        this.props.getReviews('');
        console.log('reviews list ' + this.props.reviewsList);
    }
    render() {
        return (
            <div fluid>
                <Col sm={6} >
                <br/>
                <Button>Add Review</Button>
                <br/><br/>
                {this.props.reviewsList.map((review) => (
                    <div key={review.id}>
                        <Review fName={review.first_name} lName={review.last_name} comment={review.review_comment} rating={review.rating} />
                    </div>
                ))}
                </Col>
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);