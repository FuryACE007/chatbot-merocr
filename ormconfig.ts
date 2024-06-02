import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'your_username',
  password: 'your_password',
  database: 'mercor_db',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
});
