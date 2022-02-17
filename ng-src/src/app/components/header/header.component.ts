import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { catchError, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public user$: Observable<firebase.User> = this.authService.user$;
  destroyed$: Subject<null> = new Subject();
  constructor(private readonly authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout().pipe(
      catchError((error) => of(null)),
      takeUntil(this.destroyed$)
    )
    .subscribe(
      (authState) => {
        this.router.navigate(['home']);
        
      }
    );
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

}
