import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  async searchCandidates(
    @Query('skills') skills: string,
    @Query('fullTime') fullTime: boolean,
    @Query('partTime') partTime: boolean,
    @Query('budget') budget: number,
  ) {
    const skillsArray = skills ? skills.split(',') : [];
    return this.searchService.searchCandidates(
      skillsArray,
      fullTime,
      partTime,
      budget,
    );
  }
}
