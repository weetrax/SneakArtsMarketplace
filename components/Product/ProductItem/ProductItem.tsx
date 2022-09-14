import * as React from "react";
import PropTypes from "prop-types";
import { Product } from "../../../types";
import ProductTags from "../ProductTags";
import ScrollContainer from "react-indiana-drag-scroll";

type ProductItemProps = {
  product: Product;
};

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="group col-span-12 sm:col-span-6 md:col-span-4">
      <img
        className="border border-gray-200 dark:border-dark-400 group-hover:border group-hover:dark:border group-hover:border-primary-500 group-hover:dark:border-primary-500 h-44 w-full rounded-t-lg object-cover"
        src={product.productImage}
      ></img>
      <div className="bg-white dark:bg-dark-600 border border-gray-200 dark:border-dark-400 group-hover:dark:hover:border-primary-500 group-hover:border-primary-500 duration-200 ease-in-out transition-all rounded-b-lg p-3">
        <div className="flex flex-col gap-2">
          <div className="font-semibold">{product.productName}</div>
          <div className="flex justify-between items-center">
            <div>Categorie</div>
            <div>{product.productCategory}</div>
          </div>
          <div className="flex justify-between items-center">
            <div>Prix</div>
            <div>{product.productPrice}</div>
          </div>
          <div className="flex justify-between items-center mb-8">
            <div>Tags</div>
            <ScrollContainer className="cursor-grab overflow-auto max-w-[120px]">
              <ProductTags products={[product]} />
            </ScrollContainer>
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

ProductItem.propTypes = {
  //
};

export default ProductItem;
