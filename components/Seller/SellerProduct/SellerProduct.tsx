import * as React from "react";
import PropTypes from "prop-types";
import { Product, Seller } from "../../../types";

type SellerProductProps = {
  product: Product;
};

const SellerProduct: React.FC<SellerProductProps> = ({ product }) => {
  return (
    <div className="group col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
      <img
        className="border border-gray-200 dark:border-dark-400 group-hover:border group-hover:dark:border group-hover:border-primary-500 group-hover:dark:border-primary-500 h-36 w-full rounded-t-lg object-cover"
        src={product.productImage}
      ></img>
      <div className="bg-white dark:bg-dark-600 border border-gray-200 dark:border-dark-400 group-hover:dark:hover:border-primary-500 group-hover:border-primary-500 duration-200 ease-in-out transition-all rounded-b-lg p-3">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div>Categorie</div>
            <div>{product.productCategory}</div>
          </div>
          <div className="flex justify-between items-center">
            <div>Prix</div>
            <div>{product.productPrice}€</div>
          </div>
          <div className="flex justify-between items-center mb-8">
            <div>Tags</div>
            <div className="flex gap-2 justify-start items-center overflow-auto max-w-[120px]">
              {product.productReference.split(",").map((tag, tagIndex) => {
                return (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-primary-800 text-xs font-medium bg-primary-100 rounded-full"
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="flex">
            <a
              className="cursor-pointer text-sm w-full text-white text-center rounded-full py-2 px-3 bg-primary-500 hover:bg-primary-400 transition-all duration-200 ease-in-out"
              href={product.productUrl}
              target={"_blank"}
              rel="noreferrer nooperer"
            >
              Commander
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

SellerProduct.propTypes = {};

type SellerProductTagsProps = {
  seller: Seller;
  activeTag: string | null;
  setActiveTag: (value: string | null) => void;
  allProducts: Product[];
  products: Product[];
  setProducts: (products: Product[]) => void;
};
export const SellerProductTags: React.FC<SellerProductTagsProps> = ({
  seller,
  activeTag,
  setActiveTag,
  allProducts,
  products,
  setProducts,
}) => {
  const handleClickTag = (value: string) => {
    const v = activeTag === value ? null : value;
    setActiveTag(v);
    if (v) {
      const products: Product[] = [];
      seller?.sellerProducts?.map((x) => {
        const productTags = x.productReference.split(",");
        if (productTags.includes(v)) {
          products.push(x);
        }
      });
      setProducts(products);
    } else {
      setProducts([...allProducts]);
    }
  };

  const producs = seller?.sellerProducts;
  const tags: string[] = [];
  producs?.map((x) => {
    x.productReference.split(",").forEach((z) => {
      if (!tags.includes(z)) {
        tags.push(z);
      }
    });
  });

  return (
    <>
      {" "}
      {tags.map((t, i) => {
        return (
          <button
            type="button"
            onClick={() => handleClickTag(t)}
            key={i}
            className={`${
              t === activeTag
                ? "bg-primary-400"
                : "bg-primary-100 hover:bg-primary-200 text-primary-800"
            } cursor-pointer px-2 py-1 text-xs font-medium rounded-full duration-200 transition-all ease-in-out`}
          >
            #{t}
          </button>
        );
      })}
    </>
  );
};

export default SellerProduct;
