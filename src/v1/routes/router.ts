import { Router, Request, Response } from "express";

const routerV1 = Router();
routerV1.get("/products", async (req: Request, res: Response) => {
  try {
    // console.log("got the request...processing.....");
    // const user = new User();
    // user.firstName = "Maruf";
    // user.lastName = "Hossain";
    // user.isActive = true;

    // await PostgresDataSource.manager.save(user);
    //const userRepo = PostgresDataSource.getRepository(User);
    res.send("products");
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
