import ButtonNextPage from '../../../components/ButtonNextPage';
import CatalogCard from '../../../components/CatalogCard';
import SearchBar from '../../../components/SearchBar';
import './styles.css';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-service';

export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>();

  useEffect(() => {
    productService.findAll()
      .then(response => {
        setProducts(response.data.content)
      }).
      catch(error => {

      });
  }, [])
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {
            products && products.map(product => <CatalogCard key={product.id} product={product} />)
          }
        </div>
        <ButtonNextPage></ButtonNextPage>
      </section>
    </main>
  );
}