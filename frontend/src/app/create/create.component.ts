import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor( private service:ApiserviceService,private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if(this.getparamid)
    {
      this.service.getSingleData(this.getparamid).subscribe((res)=>{
        console.log(res,'res==>');
        this.medicinesForm.patchValue({
           Name:res.data[0].Name,
           price:res.data[0].price,
           type:res.data[0].type,
           exp:res.data[0].exp,
        });
      });
    }
    

  }

  medicinesForm = new FormGroup({
      'Name':new FormControl('',Validators.required),
      'price':new FormControl('',Validators.required),
      'type':new FormControl('',Validators.required),
      'exp':new FormControl('',Validators.required),
  }) ;
  
  medicinesSubmit() {
    if(this.medicinesForm.valid){
      console.log(this.medicinesForm.value)
      this.service.createData(this.medicinesForm.value).subscribe((res)=>{
        console.log(res,'res==>');
        this.medicinesForm.reset();
        this.successmsg=res.message;

      });
    }
    else{
      this.errormsg = 'all field is required !';
    }
  }


  medicinesUpdate()
  {
    console.log(this.medicinesForm.value,'updatedform');
    if(this.medicinesForm.valid)
    {
      this.service.updateData(this.medicinesForm.value,this.getparamid).subscribe((res)=>{
        console.log(res,'resupdated');
        this.successmsg=res.message;
      });
    }else
    {
          this.errormsg='all field is required';
    }

  }

}
