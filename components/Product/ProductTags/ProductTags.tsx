import React from 'react';
import PropTypes from 'prop-types';
import { Product } from '../../../types';

type ProductTagsProps = {
  products: Product[];
  clickable?: boolean;
  activeTag?: string | null;
  setActiveTag?: (value: string | null) => void;
  allProducts?: Product[];
  setProducts?: (products: Product[]) => void;
};

const ProductTags: React.FC<ProductTagsProps> = ({
  products,
  clickable = false,
  activeTag,
  setActiveTag,
  allProducts,
  setProducts,
}) => {

  const handleClickTag = (value: string) => {
    if (clickable && setActiveTag && setProducts && allProducts) {
      const v = activeTag === value ? null : value;
      setActiveTag(v);
      if (v) {
        const _products: Product[] = [];
        products?.map((x) => {
          const productTags = x.productReference.split(",");
          if (productTags.includes(v)) {
            _products.push(x);
          }
        });
        setProducts(_products);
      } else {
        setProducts([...allProducts]);
      }
    }
  };

  const _products = [...products];
  const tags: string[] = [];
  _products?.map((x) => {
    x.productReference.split(",").forEach((z) => {
      if (!tags.includes(z)) {
        tags.push(z);
      }
    });
  });

  return <div className="flex gap-2 justify-start items-center">
    {tags.map((t, i) => {
      return (
        <button
          type="button"
          onClick={() => clickable ? handleClickTag(t) : undefined}
          key={i}
          className={`${t === activeTag
            ? "bg-primary-400"
            : "bg-primary-100 hover:bg-primary-200 text-primary-800"
            } ${clickable ? "cursor-pointer" : "cursor-default"} px-2 py-1 text-xs font-medium rounded-full duration-200 transition-all ease-in-out`}
        >
          #{t}
        </button>
      );
    })}
  </div>;
};

ProductTags.propTypes = {
  //
};

export default ProductTags;
