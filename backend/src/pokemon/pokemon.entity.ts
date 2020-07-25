import { Entity, PrimaryGeneratedColumn, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class Pokemon {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ length: 100 })
  name: string;

  @Column()
  pokedexEntry: number;

  @Column({ length: 50, nullable: false })
  type1: string;

  @Column({ length: 50, nullable: true })
  type2: string;
}
