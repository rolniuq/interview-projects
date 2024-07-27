import { Migration } from '@mikro-orm/migrations';

export class CreateUserEntityTable extends Migration {
  async up(): Promise<void> {
    await this.execute(`
      CREATE TABLE IF NOT EXISTS "user_entity" (
        "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        "username" VARCHAR(255) NOT NULL,
        "email" VARCHAR(255) NOT NULL,
        "password" VARCHAR(255) NOT NULL,
        "is_active" BOOLEAN DEFAULT TRUE NOT NULL
      );
    `);
  }
  async down(): Promise<void> {
    await this.execute('DROP TABLE "user_entity";');
  }
}
