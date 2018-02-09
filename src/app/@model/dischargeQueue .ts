export class DischargeQueue  {
  constructor(
      public docId: number,
      public patientName: string,
      public age: number,
      public gender: string,
      public contactNumber: number,
      public status: string,
      ) {}
}