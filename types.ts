import { ParsedUrlQuery } from "querystring";

export type Seller = {
  sellerId: string;
  sellerFirstLastName: string;
  sellerUserName: string;
  sellerEmail: string;
  sellerLogo: string;
  sellerBio: string;
  sellerAddress: string;
  sellerCity: string;
  sellerCountry: string;
  sellerLat: string;
  sellerLong: string;
  sellerProducts: Product[];
  sellerSocial?: string;
};

export type Product = {
  productID: string;
  productName: string;
  productImage: string;
  productSummary: string;
  productDescription: string;
  productQty: string;
  productPrice: string;
  productCategory: string;
  productReference: string;
  productDiscount: string;
  productUrl: string;
};

export interface IParams extends ParsedUrlQuery {
  id: string;
}

export type MapMarker = {
  latlng: [lat: number, lng: number];
  popup: React.ReactNode;
};
