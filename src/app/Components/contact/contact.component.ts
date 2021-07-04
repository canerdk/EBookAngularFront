import { Component, OnInit } from '@angular/core';
import { FormBuilder, ValidationErrors } from '@angular/forms';
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
  contactForm!: FormGroup;
  submitted = false;

  constructor( 
    private service: ProviderService,
    private toastr: ToastrService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      message: new FormControl('', Validators.required)
    });
  }

  sendMessage(){
    this.submitted = true;
    if(this.contactForm.valid){
      this.service.postContact(Object.assign({}, this.contactForm.value)).then((data) => {
        this.showSuccess();   
        this.contactForm.reset();
      });
    }
    else{
      this.getFormValidationErrors(); 
      this.showError();      
    }
  }

  get contactFormControl() {
    return this.contactForm.controls;
  }

  getFormValidationErrors() {
    Object.keys(this.contactForm.controls).forEach(key => {
  
    const controlErrors = this.contactForm.get(key)?.errors;
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
