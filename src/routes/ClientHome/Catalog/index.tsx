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

  const [islastPage, setlastPage] = useState(false);

  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [queryParams, setQueryParams] = useState<QueryParams>(
    {
      page: 0,
      name: ""
    });


  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, page: 0, name: searchText });
  }

  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 })
  }

  useEffect(() => {

    productService.findPageRequest(queryParams.page, queryParams.name)
      .then(response => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setlastPage(response.data.last)
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
        {
          !islastPage && <div onClick={handleNextPageClick}>
            <ButtonNextPage></ButtonNextPage>
          </div>
        }
      </section>
    </main>
  );
}