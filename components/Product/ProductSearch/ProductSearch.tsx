import ProductItem from "../ProductItem";
import ProductSearchbar from "../ProductSearchbar";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types";

type ProductSearchProps = {
  products: Product[];
};

const ProductSearch: React.FC<ProductSearchProps> = ({ products }) => {
  const [tags, setTags] = React.useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (products && Array.isArray(products)) {
      const _tags: string[] = [];
      const _products = [...products];
      _products?.map((x) => {
        x.productReference.split(",").forEach((z) => {
          if (!_tags.includes(z)) {
            _tags.push(z);
          }
        });
      });
      setTags(_tags);
    }
  }, [products]);

  useEffect(() => {
    handleFilterProductsByTags(selectedTags);
  }, [selectedTags]);

  const handleFilterProductsByTags = (tags: string[]) => {
    console.log(tags);
    const _products = [...products];
    const _filteredProducts: Product[] = [];
    _products.forEach((p) => {
      if (!_filteredProducts.find((f) => f.productUrl === p.productUrl)) {
        const _productTags: string[] = [];
        p.productReference.split(",").forEach((z) => {
          if (!_productTags.includes(z)) {
            _productTags.push(z);
          }
        });

        _productTags.forEach((t) => {
          if (tags.includes(t)) {
            _filteredProducts.push(p);
          }
        });
      }
    });

    setFilteredProducts(_filteredProducts);
  };

  return (
    <div>
      <ProductSearchbar
        tags={tags}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <div className="py-16">
        <div className="grid grid-cols-12">
          {filteredProducts.map((p) => {
            return <ProductItem product={p} />;
          })}
        </div>
      </div>
    </div>
  );
};

ProductSearch.propTypes = {
  //
};

export default ProductSearch;
