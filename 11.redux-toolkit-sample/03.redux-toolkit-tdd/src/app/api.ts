export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageURL: string;
  imageAlt: string;
  imageCredit: string;
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch('/products.json');
  const products = response.json();
  return products;
};

export type CartItems = { [productID: string]: number };
export type CheckoutResponse = { success: boolean; error?: string; message?: string };

export const checkout = async (items: CartItems): Promise<CheckoutResponse> => {
  const modifier = Object.keys(items).length > 0 ? 'success' : 'error';
  const url = `/checkout-${modifier}.json`;
  await sleep(800);

  const response = await fetch(url);
  const data = await response.json();

  if (!data.success) {
    throw new Error(data.error);
  }

  return data as CheckoutResponse;
};

// Utility function to simulate slowness in an API call
const sleep = (time: number) => new Promise(res => setTimeout(res, time));
