'use client';

import styles from './styles.module.scss';

import { usePathname } from "next/navigation";

const page = () => {
  const router = usePathname()
  
  return (
    <section className="h-[100vh] w-[100vw] flex flex-col justify-center bg-white">
      {/* <div className={`flex flex-col justify-center text-center  text-black ${styles.dhruba}`}>{router.split('/')[1]}</div> */}
      <div className='flex justify-center'>
      <div className={styles.cat}>
        <div className={`${styles.ear} ${styles['ear--left']}`}></div>
        <div className={`${styles.ear} ${styles['ear--right']}`}></div>
        <div className={styles.face}>
          <div className={`${styles.eye} ${styles['eye--left']}`}>
            <div className={`${styles['eye-pupil']}`}></div>
          </div>
          <div className={`${styles.eye} ${styles['eye--right']}`}>
            <div className={`${styles['eye-pupil']}`}></div>
          </div>
          <div className={styles.muzzle}></div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default page;
