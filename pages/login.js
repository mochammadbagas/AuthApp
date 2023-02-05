import Layout from '@/layout/layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import { HiFingerPrint, HiAtSymbol } from 'react-icons/hi';
import { useState } from 'react';

export default function Login() {
  const [show, setShow] = useState(false);

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className='w-3/4 mx-auto flex flex-col gap-8'>
        <div className='title'>
          <h1 className='text-gray-800 text-4xl font-bold py-3'>Login</h1>
          <p className='w-3/4 mx-auto text-gray-600'>Nice to see you again</p>
        </div>
        <form className='flex flex-col gap-4'>
          <div className={styles.input_group}>
            <input
              type='email'
              name='email'
              placeholder='Email'
              className={styles.input_text}
            />
            <span className='icon flex items-center px-4 bg-slate-200 rounded-r-xl'>
              <HiAtSymbol />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={`${show ? 'text' : 'password'}`}
              name='password'
              placeholder='Password'
              className={styles.input_text}
            />
            <span
              className='icon flex items-center px-4 bg-slate-200 rounded-r-xl'
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint />
            </span>
          </div>

          <div className='input-button'>
            <button type='submit' className={styles.button}>
              Login
            </button>
          </div>
          <div className='input-button'>
            <button type='button' className={styles.button_custom}>
              Sign in with Google{' '}
              <Image
                src={'/assets/google.svg'}
                alt='Google'
                width={19}
                height={19}
              ></Image>
            </button>
          </div>
        </form>
        <p className='text-center text-gray-400 text-xs'>
          {`don't have an account yet?`}
          <Link href={'/register'} legacyBehavior>
            <a className='text-blue-700'> Sign Up</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
