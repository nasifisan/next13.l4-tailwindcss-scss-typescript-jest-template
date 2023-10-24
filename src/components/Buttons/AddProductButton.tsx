'use client';

import AppButton from './AppButton';
import { useFakePostMutation } from '@/redux/middlewares/CounterService';
import { getCookie } from 'cookies-next';

const AddProductButton = () => {
  const [update, { isLoading }] = useFakePostMutation();

  const clickMethod = async () => {
    const x = await update({
      body: {
        name: 'Dell Ray 50',
        price: 23243243,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return <AppButton name={isLoading ? 'Adding...' : 'Add New'} onClick={clickMethod} buttonClass={'px-8 py-4'} />;
};

export default AddProductButton;
