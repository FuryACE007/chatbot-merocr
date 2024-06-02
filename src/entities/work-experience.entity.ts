import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserResume } from './user-resume.entity';

@Entity()
export class WorkExperience {
    @PrimaryGeneratedColumn('uuid')
    workExperienceId: string;

    @Column({ length: 255, nullable: true })
    company: string;

    @Column({ length: 255, nullable: true })
    role: string;

    @Column({ length: 255, nullable: true })
    startDate: string;

    @Column({ length: 255, nullable: true })
    endDate: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ length: 255, nullable: true })
    locationCity: string;

    @Column({ length: 255, nullable: true })
    locationCountry: string;

    @ManyToOne(() => UserResume, (userResume) => userResume.workExperiences, { onDelete: 'CASCADE' })
    userResume: UserResume;
}