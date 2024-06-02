import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { MercorUsers } from './mercor-users.entity';
import { Skill } from './skill.entity';

@Entity('MercorUserSkills')
export class MercorUserSkill {
  @PrimaryColumn()
  userId: string;

  @PrimaryColumn()
  skillId: string;

  @Column({ default: false })
  isPrimary: boolean;

  @Column({ default: 0 })
  order: number;

  @ManyToOne(() => MercorUsers, (user) => user.skills)
  user: MercorUsers;

  @ManyToOne(() => Skill)
  skill: Skill;
}
