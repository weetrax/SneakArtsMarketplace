import * as React from "react";
import Link from "next/link";
import ProductTags from "../../Product/ProductTags";
import PropTypes from "prop-types";
import ScrollContainer from "react-indiana-drag-scroll";
import { getSellerUrl } from "../../../services/sneakartsApi";
import { LightningBoltIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import { Seller } from "../../../types";

type sellerItemProps = {
  seller: Seller;
};

const SellerItem: React.FC<sellerItemProps> = ({ seller }) => {
  return (
    <div
      key={seller.sellerId}
      className="group col-span-1 flex flex-col text-center bg-white dark:bg-dark-600 border border-gray-200 dark:border-dark-400 dark:hover:border-primary-500 hover:border-primary-500 duration-200 ease-in-out transition-all rounded-lg shadow divide-y divide-gray-200 dark:divide-dark-400 dark:hover:divide-primary-500 hover:divide-primary-500"
    >
      <div className="flex-1 flex flex-col p-8">
        <img
          className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
          src={seller.sellerLogo}
          alt=""
        />
        <h3 className="mt-6 text-sm font-medium">{seller.sellerUserName}</h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Name</dt>
          <dd className="text-gray-500 dark:text-gray-400 text-xs italic">
            {seller.sellerCity}, {seller.sellerCountry}
          </dd>
          <dt className="sr-only">Tags</dt>
          <dd className="mt-3 flex justify-center items-center gap-1">
            <ScrollContainer
              nativeMobileScroll={true}
              className="cursor-grab overflow-auto max-w-[200px]"
            >
              <ProductTags products={seller.sellerProducts} />
            </ScrollContainer>
          </dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x group-hover:divide-primary-500 divide-gray-200 dark:divide-dark-400">
          <div className="w-0 flex-1 flex">
            <Link href={`/seller/${seller.sellerId}`}>
              <a className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium rounded-bl-lg hover:text-primary-500 duration-200 transition-all ease-in-out">
                <LightningBoltIcon className="w-5 h-5" aria-hidden="true" />
                <span className="ml-3">Créations</span>
              </a>
            </Link>
          </div>
          <div className="-ml-px w-0 flex-1 flex">
            <a
              href={getSellerUrl(seller.sellerId, seller.sellerUserName)}
              target={"_blank"}
              rel="noreferrer nooperer"
              className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium rounded-br-lg hover:text-primary-500 duration-200 transition-all ease-in-out"
            >
              <ShoppingBagIcon className="w-5 h-5" aria-hidden="true" />
              <span className="ml-3">Commander</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

SellerItem.propTypes = {
  //
};

export default SellerItem;
