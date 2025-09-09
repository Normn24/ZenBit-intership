import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('deals')
export class Deal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('bigint')
  price: number;

  @Column()
  ticketPrice: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  yieldPercentage: number;

  @Column()
  daysLeft: number;

  @Column()
  soldPercentage: number;

  @Column()
  imageUrl: string;
}
