import client from "./client";
import gql from "graphql-tag";

export default  class UserService{
  async getUser(email){
   const response= await  client.query({
      variables: { email: email },
      query: gql`
      query RollDice($email:String!) {
          getUser(user_email: $email){
              user_email
              first_name
              last_name
              contact_no
              type
              id
            }
        }
      `
    });
  return response.data.getUser;
}
}
