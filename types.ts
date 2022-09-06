import { ParsedUrlQuery } from "querystring";

export type Seller = {
  sellerId: string;
  sellerLogo: string;
  sellerDescription: string;
  sellerFirstName: string;
  sellerUserName: string;
  sellerEmail: string;
  sellerAddress: string;
  sellerCity: string;
  sellerCountry: string;
  sellerZip: string;
  sellerLat: string;
  sellerLong: string;
  sellerSocial: string;
  sellerProducts: Product[];
};

export type Product = {
  productID: string;
  productImage: string;
  productSummary: string;
  productDescription: string;
  productQuantity: string;
  productPrice: string;
  productCategory: string;
  productReference: string;
  productDiscount: string;
  productUrl: string;
};

export interface IParams extends ParsedUrlQuery {
  id: string;
}