export default function validate(values) {
  return {
    ...emailValidate(values.email),
    ...passwordValidate(values.password),
  };
};

export function emailValidate(email) {
  const errors = {};
  if (!email) {
    errors.email = 'Email address is required.';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Email address is invalid.';
  }
  return errors;
}

export function passwordValidate(password) {
  const errors = {};
  if (!password) {
    errors.password = 'Password is required.';
  } else if (password.length < 10) {
    errors.password = 'Password is longer than 10 words.';
  }
  return errors;
}