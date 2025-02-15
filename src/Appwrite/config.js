import { Client, ID, Databases, Query, Storage, Account } from "appwrite";
import config from "../conf/config";
export class Service {
  client = new Client();
  databases;
  bucket; //storage

  constructor() {
    this.client.setEndpoint(config.VITE_APWRITE_URL),
      this.client.setProject(config.VITE_APWRITE_PROJECT_ID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, content, slug, featuredImag, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.VITE_APWRITE_DATABASE_ID,
        config.VITE_APWRITE_COLLECTION_ID,
        slug,
        { title, content, status, userId, featuredImag }
      );
    } catch (error) {
      return error;
    }
  }
  async updatePost(
    newSlug,
    { newTitle, newContent, newfeaturedImag, newStatus, newUserId }
  ) {
    try {
      return await this.databases.updateDocument(
        config.VITE_APWRITE_DATABASE_ID,
        config.VITE_APWRITE_COLLECTION_ID,
        newSlug,
        { newTitle, newContent, newStatus, newUserId, newfeaturedImag }
      );
    } catch (error) {
      return error;
    }
  }
  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        config.VITE_APWRITE_DATABASE_ID,
        config.VITE_APWRITE_COLLECTION_ID,
        slug
      );
    } catch (error) {
      return error;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.VITE_APWRITE_DATABASE_ID,
        config.VITE_APWRITE_COLLECTION_ID,
        slug,
        []
      );
    } catch (error) {
      return error;
    }
  }
  async getPosts(query = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.VITE_APWRITE_DATABASE_ID,
        config.VITE_APWRITE_COLLECTION_ID,
        [query]
      );
    } catch (error) {
      return error;
    }
  }
  
}

const service = new Service();

export default service;
