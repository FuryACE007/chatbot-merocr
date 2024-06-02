import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: "35.224.61.48",
  port: 3306,
  username: "trial_user",
  password: "trial_user_12345#",
  database: "MERCOR_TRIAL_SCHEMA",
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
};

export default typeOrmConfig;
