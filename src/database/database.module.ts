import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from 'ormconfig';
import ormconfig from 'ormconfig';
import { Education } from 'src/entities/education.entity';
import { MercorUserSkill } from 'src/entities/mercor-user-skill.entity';
import { MercorUsers } from 'src/entities/mercor-users.entity';
import { PersonalInformation } from 'src/entities/personal-information.entity';
import { Skill } from 'src/entities/skill.entity';
import { UserResume } from 'src/entities/user-resume.entity';
import { WorkExperience } from 'src/entities/work-experience.entity';

@Module({
  imports: [
    // TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([
      MercorUsers,
      Skill,
      MercorUserSkill,
      WorkExperience,
      Education,
      UserResume,
      PersonalInformation,
    ]),
  ],
})
export class DatabaseModule {}
