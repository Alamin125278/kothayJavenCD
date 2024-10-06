import { DataSource } from "typeorm";
import { User } from "../models/User";

const PostgresDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "cd",
  entities: [User],
  synchronize: true,
});

export default PostgresDataSource;
