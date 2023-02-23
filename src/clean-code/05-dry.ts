type size = '' | 'S' | 'M' | 'L';

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: size = ''
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if (String(this[key]).length <= 0) throw new Error(`${key} is empty`);
          break;
        case 'number':
          if (+this[key] <= 0) throw new Error(`${key} is zero`);
          break;

        default:
          throw new Error(`${typeof this[key]} is not supported`);
      }
    }
    return true;
  }

  toString() {
    // No Dry
    // if(this.name.length <= 0) throw new Error("name is empty");
    // if(this.price <= 0) throw new Error("price is zero");
    // if(this.name.length <= 0) throw new Error("size is empty");

    if (!this.isProductReady) return;
    
    return `${this.name} (${this.price}) ${this.size}`;
  }
}

(() => {
  const bluePants = new Product('juan');
  console.log(bluePants.toString());
})();
