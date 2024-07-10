import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

//This interceptor creates illusion of real server latency
@Injectable()
export class DevInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const env = process.env.ENVIRONMENT;
    if (env !== 'development') {
      return next.handle();
    }
    return new Promise((resolve) => {
      setTimeout(() => resolve(next.handle()), 1500);
    });
  }
}
