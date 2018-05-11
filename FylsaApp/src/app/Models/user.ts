export class User {
  constructor(
    public _id: string,
    public NAME: string,
    public LASTNAME: string,
    public PASSWORD: string,
    public ADMIN_ID: number,
    public __v: number,
  ){}
}