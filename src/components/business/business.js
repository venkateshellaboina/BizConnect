import React from 'react';
import { connect } from 'react-redux';
import BusinessNav from '../business-nav/business_nav';
import BusinessHeader from '../business-header/header';
import {getBusiness} from '../../actions';
const mapStateToProps = state => {
    return{
        selectedBusinessId:state.customerReducer.selectedBusinessId
    }
};
  
const mapDispatchToProps = dispatch => ({
    getBusiness: (id) => dispatch(getBusiness(id)),
});

class Business extends React.Component {
    constructor(props) {
        super(props);
        this.props.getBusiness(this.props.selectedBusinessId);
    }
    render(){
        return(
           <div >
          
           <BusinessHeader/>
           
           <BusinessNav/>
        
           
           </div>
           
        )
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Business);