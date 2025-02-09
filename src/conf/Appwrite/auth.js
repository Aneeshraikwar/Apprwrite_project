import { Client, Account, ID } from "appwrite";
import config from "../config";
export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.VITE_APWRITE_URL)
      .setProject(config.VITE_APWRITE_PROJECT_ID);
    this.account = new Account(this.client);
  }
  async createAcount({ email, username, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        username
      );
      if (userAccount) {
        //call another method
        this.loginUser(email, password);
      }
    } catch (err) {
      throw new Error(err);
    }
  }
  async loginUser({ email, password }) {
    try {
      const user = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return user;
    } catch (error) {
      throw new Error(error)
    }
  }
  async getCurrentUser(){
    try {
         return await this.account.get()
    } catch (error) {
        return error
    }
  }
  async logOutUser(){
    try {
       return await this.account.deleteSession()
    } catch (err) {
        return err
        
    }  

  }
}
const authojbect = new AuthService();
export default authojbect;
