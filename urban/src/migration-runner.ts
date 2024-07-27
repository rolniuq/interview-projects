import {
  CreateExtension,
  CreateTaskEntityTable,
  CreateUserEntityTable,
} from '@migrations';
import { MikroORM } from '@mikro-orm/core';
import mikroOrmConfig from '../mikro-orm.config';

export async function runMigrations() {
  const orm = await MikroORM.init(mikroOrmConfig);

  const migrations = [
    new CreateExtension(orm.em.getDriver(), orm.config),
    new CreateUserEntityTable(orm.em.getDriver(), orm.config),
    new CreateTaskEntityTable(orm.em.getDriver(), orm.config),
  ];

  for (const m of migrations) {
    await m.up();
  }

  await orm.close(true);
}
