(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number) {
      console.log('Producto: ', { id, name: 'OLED Tv' });
    }

    saveProduct(product: Product) {
      console.log('Guardando en base de datos', product);
    }
  }

  class Mailer {
    private masterEmail = 'gudielcobon@gmail.com';

    sendEmail(emailList: string[], template: string) {
      console.log('Enviando correo a los clientes', template);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {

    private productService: ProductService;
    private mailerService: Mailer;

    constructor(productService: ProductService, mailerService: Mailer, ){
        this.productService = productService;
        this.mailerService = mailerService;
    }

    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailerService.sendEmail([], '<div>template</div>');
    }
  }


  class CartBloc{

    private itemsInCart: Object[] = [];

    onAddToCart(productId: number) {
        // Agregar al carrito de compras
        console.log('Agregando al carrito ', productId);
      }

  }


  const product = new ProductService();
  const mailer = new Mailer();

  const productBloc = new ProductBloc(product, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();

  cartBloc.onAddToCart(10);
})();
