
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})

export class EmailComponent implements OnInit {
  emails:any=[];

 

  constructor(private apiservice:ApiserviceService,
    private router:Router,
    private route:ActivatedRoute) { }
    email: any='';
  ngOnInit(): void {
}
onSubmit(){
  this.apiservice.sentmail(this.email).subscribe(()=>{

    alert('successfully sent OTP');
   
  })
}  
}