import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1603308953291 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'orphanages',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true, // Sempre vai ser um número positivo
            isPrimary: true, // Primary key in my table
            isGenerated: true, // This column is automatically generated
            generationStrategy: 'increment' // auto increment
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'latitude',
            type: 'decimal',
            scale: 10,
            precision: 2
          },
          {
            name: 'longitude',
            type: 'decimal',
            scale: 10,
            precision: 2
          },
          {
            name: 'about',
            type: 'text',
          },
          {
            name: 'instructions',
            type: 'text',
          },
          {
            name: 'open_on_weekends',
            type: 'boolean',
            default: false
          },
          {
            name: 'opening_hours',
            type: 'varchar'
          },
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('orphanages')
    }

}
