import Connection from "../db/connection.js";

export default class DefaultController {
  static async base(req, res) {
    res.status(200).json({ message: "Successfully connected to the API!" });
  }

  static async db(req, res) {
    try {
      await Connection.open(true);
      await Connection.close(true);
      res.status(200).json({ message: "Successfully connected to the DB through the API!" });
    } catch (e) {
      console.log(e);
      new ErrorDatabaseConnection().throwHttp(req, res);
    }
  }
}
