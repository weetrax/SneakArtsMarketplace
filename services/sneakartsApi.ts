import axios from "axios";

const API_KEY = "41qcxttypco3b81bzu2qra0wqvq8derez3tk8eqc";
const ALL_SELLERS_ENDPOINT = `https://sneakarts.com/fr/marketplace/api?secret_key=${API_KEY}`;

export const getSellers = () => {
  return axios.get(ALL_SELLERS_ENDPOINT);
};

export const getSellerUrl = (id: string, name: string) => {
  return `https://sneakarts.com/fr/store/${name.replace(" ", "_")}-${id}.html`;
};
