import Layout from '@/layout/layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import { HiFingerPrint, HiAtSymbol } from 'react-icons/hi';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useFormik } from 'formik';
import loginValidate from 'lib/validate';

export default function Login() {
  const [show, setShow] = useState(false);
  //Formik Hook
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: loginValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }

  async function handleGoogleSignIn() {
    signIn('google', { callbackUrl: 'http://localhost:3000' });
  }

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
        <form className='flex flex-col gap-4' onSubmit={formik.handleSubmit}>
          <div className={styles.input_group}>
            <input
              type='email'
              name='email'
              placeholder='Email'
              className={styles.input_text}
              {...formik.getFieldProps('email')}
            />
            <span className='icon flex items-center px-4 bg-slate-200 rounded-r-xl'>
              <HiAtSymbol />
            </span>
          </div>

          {formik.errors.email && formik.touched.email ? (
            <span className='text-rose-500 text-xs'>{formik.errors.email}</span>
          ) : null}

          <div className={styles.input_group}>
            <input
              type={`${show ? 'text' : 'password'}`}
              name='password'
              placeholder='Password'
              className={styles.input_text}
              {...formik.getFieldProps('password')}
            />
            <span
              className='icon flex items-center px-4 bg-slate-200 rounded-r-xl'
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint />
            </span>
          </div>

          {formik.errors.password && formik.touched.password ? (
            <span className='text-rose-500 text-xs'>
              {formik.errors.password}
            </span>
          ) : null}

          <div className='input-button'>
            <button type='submit' className={styles.button}>
              Login
            </button>
          </div>
          <div className='input-button'>
            <button
              type='button'
              className={styles.button_custom}
              onClick={handleGoogleSignIn}
            >
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
