import './styles.css';
import ButtonNextPage from '../../../components/ButtonNextPage';
import CatalogCard from '../../../components/CatalogCard';
import SearchBar from '../../../components/SearchBar';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-service';

type QueryParams = {
  page: number;
  name: string;
}

export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>();
  const [queryParams, setQueryParams] = useState<QueryParams>(
    {
      page: 0,
      name: ""
    });


  function handleSearch(searchText: string) {
    setQueryParams({ ...queryParams, name: searchText });
  }

  useEffect(() => {
    productService.findPageRequest(queryParams.page, queryParams.name)
      .then(response => {
        setProducts(response.data.content)
      }).
      catch(error => {

      });
  }, [queryParams])

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar onSearch={handleSearch} />
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