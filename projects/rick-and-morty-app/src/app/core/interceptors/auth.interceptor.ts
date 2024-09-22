import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { LoaderService } from "@core/services/loader.service";
import { catchError, finalize, throwError, timer } from "rxjs";

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoaderService);
  timer(100).subscribe(() => { loaderService.isLoading.next(true); }); 

  const request = req.clone({
    setHeaders: {
      'Content-Type': 'application/json'
    }
  });

  return next(request).pipe(
    finalize(() => {
      timer(300).subscribe(() => { loaderService.isLoading.next(false); }); 
    }),
    catchError((error: HttpErrorResponse) => {
      timer(300).subscribe(() => { loaderService.isLoading.next(false); }); 

      const errorMessage = new Error(error.message);
      return throwError(() => errorMessage);
    })
  );
};
