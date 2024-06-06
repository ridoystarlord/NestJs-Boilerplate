import { User } from '../../user/entities/user.entity';

export class Company {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  User?: User;
  userId: string;
}
