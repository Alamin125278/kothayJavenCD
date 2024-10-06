import { Router, Request, Response } from "express";
import { User } from "../models/User";
import PostgresDataSource from "../config/dataSource";

const routerV1 = Router();
routerV1.get("/products", async (req: Request, res: Response) => {
  try {
    // console.log("got the request...processing.....");
    // const user = new User();
    // user.firstName = "Maruf";
    // user.lastName = "Hossain";
    // user.isActive = true;

    // await PostgresDataSource.manager.save(user);
    const userRepo = PostgresDataSource.getRepository(User);
    const data = await userRepo.find();
    res.json({
      data,
    });
  } catch (err: any) {
    console.log(err);
  }
});
routerV1.post("/products", (req: Request, res: Response) => {
  res.json({
    message: "POST routes",
  });
});

export default routerV1;
