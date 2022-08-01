import { Schema } from 'joi';

export class CustomError extends Error {
  constructor(message: string, name: string) {
    super(message);
    this.name = name;
  }
}

export const runSchema = (schema: Schema) => (data: unknown): void => {
  const { error } = schema.validate(data);
  if (error) {
    const { type, message } = error.details[0];
    switch (type) {
      case 'any.required':
        throw new CustomError(message, error.name);
      default:
        throw new CustomError(message, 'UnprocessableEntityError');
    }
  }
};
