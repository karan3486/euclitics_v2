'use client';

import { Button } from '@/src/components/button';
import { TextInput } from '@/src/components/inputs/text-input';
import { TextAreaInput } from '@/src/components/inputs/textarea-input';
import { cn } from '@/src/utils/shadcn';

import * as Yup from 'yup';
import { contactUsFormSubmit } from './server/contact-us-form-submit';
import { toast } from 'sonner';
import { Formik } from 'formik';
import { useState, useRef } from 'react';

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

export type ContactUsSchemaType = Yup.InferType<typeof ContactUsSchema> & {
  attachmentFile?: File | null;
};

const fieldClasses = cn(
  'bg-accent-100 dark:bg-accent-700 rounded-5 border-none'
);

const errorClasses = cn('text-red-500 mt-1');

export function Form() {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const clearFile = () => {
    setFile(null);
    setFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          subject: '',
          phone: '',
          message: '',
          attachmentFile: null as File | null,
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
            // Replace new lines with <br> tags to preserve formatting
            const formattedMessage = values.message.replace(/\n/g, '<br>');
            const htmlContent = `
              <h3>Message from ${values.name}</h3>
              <div style="white-space: pre-line;">${formattedMessage}</div>
            `;
            formData.append('htmlEmailContent', htmlContent);
            
            // Add file if selected (optional)
            if (file) {
              formData.append('attachmentFile', file);
            }
            
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
              clearFile();
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
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-30px"
          >
            <div>
              <TextInput
                placeholder="Your name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={fieldClasses}
              />
              {errors.name && touched.name && (
                <p
                  title={errors.name}
                  aria-live="polite"
                  role="error message"
                  className={errorClasses}
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
                className={fieldClasses}
              />
              {errors.email && touched.email && (
                <p
                  title={errors.email}
                  aria-live="polite"
                  role="error message"
                  className={errorClasses}
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
                className={fieldClasses}
              />
              {errors.subject && touched.subject && (
                <p
                  title={errors.subject}
                  aria-live="polite"
                  role="error message"
                  className={errorClasses}
                >
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <TextInput
                placeholder="Phone"
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={fieldClasses}
              />
              {errors.phone && touched.phone && (
                <p
                  title={errors.phone}
                  aria-live="polite"
                  role="error message"
                  className={errorClasses}
                >
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="lg:col-span-2">
              <TextAreaInput
                placeholder="Message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={cn(
                  fieldClasses,
                  'min-h-[140px] pt-4 md:min-h-[200px]'
                )}
              />
              {errors.message && touched.message && (
                <p
                  title={errors.message}
                  aria-live="polite"
                  role="error message"
                  className={errorClasses}
                >
                  {errors.message}
                </p>
              )}
            </div>

            <div className="lg:col-span-2 mb-4">
              <div className="flex flex-col">
                <label htmlFor="file-upload" className="mb-2 text-sm font-medium">
                  Attachment (optional)
                </label>
                <div className="flex items-center">
                  <input
                    type="file"
                    id="file-upload"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className={cn(
                      fieldClasses,
                      'w-full p-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-accent-200 file:text-accent-700 hover:file:bg-accent-300'
                    )}
                    disabled={isSubmitting}
                  />
                  {fileName && (
                    <button
                      type="button"
                      onClick={clearFile}
                      className="ml-2 text-red-500 hover:text-red-700"
                      disabled={isSubmitting}
                    >
                      ✕
                    </button>
                  )}
                </div>
                {fileName && <p className="mt-1 text-sm text-gray-500">{fileName}</p>}
              </div>
            </div>

            <div>
              <Button type="submit" disabled={isSubmitting}>
                <span className="relative z-1">SEND A MESSAGE</span>
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
