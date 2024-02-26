/*export async function getProducts() {
  const storeId = "346bfd73-eefb-40f0-a339-830d4c26cdb0";
  const apiKey =
    "4f129032-7c7e-4955-91dc-7ec030f0c1ca-fef66422-a746-44b9-bf7c-7a61322e0405:191c469b-47c9-4aae-8bb7-4dc3eb768722";
  const queryParams = new URLSearchParams({
    order: "desc",
    orderBy: "createdAt",
    offset: "0",
    limit: "100",
  }).toString();
  const url = `/v1/stores/${storeId}/products?${queryParams}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
      },
    });
    const data = await response.json();
    console.log(data);
    return data.products;
  } catch (error) {
    console.error("Errore durante il recupero dei dati:", error);
  }
}
*/

import { Product } from "../declaretion";

type QueryParams = string | URLSearchParams | Record<string, string>;

async function fetchApi(endpoint: string, queryParams: QueryParams = "") {
  const storeId = "346bfd73-eefb-40f0-a339-830d4c26cdb0";
  const apiKey =
    "4f129032-7c7e-4955-91dc-7ec030f0c1ca-fef66422-a746-44b9-bf7c-7a61322e0405:191c469b-47c9-4aae-8bb7-4dc3eb768722";
  const baseUrl = `/v1/stores/${storeId}${endpoint}`;

  if (queryParams) {
    queryParams = new URLSearchParams(queryParams).toString();
  }

  const url = `${baseUrl}?${queryParams}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Errore durante il recupero dei dati:", error);
    return null; // Restituisce null in caso di errore per gestione uniforme
  }
}

export async function getProducts() {
  const queryParams = {
    order: "desc",
    orderBy: "createdAt",
    offset: "0",
    limit: "100",
  };
  const data = await fetchApi(`/products`, queryParams);
  console.log(data);
  return data ? data.products : null;
}

export async function getProductDetails(productId: Product["id"]) {
  const data = await fetchApi(`/products/${productId}`);
  return data ? data : null;
}
