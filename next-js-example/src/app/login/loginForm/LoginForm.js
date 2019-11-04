import React from 'react';
import { Field, Form } from 'react-final-form';

import { Button } from 'ui';
import useStyles from './LoginForm.styles';
import { Input } from 'ui/input/Input';

export const LoginForm = ({ onSubmit }) => {
  const classes = useStyles();

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine, submitErrors, dirtySinceLastSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="username">
            {({ input, meta }) => (
              <Input label="Username" input={input} meta={meta} type="text" placeholder="Enter username" />
            )}
          </Field>

          <Field name="password">
            {({ input, meta }) => (
              <Input label="Password" type="password" input={input} meta={meta} placeholder="Enter password" />
            )}
          </Field>

          {!submitting && submitErrors && submitErrors.id && !dirtySinceLastSubmit && (
            <span className={classes.errorMessage}>{submitErrors.id}</span>
          )}

          <Button variant="contained" type="submit" disabled={pristine || submitting} color="primary">
            Login
          </Button>
        </form>
      )}
    />
  );
};
