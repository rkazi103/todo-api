export class CustomAPIError extends Error {
  private statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }

  getStatusCode(): number {
    return this.statusCode;
  }
}

export const createCustomError = (
  message: string,
  statusCode: number
): CustomAPIError => new CustomAPIError(message, statusCode);
