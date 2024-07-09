import { Request } from './request';

export interface IRequests {
  id?: number;
  title?: string;
  status?: string;
  description?: string;
  submittedAt?: string;
  decisionDate?: string;
  reviewDate?: string;
  studentId?: number;
  student?: null;
  employeeId?: number;
  employee?: null;
  paymentId?: number;
  payment?: null;
  documents?: string;
}
