

// import styles from './styles.module.scss';

// import { usePathname } from 'next/navigation';

const delay = (ms: any) => new Promise((res) => setTimeout(res, ms));

const page = async () => {
  // const router = usePathname();
  await delay(5000);

  return (
    <section className="h-[100vh] w-[100vw] flex flex-col justify-center bg-white">
      {/* <div className={`flex flex-col justify-center text-center  text-black ${styles.dhruba}`}>{router.split('/')[1]}</div> */}
      <div className="flex justify-center">
        <div className={`cat`}>
          <div className={`ear ear--left`}></div>
          <div className={`ear ear--right`}></div>
          <div className={`face`}>
            <div className={`eye eye--left`}>
              <div className={`eye-pupil`}></div>
            </div>
            <div className={`eye eye--right`}>
              <div className={`eye-pupil`}></div>
            </div>
            <div className={`muzzle`}></div>
          </div>
        </div>
        {/* <Test /> */}
      </div>
    </section>
  );
};

export default page;
