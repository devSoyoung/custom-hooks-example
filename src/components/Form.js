import React from 'react';
import useForm from '../hooks/useForm';
import validate from '../utils/LoginFormValidationRules';

const Form = () => {
  const login = () => {
    // closure 로 values 전달
    console.log('input:', values);
    window.alert('Login Success!');
  };

  const { values, errors, handleChange, handleSubmit } = useForm(login, validate);

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Email Address</label>
        <div className="control">
          <input
            className={`input ${errors.email && 'is-danger'}`}
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email || ''}
            required
          />
          {errors.email && (
            <p className="help is-danger">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            className={`input ${errors.password && 'is-danger'}`}
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password || ''}
            required
          />
          {errors.password && (
            <p className="help is-danger">{errors.password}</p>
          )}
        </div>
      </div>
      <button type="submit" className="button is-block is-info is-fullwidth">Login</button>
    </form>
  );
};

export default Form;