export async function readCatalog() {
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error('result is invalid');
  }
  return await response.json();
}

export async function readProduct(productId: number) {
  const response = await fetch(`/api/products/${productId}`);
  if (!response.ok) {
    throw new Error(`product ${productId} is invalid`);
  }
  return await response.json();
}
