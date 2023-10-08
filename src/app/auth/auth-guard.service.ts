import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.authService.isUserLoggedIn.pipe(
      map((user) => {
        if (user || this.authService.checkIfUserIsLoggedIn()) {
          return true;
        }

        return this.router.createUrlTree(['/auth']);
      })
    );
  }
}

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => inject(PermissionService).canActivate(next, state);

// export const AuthGuardFn: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ):
//   | boolean
//   | UrlTree
//   | Observable<boolean | UrlTree>
//   | Promise<boolean | UrlTree> => {
//   const authService = inject(AuthService);
//   const router = inject(Router);
// };
