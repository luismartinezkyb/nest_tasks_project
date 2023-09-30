import { ConflictException } from '@nestjs/common';

export function handleHttpError(
  message: string = 'Something Happend',
  code: number = 403,
) {
  console.log(code, message);
  throw new ConflictException(message);
}
