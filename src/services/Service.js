import Sequelize from "sequelize" 

class Service {
  constructor(model) {
    this.model = model
    this.getAll = this.getAll.bind(this)
    this.insert = this.insert.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }

  async getAll() {
    try {
      let items = await this.model.findAll();
      let total = await this.model.count();

      return {
        error: false,
        statusCode: 200,
        data: items,
        total
      }
    } catch(error) {
      return {
        error: true,
        statusCode: 500,
        error
      }
    }
  }

  async insert(data) {
    try {
      let item = await this.model.create(data)

      return {
        error: false,
        item
      }
    } catch(error) {
      return {
        error: true,
        statusCode: 500,
        message: error.toString() || "Not able to create item",
        errors: error1
      }
    }
  }

  async update(id, data) {
    try {
      let item = await this.model.update(id, data)

      return {
        error: false,
        statusCode: 202,
        item
      }
    } catch(error) {
      return {
        error: true,
        statusCode: 500,
        errors: error
      }
    }
  }

  async delete(id) {
    try {

    } catch(error) {
      return {
        error: true,
        statusCode: 500,
        errors: error
      }
    }
  }
}

export default Service;

