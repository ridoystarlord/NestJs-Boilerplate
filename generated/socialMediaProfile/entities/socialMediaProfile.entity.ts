import { User } from '../../user/entities/user.entity';

export class SocialMediaProfile {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  facebook: string | null;
  twitter: string | null;
  linkedIn: string | null;
  github: string | null;
  website: string | null;
  User?: User;
  userId: string;
}
