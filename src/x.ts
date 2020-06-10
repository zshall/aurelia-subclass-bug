import { Base } from "./base";
import { useView } from 'aurelia-framework';

@useView('./base.html')
export class X extends Base {
  name: string = 'X';
}
