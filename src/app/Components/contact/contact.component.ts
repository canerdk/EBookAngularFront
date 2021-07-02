import { Component, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { ProviderService } from 'src/app/Services/provider.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  msg = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    message: new FormControl('', Validators.required)
  });

  constructor( 
    private service: ProviderService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }

  sendMessage(){
    if(this.msg.valid){
      this.service.postContact(Object.assign({}, this.msg.value)).then((data) => {
        this.showSuccess();   
        this.msg.reset();
      });
    }
    else{
      this.getFormValidationErrors(); 
      this.showError();      
    }
  }
  getFormValidationErrors() {
    Object.keys(this.msg.controls).forEach(key => {
  
    const controlErrors = this.msg.get(key)?.errors;
    if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
            
          });
        }
      });
    }


  showSuccess() {
    this.toastr.success('Başarıyla gönderildi.');
  }

  showError() {
    this.toastr.warning('Lütfen gerekli alanları doğru bir şekilde doldurunuz.')
  }


}
