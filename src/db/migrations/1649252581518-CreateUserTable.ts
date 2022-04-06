import MigrationUtil from '../../util/migrationUtil';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1649252581518 implements MigrationInterface {
  name?: string;

  private static readonly table = new Table({
    name: 'User',
    columns: [
      ...MigrationUtil.getIDColumn(),
      MigrationUtil.getVarCharColumn({ name: 'name' }),
      MigrationUtil.getVarCharColumn({ name: 'email' }),
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(CreateUserTable1649252581518.table);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(CreateUserTable1649252581518.table);
  }
}
