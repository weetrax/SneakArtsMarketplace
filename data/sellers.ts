import { Seller, Product } from "../types";
import { _product1, _product2, _product3 } from "./products";

export const _sellers: Seller[] = [
  {
    sellerId: "Seller 1",
    sellerEmail: "seller1@sneakert.com",
    sellerUserName: "JeanCule",
    sellerFirstName: "Jean",
    sellerDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis velit sed metus mattis tincidunt. Vestibulum metus magna, varius vitae lacus facilisis, imperdiet aliquam lectus.",
    sellerAddress: "1 rue des Pierres",
    sellerCity: "Cannes",
    sellerCountry: "France",
    sellerZip: "06400",
    sellerProducts: _product1,
    sellerSocial: "site1.com",
    sellerLogo: "https://picsum.photos/seed/picsum1/200/300",
    sellerLat: "-1.1",
    sellerLong: "2.1",
  },
  {
    sellerId: "Seller 2",
    sellerEmail: "seller2@sneakert.com",
    sellerUserName: "MangeMerde",
    sellerFirstName: "Mange",
    sellerDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis velit sed metus mattis tincidunt. Vestibulum metus magna, varius vitae lacus facilisis, imperdiet aliquam lectus.",
    sellerAddress: "2 avenue ma Louche",
    sellerCity: "Paris",
    sellerCountry: "France",
    sellerZip: "06400",
    sellerProducts: _product2,
    sellerSocial: "site2.com",
    sellerLogo: "https://picsum.photos/seed/picsum2/200/300",
    sellerLat: "-2.2",
    sellerLong: "2.2",
  },
  {
    sellerId: "Seller 3",
    sellerEmail: "seller3@sneakert.com",
    sellerUserName: "Noahnanas",
    sellerFirstName: "Noah",
    sellerDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis velit sed metus mattis tincidunt. Vestibulum metus magna, varius vitae lacus facilisis, imperdiet aliquam lectus.",
    sellerAddress: "3 rue des Pierres",
    sellerCity: "Cannes",
    sellerCountry: "France",
    sellerZip: "06400",
    sellerProducts: _product3,
    sellerSocial: "site3.com",
    sellerLogo: "https://picsum.photos/seed/picsum4/200/300",
    sellerLat: "-3.3",
    sellerLong: "2.3",
  },
];
