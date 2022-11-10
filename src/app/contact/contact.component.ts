import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../service/email.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  dataSaved = false;
  userForm:any;
  message = null;
  submitSuccess =false;
  constructor(public emailservice: EmailService, private formbulider: FormBuilder ) { }


  ngOnInit() : void {
this.userForm = this.formbulider.group(
  {
    names: new FormControl(' ',[Validators.required]),
    email : new FormControl(' ', [Validators.required]),
    message : new FormControl(' ', [Validators.required])
  }
)
  }




  onFormSubmit() {
    console.log(this.userForm.value);
    this.emailservice.AddToExcel(this.userForm.value).subscribe((res : any) => {
      console.log("Data Successfully Submitted");
      this.submitSuccess = true;
      this.userForm.reset();
    })
  }


 




}
