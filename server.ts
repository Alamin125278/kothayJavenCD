import express, { Express } from "express";
import routerV1 from "./src/v1/routes/router";
import expressListRoutes from "express-list-routes";
import PostgresDataSource from "./src/v1/config/dataSource";
import "reflect-metadata";

const app: Express = express();
app.use(express.json());

// app.use((req: any, _) => {
//   req.dataSource = PostgresDataSource;
// });
app.use("/api/v1/", routerV1);

expressListRoutes(routerV1, { prefix: "/api/v1" });

app.listen(3000, () => {
  PostgresDataSource.initialize().then(() => {
    console.log("Database successfully connected");
  });
  console.log("Server is running on http://localhost:3000");
});
