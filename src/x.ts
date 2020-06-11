import { Base } from "./base";
import { useView, bindable } from 'aurelia-framework';

@useView('./base.html')
export class X extends Base {
  @bindable value: number;
  name: string = 'X';
}
