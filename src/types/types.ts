export interface AuthDto {
  email: string;
  password: string;
}

export interface Deal {
  id: string;
  title: string;
  price: number;
  ticketPrice: number;
  yieldPercentage: number;
  daysLeft: number;
  soldPercentage: number;
  imageUrl: string;
}
