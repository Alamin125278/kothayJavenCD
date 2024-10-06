import { Request, Response } from "express";
import * as log from "../log-setup/logSetup";

const baseController = (
  service: (req: Request, payload: any) => Promise<any>,
  customMessageAndStatus = (data: any, req: Request): ICustomMessageStatus => {
    let message: string | null = null;
    let status: number = 200;

    switch (req.method.toUpperCase()) {
      case "GET":
        message = "Successfully getting data";
        break;
      case "POST":
        message = "Successfully inserted data";
        status = 201;
        break;
      case "PUT":
        message = "Successfully updated data";
        status = 201;
        break;
      case "DELETE":
        message = "Successfully deleted data";
        status = 204;
        break;
      default:
        message = "Request completed";
    }

    return { message, status };
  }
) => {
  return async (req: Request, res: Response): Promise<Response> => {
    try {
      let payload: any;

      if (req.method.toUpperCase() === "GET") {
        payload = req.query;
      } else {
        payload = req.body;
      }

      log.info("Requested: " + JSON.stringify(payload));
      const data = await service(req, payload);

      if (data) {
        log.response(JSON.stringify(data));
      }

      const { status, message } = customMessageAndStatus(data, req);
      return res.status(status).json({
        status,
        message,
        data,
      });
    } catch (err: any) {
      log.error(err.message || "Unknown error occurred");
      return res.status(500).json({
        message: "Internal server error",
        status: 500,
      });
    }
  };
};

export default baseController;
