import { Component, computed, inject } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {

  private route = inject( ActivatedRoute );
  public usersService = inject( UsersService );

  public titleLabe = computed( () => {
    if( this.user() ){
      return `User info: ${this.user()?.first_name } ${this.user()?.last_name}`
    }
    return 'User info';
  } )

  // public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) => this.usersService.getUserById( id ) )
    )
  )

  /* constructor () {
    this.route.params.subscribe( params => {
      console.log(params);
    } )
  } */

}
