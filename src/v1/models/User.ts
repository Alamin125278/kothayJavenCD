import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  firstName: string = "";

  @Column()
  lastName: string = "";

  @Column()
  isActive: boolean = false;
}
