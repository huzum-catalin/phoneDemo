export class Phone {
  constructor(
    public id: number,
    public ttproductid: number,
    public handsetcode: string,
    public offercode: string,
    public productcategory: string,
    public description: string,
    public extraDescription: string,
    public manufacturer: string,
    public outOfStock: boolean,
    //public sortfeatures: {},
    //public filterfeatures: {},
    public enabled4G: boolean,
    public inFuture: boolean,
    public productDescription: string,
    public priceFrom: number) { }
}
