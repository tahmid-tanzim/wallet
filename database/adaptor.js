import Sequelize from 'sequelize';
import config from 'config';

const dbConfig = config.get('service.dbConfig');

let sequelize;
if (dbConfig.use_env_variable) {
  sequelize = new Sequelize(process.env[dbConfig.use_env_variable], dbConfig);
} else {
  sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);
}

export default sequelize;
