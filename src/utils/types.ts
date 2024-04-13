
export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'our-classes',
  ContactUs = 'contact-us',

}

export interface BenefitsType {
  id: number,
  icon: JSX.Element; // Assuming HomeModernIcon is a JSX element
  title: string;
  description: string;
}


export interface TrainingType {
  name: string,
  description: string,
  image: string,

}