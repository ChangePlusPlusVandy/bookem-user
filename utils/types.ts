/**
 * All shared interfaces live here
 */

import { UserData } from 'bookem-shared/src/types/database';
import { useForm } from 'react-hook-form/dist/useForm';

export interface EventType {
  source: string;
  name: string;
  location: string;
  date: Date;
  time: string;
  availability: number;
  id: number;
}

export interface RatioProp {
  ratio: number;
}

export interface RegisterFormFunctions {
  handleForm: ReturnType<typeof useForm>;
  onSubmit: (data: UserData) => void;
  handleEnter: React.KeyboardEventHandler<HTMLInputElement>;
  printError: (message: string) => JSX.Element;
  handleLeftArrow: (data: any) => void;
  handleRightArrow: () => void;
}

/**
 * Icon Param container.
 * Used to create icons through iteration
 * @defaultSrc src of the icon when not selected or hovered
 * @hoveredsrc src of the icon when selected or hovered
 * @linkTo where the link of icon directs to
 */
export interface IconParams {
  defaultSrc: string;
  hoveredsrc: string;
  linkTo: string;
}