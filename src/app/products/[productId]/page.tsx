
import { ProductsService } from '@/app/services/product-services';
import ProductDetail from '@/app/components/ProductDetail';
import { Metadata } from 'next';

type Props = {
  params: {
    productId: string;
  };
};

//  Dynamically sets the <title> and <meta> description for the product page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const productId = Number(params.productId);

  if (!isNaN(productId)) {
    try {
      const product = await ProductsService.getProductById(productId);
      if (product) {
        return {
          title: product.title,
          description: product.description,
        };
      }
    } catch (error) {
      console.error('Error generating metadata:', error);
    }
  }

  return {
    title: 'Product Detail Page',
    description: 'Detailed view of a selected product.',
  };
}

//  Server Component that fetches and renders the product
export default async function ProductDetailPage({ params }: Props) {
  const productId = Number(params.productId);

  if (isNaN(productId)) {
    return <div className="container mt-5">Invalid product ID</div>;
  }

  try {
    const product = await ProductsService.getProductById(productId);

    if (!product || product?.id === undefined) {
      return <div className="container mt-5">Product not found</div>;
    }

    return <ProductDetail product={product} />;
  } catch (error) {
    console.error('Error fetching product:', error);
    return <div className="container mt-5">Error loading product</div>;
  }
}
