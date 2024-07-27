import { defaultDbConfig } from '@constants';
import { TaskEntity, UserEntity } from '@entities';
import { Options } from '@mikro-orm/core';
import { Migrator } from '@mikro-orm/migrations';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

const config: Options<PostgreSqlDriver> = {
  driver: PostgreSqlDriver,
  entities: [UserEntity, TaskEntity],
  entitiesTs: [UserEntity, TaskEntity],
  ...defaultDbConfig,
  extensions: [Migrator],
};

export default config;
