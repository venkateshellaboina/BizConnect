import client from "./client";
import gql from "graphql-tag";

export default  class UserService{
  async getUser(emails){
   const response= await  client.query({
      variables: { email:"negi@gmail.com" },
      query: gql`
      query RollDice($email:String!) {
          getUser(user_email: $email){
              user_email
              first_name
              last_name
              contact_no
              type
            }
        }
      `
    });
  return response.data.getUser;
}
}
