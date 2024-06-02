import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MercorUsers } from './entities/mercor-users.entity';
import { MercorUserSkill } from './entities/mercor-user-skill.entity';
import { Education } from './entities/education.entity';
import { PersonalInformation } from './entities/personal-information.entity';
import { Skill } from './entities/skill.entity';
import { UserResume } from './entities/user-resume.entity';
import { WorkExperience } from './entities/work-experience.entity';
import { DatabaseModule } from './database/database.module';
import { SearchService } from './search/search.service';
import { SearchController } from './search/search.controller';
import { SearchModule } from './search/search.module';
import typeOrmConfig from 'ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([
      MercorUsers,
      MercorUserSkill,
      Education,
      PersonalInformation,
      Skill,
      UserResume,
      WorkExperience,
    ]),
    DatabaseModule,
    SearchModule,
  ],
  controllers: [AppController, SearchController],
  providers: [AppService, SearchService],
})
export class AppModule {}
