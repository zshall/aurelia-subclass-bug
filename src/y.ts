import { Base } from "./base";
import { useView } from 'aurelia-framework';

@useView('./base.html')
export class Y extends Base {
  name: string = 'Y';
}
