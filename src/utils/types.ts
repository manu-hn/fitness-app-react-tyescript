
export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',

}

export interface BenefitsType {
  id: number,
  icon: JSX.Element; // Assuming HomeModernIcon is a JSX element
  title: string;
  description: string;
}
