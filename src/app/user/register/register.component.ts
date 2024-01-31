import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, PatternValidator } from '@angular/forms';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  name!: string;
  email!: string;
  password!: string;
  submitted: boolean = false;

  title = 'Registration Form';
  public registrationFormGroup!: FormGroup;

  constructor(private apiService:AuthService) { }
  ngOnInit() {
    this.registrationFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(200), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    });
  }


  public checkError = (controlName: string, errorName: string) => {
    return this.registrationFormGroup.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    if (this.registrationFormGroup.valid) {
      this.submitted = true;

    this.apiService.register(this.registrationFormGroup.value)
      .pipe(first())
      .subscribe({
        next: (response) => {

          alert("Registered")
          console.log(response)
        }, error: (err: any) => {
          alert(err.error)
        }
      })
    }
    //Note: This will work only when we have api available.

  }
}