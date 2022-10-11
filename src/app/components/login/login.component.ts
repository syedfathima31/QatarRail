import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService}  from './login.service';
import { ErrorPopupComponent}  from '../../shared/components/error-popup/error-popup'
import { BsModalService } from 'ngx-bootstrap/modal';
import { WebStorageService } from 'src/app/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  isSubmitted: boolean = false;
  constructor(private fb :FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private readonly modalService: BsModalService,
    private webStorageService:WebStorageService
    ) { }

  ngOnInit(): void {
   
    this.loginForm = this.fb.group({
      username : ['',[Validators.required]],
      password :['',[Validators.required]]
    })
  }

  /**
   * Login on Save
   */
   onSubmit() {
   const loginData = {
      "username": "anishrtvpm@gmail.com",
      "password": "Test123@",
      "grant_type": "password",
      "client_id": "2",
      "client_secret": "tHNTir1jxDTG8o03K0dvaRMm1ljPiO9f1ip4xm0g",
      "scope": "*"
    }
    this.isSubmitted = true;
    if (this.isSubmitted && this.loginForm.valid ) {
      this.loginService.onLogin(loginData).subscribe({
        next: response => {
          if (response) {
            this.webStorageService.saveData('user', response);
            setTimeout(() => {
           this.router.navigate(['/home']);
            }, 1000);
          } else {
          }
        },
        error: err => {
          this.modalService.show(ErrorPopupComponent).content?.showMessage(err.message)
            
        }
      });
    }
   }

}
