import React from 'react';
import { connect } from 'react-redux';
import BusinessNav from '../business-nav/business_nav';
import BusinessHeader from '../business-header/header';
const mapStateToProps = state => {
    return{
       
    }
};
  
const mapDispatchToProps = dispatch => ({
    
});

class Business extends React.Component {
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