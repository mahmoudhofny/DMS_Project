export interface IUserProfile {
  id: number;
  firstName: string;
  lastName: string;
  gpa: number;
  studentDepartment: string;
  totalPassedHours: number;
  level: number;
  studentPicture?: string;
  studentDocuments?: string[];
}
