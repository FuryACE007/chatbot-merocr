import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserResume } from './user-resume.entity';

@Entity()
export class Education {
  @PrimaryGeneratedColumn()
  educationId: string;

  @Column({ nullable: true })
  degree: string;

  @Column({ nullable: true })
  major: string;

  @Column({ nullable: true })
  school: string;

  @Column({ nullable: true })
  startDate: string;

  @Column({ nullable: true })
  endDate: string;

  @Column({ nullable: true })
  grade: string;

  @ManyToOne(() => UserResume, (userResume) => userResume.educations, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'resumeId' })
  userResume: UserResume;
}
