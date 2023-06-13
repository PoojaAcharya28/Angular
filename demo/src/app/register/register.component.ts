import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // constructor( private router: Router) { }


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  onRegister(){
    // this.router.navigate(['/login']);
    
  }

}
