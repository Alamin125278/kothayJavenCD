import { DataSource } from "typeorm";
import { UserType } from "../models/user/user-type.entity";
import { UserTypeMapper } from "../models/user/user-type-mapper.entity";
import { Users } from "../models/user/users.entity";
import { UserPersonalInfo } from "../models/user/user-personal-info.entity";
import { UserAddress } from "../models/user/user-address.entity";
import { AddressType } from "../models/user/address-type.entity";
import { UserVehicleInfo } from "../models/user/user-vehicle-info.entity";
import { UserDriverInfo } from "../models/user/user-driver-info.entity";
import { UserSellerInfo } from "../models/user/user-seller-info.entity";
import { UserNidInfo } from "../models/user/user-nid-info.entity";
import { Gender } from "../models/master/gender.entity";
import { Religion } from "../models/master/religion.entity";
import { Country } from "../models/master/country.entity";
import { Division } from "../models/master/division.entity";
import { District } from "../models/master/district.entity";
import { VehicleType } from "../models/master/vehicle-type.entity";

const dbContext = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "kothayjabencd",
  entities: [
    Users,
    UserPersonalInfo,
    UserAddress,
    AddressType,
    UserVehicleInfo,
    UserDriverInfo,
    UserSellerInfo,
    UserTypeMapper,
    UserType,
    UserNidInfo,
    Gender,
    Religion,
    Country,
    Division,
    District,
    VehicleType,
  ],
  synchronize: true,
});

export default dbContext;
