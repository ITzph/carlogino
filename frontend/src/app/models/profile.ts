export class Profile {
  name: string;
  image: string;
  address: string;
  currentCompany: string;
  currentRole: string;
  testimonial: string;
  greetings: string[];

  static defaultInstance(): Profile {
    return {
      name: '',
      image: '',
      address: '',
      currentCompany: '',
      currentRole: '',
      testimonial: '',
      greetings: [],
    };
  }
}
