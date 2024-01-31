import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  public showPassword: boolean = false;

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  public loginFormGroup!: FormGroup;

  constructor(private apiService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(200), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    });
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.loginFormGroup.controls[controlName].hasError(errorName);
  }

  // onSubmit() {
  //   if (this.loginFormGroup.valid) {
  //     const credentials = this.loginFormGroup.value;

  //     this.apiService.login(credentials)
  //       .pipe(first())
  //       .subscribe({
  //         next: (response) => {
  //         const token = response.access;
  //         this.apiService.setToken(token);
  //         console.log(token)
  //           alert("Login")

  //         if(token){
  //           this.router.navigate(['/transaction-home']);
  //         }
  //         }, error: (err: any) => {
  //           alert(err.error)
  //           console.log(err)
  //         }
  //       })
  //   }
  // }

  onSubmit(){
    alert("Login Successfull!")
    this.router.navigate(['/transaction-home']);
  } // this code is just for testting purpose

  //Note: Uncomment above code when api is available and remove this code of onsubmit() function
}
