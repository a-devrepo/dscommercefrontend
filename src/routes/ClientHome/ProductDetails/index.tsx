import './styles.css';
import ButtonInverse from '../../../components/ButtonInverse';
import ButtonPrimary from '../../../components/ButtonPrimary';
import ProductDetailsCard from '../../../components/ProductDetailsCard';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-service';


export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService.findById(Number(params.productId))
      .then(response => {
        setProduct(response.data)
      })
  }, [])

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {
          product && <ProductDetailsCard product={product} />
        }
        <div className="dsc-btn-page-container">
          <ButtonPrimary name="Comprar"></ButtonPrimary>
          <Link to="/">
            <ButtonInverse name="Início"></ButtonInverse>
          </Link>
        </div>
      </section>
    </main >
  );
}