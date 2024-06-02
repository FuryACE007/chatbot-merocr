import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { UserResume } from './user-resume.entity';

@Entity('PersonalInformation')
export class PersonalInformation {
  @PrimaryColumn()
  personalInformationId: string;

  @Column({ nullable: true })
  name: string;

  @Column({ type: 'json', nullable: true })
  location: any;

  @Column({ type: 'json', nullable: true })
  email: any;

  @Column({ type: 'json', nullable: true })
  phone: any;

  @OneToOne(() => UserResume, (resume) => resume.personalInformation)
  @JoinColumn({ name: 'resumeId' })
  resume: UserResume;
}
