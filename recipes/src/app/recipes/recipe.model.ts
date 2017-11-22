export class Recipe {
  public name: string;
  public descr: string;
  public img: string;

  constructor(name: string, descr: string, imgpath: string) {
    Object.assign(this, {name, descr, imgpath});
  }
}
