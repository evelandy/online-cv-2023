export default interface IPage {
  name: string;
  globalTheme: string;
}

export default interface IContact {
  Name: string;
  Company: string;
  Email: string;
  Message: string;
  Job_desc: string | Blob;
}
