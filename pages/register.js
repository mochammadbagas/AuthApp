import Layout from '@/layout/layout';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import { HiFingerPrint, HiAtSymbol, HiUserCircle } from 'react-icons/hi';
import { useState } from 'react';
import { useFormik } from 'formik';
import { registerValidate } from 'lib/validate';
import { useRouter } from 'next/router';

export default function Register() {
  const [show, setShow] = useState({ password: false, cpassword: false });
  const router = useRouter;
  // Formik Hook
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      cpassword: '',
    },
    validate: registerValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    };

    await fetch('http://localhost:3000/api/auth/signup', options)
      .then((res) => res.json())
      .then((data) => {
        if (data) router.push('http://localhost:3000');
      });
  }

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <section className='w-3/4 mx-auto flex flex-col gap-8'>
        <div className='title'>
          <h1 className='text-gray-800 text-4xl font-bold py-3'>Register</h1>
          <p className='w-3/4 mx-auto text-gray-600'>Nice to see you again</p>
        </div>
        <form className='flex flex-col gap-4' onSubmit={formik.handleSubmit}>
          <div className={styles.input_group}>
            <input
              type='text'
              name='username'
              placeholder='Username'
              className={styles.input_text}
              {...formik.getFieldProps('username')}
            />
            <span className='icon flex items-center px-4 bg-slate-200 rounded-r-xl'>
              <HiUserCircle />
            </span>
          </div>

          {formik.errors.username && formik.touched.username ? (
            <span className='text-rose-500 text-xs'>
              {formik.errors.username}
            </span>
          ) : null}

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
              type={`${show.password ? 'text' : 'password'}`}
              name='password'
              placeholder='Password'
              className={styles.input_text}
              {...formik.getFieldProps('password')}
            />
            <span
              className='icon flex items-center px-4 bg-slate-200 rounded-r-xl'
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              <HiFingerPrint />
            </span>
          </div>

          {formik.errors.password && formik.touched.password ? (
            <span className='text-rose-500 text-xs'>
              {formik.errors.password}
            </span>
          ) : null}

          <div className={styles.input_group}>
            <input
              type={`${show.cpassword ? 'text' : 'password'}`}
              name='cpassword'
              placeholder='Confirm Password'
              className={styles.input_text}
              {...formik.getFieldProps('cpassword')}
            />
            <span
              className='icon flex items-center px-4 bg-slate-200 rounded-r-xl'
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            >
              <HiFingerPrint />
            </span>
          </div>

          {formik.errors.cpassword && formik.touched.cpassword ? (
            <span className='text-rose-500 text-xs'>
              {formik.errors.cpassword}
            </span>
          ) : null}

          <div className='input-button'>
            <button type='submit' className={styles.button}>
              Sign Up
            </button>
          </div>
        </form>
        <p className='text-center text-gray-400 text-xs'>
          already have an account?
          <Link href={'/login'} legacyBehavior>
            <a className='text-blue-700'> Sign In</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
