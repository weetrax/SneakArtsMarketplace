import * as React from "react";
import PropTypes from "prop-types";
import { Product, Seller } from "../../../types";
import { GlobeAltIcon } from "@heroicons/react/outline";
import SellerProduct, {
  SellerProductTags,
} from "../SellerProduct/SellerProduct";

type SellerProfileProps = {
  seller: Seller;
  activeTag: string | null;
  setActiveTag: (value: string | null) => void;
  allProducts: Product[];
  products: Product[];
  setProducts: (products: Product[]) => void;
};

const SellerProfile: React.FC<SellerProfileProps> = ({
  seller,
  activeTag,
  setActiveTag,
  allProducts,
  products,
  setProducts,
}) => {
  return (
    <div className="grid grid-cols-12 items-start justify-center gap-8">
      <div className="col-span-12">
        <div className="text-center md:text-left text-3xl md:text-4xl font-extrabold title-gradient mb-8">
          Créateur
        </div>
        <div className="bg-white dark:bg-dark-600 border border-gray-200 dark:border-dark-400 dark:hover:border-primary-500 hover:border-primary-500 duration-200 ease-in-out transition-all rounded-lg p-3">
          <div className="flex items-start gap-4 mb-6">
            <img
              src={seller?.sellerLogo}
              className="w-16 h-16 object-cover rounded-full"
            ></img>
            <div className="flex flex-col">
              <div className="font-bold text-3xl">{seller?.sellerUserName}</div>
              <div className="flex gap-2">
                <span>
                  {seller?.sellerCountry}, {seller?.sellerCity} |{" "}
                </span>
                <a
                  href={seller?.sellerSocial}
                  className="items-center justify-center hover:text-primary-500 duration-200 transition-all ease-in-out"
                >
                  <GlobeAltIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="font-semibold mb-4">{seller?.sellerDescription}</div>
          <div className="flex gap-2">
            <SellerProductTags
              seller={seller}
              activeTag={activeTag}
              setActiveTag={setActiveTag}
              allProducts={allProducts}
              products={products}
              setProducts={setProducts}
            />
          </div>
        </div>
      </div>
      <div className="col-span-12">
        <div className="text-center md:text-left text-3xl md:text-4xl font-extrabold title-gradient mb-8">
          Shop
        </div>
        <div className="my-4 grid grid-cols-12 flex-col gap-4">
          {products?.map((x, i) => {
            return <SellerProduct key={i} product={x} />;
          })}
        </div>
      </div>
    </div>
  );
};

SellerProfile.propTypes = {
  //
};

export default SellerProfile;
