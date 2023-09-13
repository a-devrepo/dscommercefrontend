import ButtonNextPage from '../../../components/ButtonNextPage';
import CatalogCard from '../../../components/CatalogCard';
import SearchBar from '../../../components/SearchBar';
import { ProductDTO } from '../../../models/product';
import './styles.css';




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

export default function Catalog() {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
        </div>
        <ButtonNextPage></ButtonNextPage>
      </section>
    </main>
  );
}