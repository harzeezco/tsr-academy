import * as z from 'zod';

export const SignUpSchema = z.object({
  fullname: z
    .string()
    .min(2)
    .max(20)
    .regex(/^[\sA-Za-z]+$/, {
      message: 'Invalid characters in username',
    }),
  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .email('Invalid email format'),
  password: z
    .string()
    .min(6)
    .max(15)
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!#$%&()*+@^_])[\w!#$%&()*+@^]+$/,
      {
        message:
          'Password must contain at least one uppercase letter, one lowercase letter, one digit',
      },
    ),
});

export const SignInSchema = z.object({
  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .email('Invalid email format'),
  password: z
    .string()
    .min(6)
    .max(15)
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!#$%&()*+@^_])[\w!#$%&()*+@^]+$/,
      {
        message:
          'Password must contain at least one uppercase letter, one lowercase letter, one special character',
      },
    ),
});

export const NewPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6)
      .max(15)
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!#$%&()*+@^_])[\w!#$%&()*+@^]+$/,
        {
          message:
            'Password must contain at least one uppercase letter, one lowercase letter, one special character',
        },
      ),

    confirmPassword: z
      .string()
      .min(6)
      .max(15)
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!#$%&()*+@^_])[\w!#$%&()*+@^]+$/,
        {
          message:
            'Password must contain at least one uppercase letter, one lowercase letter, one special character',
        },
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
