import AddProductButton from '@/components/Buttons/AddProductButton';
import { getCookie } from 'cookies-next';

const SSRCHECK = async () => {
  const res = await fetch('https://64fffab818c34dee0cd4193c.mockapi.io/api/test', {
    method: 'GET',
    // cache: 'no-cache',
    // next: {
    //   tags: ['products'],
    //   revalidate: 1,
    // },
  });

  const json: any = await res.json();

  return (
    <section className="flex flex-col gap-10 p-20">
      <div className="grid grid-cols-4 gap-8 mt-20">
        {(json || []).map((item: any, idx: number) => (
          <div key={item?.id} className="p-10 border-2 border-purple-800">
            <div className="text-xl font-bold text-blue-700">{item?.name}</div>
            <div className="text-md font-semibold text-black">{item?.price}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        {/* <form action={addProduct}>
          <button type="submit">Add New</button>
        </form> */}
        <AddProductButton />
      </div>
    </section>
  );
};

export default SSRCHECK;
