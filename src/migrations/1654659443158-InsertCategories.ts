import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertCategories1654659443158 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO category (name, description, icon_type, color) VALUES ('prestamos', 'prestamos', 'LEADING', '#ca78ff');
        `);
    await queryRunner.query(`
        INSERT INTO category (name, description, icon_type, color) VALUES ('salud', 'salud', 'HEALTH', '#74c8ff');
    `);
    await queryRunner.query(`
            INSERT INTO category (name, description, icon_type, color) VALUES ('familia', 'familia', 'FAMILY', '#c0c03e');
        `);
    await queryRunner.query(`
            INSERT INTO category (name, description, icon_type, color) VALUES ('casa', 'casa', 'HOME', '#005189');
        `);
    await queryRunner.query(`
            INSERT INTO category (name, description, icon_type, color) VALUES ('otros', 'otros', 'OTHERS', '#ff7878');
        `);
    await queryRunner.query(`
            INSERT INTO category (name, description, icon_type, color) VALUES ('trabajo', 'trabajo', 'WORK', '#8181ff');
        `);
    await queryRunner.query(`
            INSERT INTO category (name, description, icon_type, color) VALUES ('educación', 'educación', 'EDUCATION', '#008957');
        `);
    await queryRunner.query(`
            INSERT INTO category (name, description, icon_type, color) VALUES ('café', 'café', 'COFFEE', '#c0633e');
        `);
    await queryRunner.query(`
            INSERT INTO category (name, description, icon_type, color) VALUES ('alimentación', 'alimentación', 'FOOD', '#78ff78');
        `);
    await queryRunner.query(`
            INSERT INTO category (name, description, icon_type, color) VALUES ('regalo', 'regalo', 'GIFS', '#ff78c2');
        `);
    await queryRunner.query(`
            INSERT INTO category (name, description, icon_type, color) VALUES ('rutina', 'rutina', 'ROUTINE', '#78ffac');
        `);
    await queryRunner.query(`
            INSERT INTO category (name, description, icon_type, color) VALUES ('transporte', 'transporte', 'TRANSPORT', '#81ffff');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return;
  }
}
