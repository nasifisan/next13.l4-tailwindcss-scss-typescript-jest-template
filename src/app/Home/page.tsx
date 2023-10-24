'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/StoreHooks';
import useTranslation from 'next-translate/useTranslation';
import { decrement, increment } from '@/redux/slices/counterSlice';
import AppButton from '@/components/Buttons/AppButton';

export default function AnotherHome() {
  const { t, lang } = useTranslation();

  const count = useAppSelector((state) => state.Counter.count);
  const dispatch = useAppDispatch();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 space-y-20">
      <section>{t('common:GREETING')}</section>

      <section>
        <div className="space-y-12">
          <div className="bg-black p-20 flex rounded-full text-2xl font-extrabold text-white font-serif items-center justify-center">
            <span>{count}</span>
          </div>

          <div className="flex justify-between space-x-20">
            <div>
              <AppButton
                name="Decrement"
                intent={'secondary'}
                onClick={() => dispatch(decrement())}
                buttonClass={' text-md px-24 py-12'}
              />
            </div>
            <div>
              <AppButton
                name="Increment"
                intent={'primary'}
                onClick={() => dispatch(increment())}
                buttonClass={' text-md px-24 py-12'}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
