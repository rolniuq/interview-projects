import { Migration } from '@mikro-orm/migrations';

export class CreateExtension extends Migration {
  async up(): Promise<void> {
    await this.execute(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
  }

  async down(): Promise<void> {}
}
