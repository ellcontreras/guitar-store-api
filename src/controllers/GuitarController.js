import Controller from "./Controller"
import GuitarService from "../services/GuitarService"
import Guitar from "../models/guitar"

const guitarService = new GuitarService(
  new Guitar()
)

class GuitarController extends Controller {
  constructor(service) {
    super(service)
  }
}

export default new GuitarController(guitarService)

