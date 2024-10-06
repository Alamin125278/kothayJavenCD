import { Request } from "express";
import { DataSource } from "typeorm";
export interface IRequest extends Request {
  dataSource: DataSource;
}
