import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deal } from './deal.entity';

const mockDeals: Omit<Deal, 'id'>[] = [
  {
    title: 'The Marina Torch',
    price: 6500000,
    ticketPrice: 60000,
    yieldPercentage: 9.25,
    daysLeft: 150,
    soldPercentage: 75,
    imageUrl:
      'https://university.help.edu.my/wp-content/uploads/2023/12/HU-Prog-Biz-International2jpg.jpg',
  },
  {
    title: 'HHHR Tower',
    price: 6500000,
    ticketPrice: 60000,
    yieldPercentage: 9.25,
    daysLeft: 150,
    soldPercentage: 75,
    imageUrl:
      'https://s3.eu-west-2.amazonaws.com/cdn.investorconferences.com/wp-content/uploads/sites/3/2020/05/NY.png',
  },
  {
    title: 'Ocean peaks',
    price: 6500000,
    ticketPrice: 60000,
    yieldPercentage: 9.25,
    daysLeft: 150,
    soldPercentage: 75,
    imageUrl:
      'https://images.unsplash.com/photo-1590587322587-d62a5f54dd5f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw',
  },
  {
    title: 'Al Yaqoub Tower',
    price: 6500000,
    ticketPrice: 60000,
    yieldPercentage: 9.25,
    daysLeft: 150,
    soldPercentage: 75,
    imageUrl:
      'https://i.pinimg.com/1200x/95/1b/d9/951bd917d21e336ed4dd3fabcd028fe2.jpg',
  },
];

@Injectable()
export class DealsService implements OnModuleInit {
  constructor(
    @InjectRepository(Deal)
    private dealsRepository: Repository<Deal>,
  ) {}

  async onModuleInit() {
    const count = await this.dealsRepository.count();
    if (count === 0) {
      console.log('Seeding initial deals...');
      await this.dealsRepository.save(mockDeals);
    }
  }

  async findAll(): Promise<Deal[]> {
    return this.dealsRepository.find();
  }
}
