import { bindable } from 'aurelia-framework';
export abstract class Base {
  abstract name: string;
  @bindable abstract value: number;
}
