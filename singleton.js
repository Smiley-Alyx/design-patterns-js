class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance
    }
    Database.instance = this
    Database.exists = true
    this.data = data
  }

  getData() {
    return this.data
  }
  //etc..................
}

const mongo = new Database('MongoDB')
console.log(mongo.getData())

const mysql = new Database('MySQL')
console.log(mysql.getData())

const psql = new Database('PostgreSQL')
console.log(psql.getData())
