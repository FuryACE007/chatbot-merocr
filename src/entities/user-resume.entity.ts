import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { PersonalInformation } from './personal-information.entity';
import { WorkExperience } from './work-experience.entity';
import { Education } from './education.entity';

@Entity('UserResume')
export class UserResume {
  @PrimaryColumn()
  resumeId: string;

  @Column({ nullable: true })
  url: string;

  @Column()
  filename: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({ default: 'platform' })
  source: string;

  @Column({ type: 'text', nullable: true })
  ocrText: string;

  @Column({ nullable: true })
  ocrEmail: string;

  @Column({ nullable: true })
  ocrGithubUsername: string;

  @Column({ type: 'text', nullable: true })
  resumeBasedQuestions: string;

  @Column({ nullable: true, unique: true })
  userId: string;

  @Column({ default: false })
  isInvitedToInterview: boolean;

  @Column({ type: 'json', nullable: true })
  reminderTasksIds: any;

  @OneToOne(
    () => PersonalInformation,
    (personalInformation) => personalInformation.resume,
  )
  @JoinColumn()
  personalInformation: PersonalInformation;

  @OneToMany(
    () => WorkExperience,
    (workExperience) => workExperience.userResume,
  )
  workExperiences: WorkExperience[];

  @OneToMany(() => Education, (education) => education.userResume)
  educations: Education[];
}
