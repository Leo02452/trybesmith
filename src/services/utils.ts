import { Schema } from 'joi';

export class CustomError extends Error {
  constructor(message: string, name: string) {
    super(message);
    this.name = name;
  }
}

const verifyTypeAndThrowError = (type: string, message: string, errorName: string) => {
  switch (type) {
    case 'string.base':
    case 'string.min':
    case 'number.base':
    case 'number.min':
      throw new CustomError(message, 'UnprocessableEntityError');
    default:
      throw new CustomError(message, errorName);
  }
};

export const runSchema = (schema: Schema) => (data: unknown): void => {
  const { error } = schema.validate(data);
  if (error) {
    const { type, message } = error.details[0];
    
    verifyTypeAndThrowError(type, message, error.name);
  }
};
