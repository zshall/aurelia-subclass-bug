import { Base } from "./base";
import { useView, bindable } from 'aurelia-framework';

@useView('./base.html')
export class Y extends Base {
  @bindable value: number;
  name: string = 'Y';
}
