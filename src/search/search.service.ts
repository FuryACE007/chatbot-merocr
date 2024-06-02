import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { MercorUsers } from '../entities/mercor-users.entity';
import { Skill } from '../entities/skill.entity';
import { MercorUserSkill } from '../entities/mercor-user-skill.entity';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(MercorUsers)
    private readonly mercorUserRepository: Repository<MercorUsers>,
    @InjectRepository(Skill)
    private readonly skillRepository: Repository<Skill>,
    @InjectRepository(MercorUserSkill)
    private readonly mercorUserSkillRepository: Repository<MercorUserSkill>,
  ) {}

  async searchCandidates(
    skills: string[],
    fullTime: boolean,
    partTime: boolean,
    budget: number,
  ): Promise<MercorUsers[]> {
    const skillIds = await this.getSkillIds(skills);

    const query = this.mercorUserRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.skills', 'userSkills')
      .leftJoinAndSelect('userSkills.skill', 'skill')
      .where('userSkills.skillId IN (:...skillIds)', { skillIds })
      .andWhere((qb) => {
        const subQuery = qb
          .subQuery()
          .select('COUNT(DISTINCT userSkills.skillId)')
          .from(MercorUserSkill, 'subUserSkills')
          .where('subUserSkills.userId = user.userId')
          .andWhere('subUserSkills.skillId IN (:...skillIds)')
          .getQuery();

        return `(${subQuery}) = :skillCount`;
      })
      .setParameter('skillCount', skills.length);

    if (fullTime) {
      query.andWhere('user.fullTime = :fullTime', { fullTime: true });
    }

    if (partTime) {
      query.andWhere('user.partTime = :partTime', { partTime: true });
    }

    if (budget) {
      query
        .andWhere(
          '(user.fullTime = :fullTime AND user.fullTimeSalary <= :budget)',
          { fullTime: true, budget },
        )
        .orWhere(
          '(user.partTime = :partTime AND user.partTimeSalary <= :budget)',
          { partTime: true, budget },
        );
    }

    return query.getMany();
  }

  private async getSkillIds(skills: string[]): Promise<string[]> {
    const skillEntities = await this.skillRepository.find({
      where: {
        skillValue: In(skills),
      },
    });
    return skillEntities.map((skill) => skill.skillId);
  }
}
