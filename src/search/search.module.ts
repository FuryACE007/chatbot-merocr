import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Education } from 'src/entities/education.entity';
import { MercorUserSkill } from 'src/entities/mercor-user-skill.entity';
import { MercorUsers } from 'src/entities/mercor-users.entity';
import { PersonalInformation } from 'src/entities/personal-information.entity';
import { Skill } from 'src/entities/skill.entity';
import { UserResume } from 'src/entities/user-resume.entity';
import { WorkExperience } from 'src/entities/work-experience.entity';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import ormconfig from 'ormconfig';
import typeOrmConfig from 'ormconfig';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MercorUsers,
      MercorUserSkill,
      Education,
      PersonalInformation,
      Skill,
      UserResume,
      WorkExperience,
    ]),
  ],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}
