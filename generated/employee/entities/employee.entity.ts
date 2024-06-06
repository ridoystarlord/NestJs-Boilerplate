import { User } from '../../user/entities/user.entity';

export class Employee {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  User?: User;
  userId: string;
}
