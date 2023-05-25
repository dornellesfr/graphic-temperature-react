import { MongoClient } from 'mongodb';

class Connection {
  constructor(url) {
    this.url = new MongoClient(url)
  }

  async insertToDb(data) {
    try {
      const database = this.url.db('Temperaturas');
      const temperaturas = database.collection('temperaturas');
  
      const result = await temperaturas.insertOne(data);
  
      return result
    } catch (error) {
      console.log(error);
    } finally {
      await this.url.close()
    }
  }

  async getTempsToDb() {
    try {
      const database = this.url.db('Temperaturas');
      const temperaturas = database.collection('temperaturas');
  
      const result = await temperaturas.find({})
  
      return result
    } catch (error) {
      console.log(error);
    } finally {
      await this.url.close()
    }
  }

}

export default Connection;