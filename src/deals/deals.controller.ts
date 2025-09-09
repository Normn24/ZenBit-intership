import { Controller, Get } from '@nestjs/common';
import { DealsService } from './deals.service';
import { Deal } from './deal.entity';

@Controller('deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Get()
  findAll(): Promise<Deal[]> {
    return this.dealsService.findAll();
  }
}
