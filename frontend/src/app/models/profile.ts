export class Profile {
  public name: string;
  public alias: string;
  public age: number;

  static defaultInstance(): Profile {
    return {
      name: '',
      alias: '',
      age: 0,
    };
  }
}
