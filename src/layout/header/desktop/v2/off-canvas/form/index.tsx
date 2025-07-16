'use client';

import { Button } from '@/src/components/button';
import { TextInput } from '@/src/components/inputs/text-input';
import { TextAreaInput } from '@/src/components/inputs/textarea-input';
import { cn } from '@/src/utils/shadcn';
import { Formik } from 'formik';
import { useState } from 'react';

import * as Yup from 'yup';
import { contactUsFormSubmit } from './server/contact-us-form-submit';
import { toast } from 'sonner';

const mainTitleClasses = cn(
  'relative mb-30px pb-[14px] font-secondary text-[1.25rem] font-bold uppercase text-accent-900 dark:text-white',
  'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[50px] after:bg-current'
);

const inputFieldClasses = cn('border border-current  dark:bg-accent-700');

const errorFieldClasses = cn(' !border-red-600 border');
const errorMessageClasses = cn('sr-only');

const validationMessages = {
  tooShort: 'Must be at least ${min} characters',
  tooLong: 'Must be at most ${max} characters',
  required: 'This field is required',
  email: 'Invalid email format',
  phoneFormat: 'Invalid phone number format',
};

const ContactUsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, validationMessages.tooShort)
    .max(50, validationMessages.tooLong)
    .required(validationMessages.required),
  email: Yup.string()
    .email(validationMessages.email)
    .required(validationMessages.required),
  subject: Yup.string()
    .min(2, validationMessages.tooShort)
    .max(50, validationMessages.tooLong)
    .required(validationMessages.required),
  message: Yup.string()
    .min(2, validationMessages.tooShort)
    .max(300, validationMessages.tooLong)
    .required(validationMessages.required),
  phone: Yup.string().matches(
    /^[+\-()\s\d./]{1,15}$/,
    validationMessages.phoneFormat
  ),
});

export type ContactUsSchemaType = Yup.InferType<typeof ContactUsSchema>;

export function OffcanvasContactUsForm() {
  return (
    <div>
      <h3 className={mainTitleClasses}>GET A FREE QUOTE</h3>
      <Formik
        initialValues={{
          name: '',
          email: '',
          subject: '',
          message: '',
          phone: '',
        }}
        validationSchema={ContactUsSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          try {
            // Create FormData object for multipart/form-data
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('userEmail', values.email);
            formData.append('subject', values.subject);
            
            // Add phone if provided (optional)
            if (values.phone) {
              formData.append('mobile', values.phone);
            }
            
            // Create HTML content from message with preserved line breaks
            const formattedMessage = values.message.replace(/\n/g, '<br>');
            const htmlContent = `
              <h3>Message from ${values.name}</h3>
              <div style="white-space: pre-line;">${formattedMessage}</div>
            `;
            formData.append('htmlEmailContent', htmlContent);
            
            // Send the request to the API
            const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';
            const apiKey = process.env.NEXT_PUBLIC_EMAIL_API_KEY || 'euclitics-1uBqXJ9sDg5a7Pq2LkzTnY3VrEw6ZmQa';
            
            const response = await fetch(`${apiBaseUrl}/api/v1/email/send`, {
              method: 'POST',
              headers: {
                'accept': 'application/json',
                'X-API-Key': apiKey,
                // Note: Don't set Content-Type header when using FormData
                // It will be set automatically with the correct boundary
              },
              body: formData,
            });
            
            const result = await response.json();
            
            if (response.ok) {
              toast.success('Message sent successfully!');
              resetForm();
            } else {
              toast.error(result.message || 'Failed to send message');
            }
          } catch (error) {
            console.error('Error sending message:', error);
            toast.error('An error occurred while sending your message');
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
          isSubmitting,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <TextInput
                placeholder="Your Name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={cn(
                  inputFieldClasses,
                  errors.name && touched.name && errorFieldClasses
                )}
              />
              {errors.name && touched.name && (
                <p
                  title={errors.name}
                  aria-live="polite"
                  role="error message"
                  className={errorMessageClasses}
                >
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <TextInput
                placeholder="Your Email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={cn(
                  inputFieldClasses,
                  errors.email && touched.email && errorFieldClasses
                )}
              />
              {errors.email && touched.email && (
                <p
                  title={errors.email}
                  aria-live="polite"
                  role="error message"
                  className={errorMessageClasses}
                >
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <TextInput
                placeholder="Subject"
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={cn(
                  inputFieldClasses,
                  errors.subject && touched.subject && errorFieldClasses
                )}
              />
              {errors.subject && touched.subject && (
                <p
                  title={errors.subject}
                  aria-live="polite"
                  role="error message"
                  className={errorMessageClasses}
                >
                  {errors.subject}
                </p>
              )}
            </div>
            <div>
              <TextInput
                placeholder="Phone Number (optional)"
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={cn(
                  inputFieldClasses,
                  errors.phone && touched.phone && errorFieldClasses
                )}
              />
              {errors.phone && touched.phone && (
                <p
                  title={errors.phone}
                  aria-live="polite"
                  role="error message"
                  className={errorMessageClasses}
                >
                  {errors.phone}
                </p>
              )}
            </div>
            <div>
              <TextAreaInput
                placeholder="Write Message..."
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={cn(
                  inputFieldClasses,
                  errors.message && touched.message && errorFieldClasses
                )}
              />
              {errors.message && touched.message && (
                <p
                  title={errors.message}
                  aria-live="polite"
                  role="error message"
                  className={errorMessageClasses}
                >
                  {errors.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              <span>SEND NOW</span>
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
