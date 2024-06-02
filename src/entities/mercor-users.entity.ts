import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { MercorUserSkill } from './mercor-user-skill.entity';

@Entity('MercorUsers')
export class MercorUsers {
  @PrimaryColumn()
  userId: string;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column('json')
  residence: any;

  @Column('text')
  profilePic: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  lastLogin: Date;

  @Column('text')
  notes: string;

  @Column({ unique: true, default: () => 'UUID()' })
  referralCode: string;

  @Column({ default: false })
  isGptEnabled: boolean;

  @Column()
  preferredRole: string;

  @Column()
  fullTimeStatus: string;

  @Column()
  workAvailability: string;

  @Column()
  fullTimeSalaryCurrency: string;

  @Column()
  fullTimeSalary: string;

  @Column()
  partTimeSalaryCurrency: string;

  @Column()
  partTimeSalary: string;

  @Column({ default: false })
  fullTime: boolean;

  @Column()
  fullTimeAvailability: number;

  @Column({ default: false })
  partTime: boolean;

  @Column()
  partTimeAvailability: number;

  @Column('json')
  w8BenUrl: any;

  @Column('text')
  tosUrl: string;

  @Column('json')
  policyUrls: any;

  @Column({ default: false })
  isPreVetted: boolean;

  @Column({ default: false })
  isActive: boolean;

  @Column({ default: false })
  isComplete: boolean;

  @Column('text')
  summary: string;

  @OneToMany(() => MercorUserSkill, (skill) => skill.user)
  skills: MercorUserSkill[];

  @CreateDateColumn()
  preVettedAt: Date;
}
