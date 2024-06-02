import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('Skills')
export class Skill {
  @PrimaryColumn()
  skillId: string;

  @Column()
  skillName: string;

  @Column({ unique: true })
  skillValue: string;
}
