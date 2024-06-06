import { USER_TYPES } from '@prisma/client';

import { Company } from '../../company/entities/company.entity';
import { Employee } from '../../employee/entities/employee.entity';
import { SocialMediaProfile } from '../../socialMediaProfile/entities/socialMediaProfile.entity';

export class User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  name: string | null;
  designation: string | null;
  mobileNumber: string | null;
  type: USER_TYPES;
  Company?: Company | null;
  Employee?: Employee | null;
  SocialMediaProfile?: SocialMediaProfile | null;
}
