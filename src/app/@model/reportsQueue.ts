export class ReportsQueue  {
  constructor(
      public docId: number,
      public testType: string,
      public patientName: string,
      public age: number,
      public gender: string,
      public contactNumber: number,
      public resultStatus: string,
      public resultSignOff: string,
 ) {}
}