import { PLATFORM } from 'aurelia-pal';
import { Base } from "./base";
import { useView } from 'aurelia-framework';

@useView(PLATFORM.moduleName('./base.html'))
export class Y extends Base {
  name: string = 'Y';
}
