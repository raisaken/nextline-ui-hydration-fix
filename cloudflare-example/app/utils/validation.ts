import { ZodError, ZodSchema } from 'zod';

type ActionErrors<T> = Partial<Record<keyof T, string>>;
export default async function validation<ActionInput>({
  form,
  schema,
}: {
  schema: ZodSchema;
}) {
  const body = Object.fromEntries(form);
  try {
    const formData = schema.parse(body) as ActionInput;
    return { formData, errors: null };
  } catch (e) {
    const errors = e as ZodError<ActionInput>;
    return {
      formData: body,
      errors: errors.issues.reduce((acc: ActionErrors<ActionInput>, curr) => {
        const key = curr.path[0] as keyof ActionInput;
        acc[key] = curr.message;
        return acc;
      }, {}),
    };
  }
}
