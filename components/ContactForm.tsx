'use client';

import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import styles from './contactForm.module.css';
import Spinner from './Spinner';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  message: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Imię musi zawierać co najmniej 3 znaki')
    .max(50, 'Imię może mieć maksymalnie 50 znaków')
    .required('Imię jest wymagane'),
  email: Yup.string()
    .email('Nieprawidłowy format adresu email')
    .max(100, 'Email może mieć maksymalnie 100 znaków')
    .required('Email jest wymagany'),
  message: Yup.string()
    .min(10, 'Wiadomość musi zawierać co najmniej 10 znaków')
    .max(500, 'Wiadomość może mieć maksymalnie 500 znaków')
    .required('Wiadomość jest wymagana'),
});

const ContactForm: React.FC = () => {
  const handleSubmit = async (
    values: ContactFormValues,
    { setSubmitting, resetForm, setStatus }: FormikHelpers<ContactFormValues>
  ) => {
    console.log('here1');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (data.success) {
        resetForm();
        setStatus({ success: true });
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      console.error('Błąd wysyłania formularza:', error);
      setStatus({ success: false });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Napisz do mnie</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form className={styles.form}>
            {status?.success && (
              <div className={styles.successMessage}>
                Dziękujemy! Twoja wiadomość została wysłana.
              </div>
            )}

            <div className={styles.formGroup}>
              <Field
                type='text'
                id='name'
                name='name'
                className={styles.input}
                placeholder='Imię'
              />
              <ErrorMessage
                name='name'
                component='div'
                className={styles.errorMessage}
              />
            </div>

            <div className={styles.formGroup}>
              <Field
                type='email'
                id='email'
                name='email'
                className={styles.input}
                placeholder='Email'
              />
              <ErrorMessage
                name='email'
                component='div'
                className={styles.errorMessage}
              />
            </div>

            <div className={styles.formGroup}>
              <Field
                as='textarea'
                id='message'
                name='message'
                className={styles.textarea}
                rows={5}
                placeholder='Treść wiadomości'
              />
              <ErrorMessage
                name='message'
                component='div'
                className={styles.errorMessage}
              />
            </div>

            <button
              type='submit'
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              Wyślij wiadomość{isSubmitting ? <Spinner /> : null}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
