import Sequelize from "sequelize"

class Connection {
  constructor() {
    const url = "postgres://postgres:postgres@localhost:5432/guitar-store"
    const sequelize = new Sequelize(url)
  }
}

export default new Connection()

