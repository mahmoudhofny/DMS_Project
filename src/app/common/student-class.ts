export class StudentClass {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public gpa: number,
    public studentDepartment: string,
    public totalPassedHours: number,
    public level: number,
    public studentDocuments: string[]
  ) {}
}
export class StudentNotiClass {
  constructor(
    public userFirstName: string,
    public userLastName: string,
    public message: string,
    public createdAt: string
  ) {}
}
export class doctorNotiClass {
  constructor(
    public userFirstName: string,
    public userLastName: string,
    public message: string,
    public createdAt: string
  ) {}
}
