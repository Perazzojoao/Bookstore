import {
  BadRequestException,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { HTTP_CODE_FROM_GRPC } from './http-codes-map';

export interface HttpResponse {
  statusCode: HttpStatus;
  message: string;
  data: unknown;
}
export class DefaultHttpResponse {
  public success(
    data: unknown,
    message: string,
    statusCode?: HttpStatus,
  ): HttpResponse {
    if (!statusCode) {
      statusCode = HttpStatus.OK;
    }

    return {
      statusCode,
      message,
      data,
    };
  }

  public async observableHandler<T>(
    obs: Observable<T>,
    message: string,
    statusCode?: HttpStatus,
  ): Promise<HttpResponse> {
    let result: HttpResponse;
    if (!statusCode) {
      statusCode = HttpStatus.OK;
    }

    await obs
      .forEach((data) => {
        result = this.success(
          data,
          message,
          statusCode,
        );
      })
      .catch((error) => {
        const statusCode = 
          HTTP_CODE_FROM_GRPC[error.code] || HttpStatus.INTERNAL_SERVER_ERROR;

        throw new HttpException(
          {
            message: error.details,
            error: HttpStatus[statusCode],
            statusCode,
          },
          statusCode,
        );
      });
    return result;
  }
}
