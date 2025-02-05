import { Iuser } from './../../interfaces/iuser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  get emailControl() {
    return this.signupForm.get('email');
  }

  getEmailErrorMessage() {
    if (this.emailControl?.hasError('required')) {
      return 'Email cannot be empty';
    }
    if (this.emailControl?.hasError('email')) {
      return 'Looks like this is not an email';
    }
    return '';
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const user: Iuser = this.signupForm.value;

      // Check if the email already exists
      this.userService
        .checkIfUsserExists(user.email)
        .subscribe((emailExists) => {
          if (emailExists) {
            alert('Email is already used!');
          } else {
            // Save the new user
            this.userService.addUser(user).subscribe((success) => {
              if (success) {
                alert('Signup successful!');
                this.signupForm.reset();
              } else {
                alert('Error saving user. Please try again.');
              }
            });
          }
        });
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
