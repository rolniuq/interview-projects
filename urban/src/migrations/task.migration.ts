import { Migration } from '@mikro-orm/migrations';

export class CreateTaskEntityTable extends Migration {
  async up(): Promise<void> {
    await this.execute(`
      CREATE TABLE IF NOT EXISTS "task_entity"  (
        "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        "title" VARCHAR(255) NOT NULL,
        "description" VARCHAR(255),
        "status" VARCHAR(255) DEFAULT 'TaskStatus_UnComplete' NOT NULL,
        "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
        "deadline" TIMESTAMP NOT NULL,
        "user_id" UUID NOT NULL,
        CONSTRAINT "fk_user" FOREIGN KEY ("user_id") REFERENCES "user_entity" ("id") ON DELETE CASCADE
      );
    `);
  }
  async down(): Promise<void> {
    await this.execute('DROP TABLE "task_entity";');
  }
}
