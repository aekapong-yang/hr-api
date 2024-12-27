import { TypeOrmModule } from "@nestjs/typeorm";
import * as dotenv from "dotenv";

dotenv.config();

const DBConfig = TypeOrmModule.forRoot({
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [__dirname + "/../../**/*.entity{.ts,.js}"],
});

export default DBConfig;
