// 'use server';

import { delay } from '../../utils/common';

// import { revalidateTag } from 'next/cache';

export const addProduct = async () => {
  const newProd = {
    name: 'iphone-20',
    price: 30000,
  };

  //   await delay(5000);

  await fetch('https://64fffab818c34dee0cd4193c.mockapi.io/api/test', {
    method: 'POST',
    body: JSON.stringify(newProd),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  //   revalidateTag('products');
};
