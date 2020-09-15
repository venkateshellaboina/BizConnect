import client from "./client";
import gql from "graphql-tag";

export default  class AppService{
  getUser(){
    console.log("i am called");
    console.log(client.query({
      query: gql`
        {
          getUser(user_email: "negi@gmail.com"){
            user_email
            first_name
            last_name
            contact_no
            type
          }
        }
      `
    }).then(
        response =>{
            console.log(response.data.feed)
        }
         ));
  
  }
}
