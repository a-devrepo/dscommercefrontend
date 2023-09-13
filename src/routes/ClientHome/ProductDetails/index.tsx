import './styles.css';
import ButtonInverse from '../../../components/ButtonInverse';
import ButtonPrimary from '../../../components/ButtonPrimary';
import ProductDetailsCard from '../../../components/ProductDetailsCard';
import { ProductDTO } from '../../../models/product';

const product: ProductDTO = {
  id: 2,
  name: "SmartTv",
  description: "TV de última geração",
  imgUrl: "https://github.com/devsuperior/dscatalog-resources/blob/master/backend/img/2-big.jpg?raw=true",
  price: 2500.99,
  categories: [
    { id: 2, name: 'Eletrônicos' },
    { id: 3, name: 'Computadores' },
    { id: 4, name: 'Importados' }
  ]
}

export default function ProductDetails() {
  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDetailsCard product={product}></ProductDetailsCard>
        <div className="dsc-btn-page-container">
          <ButtonPrimary name="Comprar"></ButtonPrimary>
          <ButtonInverse name="Início"></ButtonInverse>
        </div>
      </section>
    </main >
  );
}