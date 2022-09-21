import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import { Controller } from 'react-hook-form';

/**
 * ValidatedInput is a wrapper around Input that adds validation
 *
 * @param {props} props with the following properties:
 * - control: the control object from react-hook-form
 * - name: the name of the input
 * - type: the type of the input
 * - label: the label of the input
 * - rules: the rules for the input (see https://react-hook-form.com/api/useform/register)
 * @returns the Input with validation
 */
export default function ValidatedInput({ control, name, type, label, rules }) {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
        <FormControl isInvalid={!!error}>
          <FormLabel>{label}</FormLabel>
          <Input type={type} onChange={onChange} onBlur={onBlur} value={value} ref={ref} />
          {error && <FormErrorMessage>{error?.message}</FormErrorMessage>}
        </FormControl>
      )}
    />
  );
}
