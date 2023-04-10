/**
 * All shared interfaces live here
 */

import { UserData } from 'bookem-shared/src/types/database';
import { useForm } from 'react-hook-form/dist/useForm';

export interface RatioProp {
  ratio: number;
}

/**
 * Functions used in each register page
 */
export interface RegisterFormFunctions {
  handleForm: ReturnType<typeof useForm>;
  onSubmit: (data: UserData) => void;
  handleEnter: React.KeyboardEventHandler<HTMLInputElement>;
  printError: (message: string) => JSX.Element;
  handleLeftArrow: (data: any) => void;
  handleRightArrow: () => void;
}

/**
 * Format of the form data recorded in register pages
 */
export interface RegisterFormData {
  page: number;
  firstName: string;
  lastName: string;
  birthday: string;
  phone: string;
  email: string;
  password: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  emergencyFirstName: string;
  emergencyLastName: string;
  emergencyPhone: string;
  emergencyRelationship: string;
  members: string[];
  volunteerReason: string;
  occupation: string;
  occupationTitle: string;
  occupationOrg: string;
  joinNewsletter: string;
  sourceHeardFrom: string;
  gender: string;
  otherGender: string;
  race: string;
  otherRace: string;
}

/**
 * Sidebar Icon Param container.
 * Used to create icons through iteration
 * @defaultSrc src of the icon when not selected or hovered
 * @hoveredsrc src of the icon when selected or hovered
 * @linkTo where the link of icon directs to
 */
export interface SidebarIconParams {
  desktopDefaultSrc: string;
  mobileDefaultSrc: string;
  desktopHoveredSrc: string;
  mobileHoveredSrc: string;
  linkTo: string;
  text: string;
}
