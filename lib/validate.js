export default function loginValidate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  } else if (values.email.includes(' ')) {
    errors.email = 'Invalid Email';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.lenght < 8 || values.password.lenght > 20) {
    errors.password = 'Must be greater then 8 an less then 20 character long';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid Password';
  }

  return errors;
}

export function registerValidate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.includes(' ')) {
    errors.username = 'Invalid Username';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  } else if (values.email.includes(' ')) {
    errors.email = 'Invalid Email';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.lenght < 8 || values.password.lenght > 20) {
    errors.password = 'Must be greater then 8 an less then 20 character long';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid Password';
  }

  if (!values.cpassword) {
    errors.cpassword = 'Required';
  } else if (values.cpassword !== values.password) {
    errors.cpassword = 'Password Not Match...!';
  } else if (values.cpassword.includes(' ')) {
    errors.cpassword = 'Invalid Confirm Password';
  }

  return errors;
}
