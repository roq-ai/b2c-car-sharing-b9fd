import * as yup from 'yup';

export const billingValidationSchema = yup.object().shape({
  amount: yup.number().integer().nullable(),
});
