import { Doctor } from './../doctor';
import { MedBuddyAPIService } from './../med-buddy-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-manage-doctors',
  templateUrl: './manage-doctors.component.html',
  styleUrls: ['./manage-doctors.component.css']
})
export class ManageDoctorsComponent implements OnInit {

  @ViewChild('frm') form: any;
  status = false;

  btnText = 'Add';
   doctor: Doctor = {
     id : 0, doctorName: '', location: 'chennai', specializataion: ''
   };
    doctorList: Doctor[];
  editPox: number;
   constructor(private service: MedBuddyAPIService) { }

  ngOnInit() {

    this.service.getDoctors().subscribe(resp => this.doctorList = resp, (err)=>{});
  }

  edit(eachDoctor) {

    this.editPox = this.doctorList.indexOf(eachDoctor);
    this.doctor = eachDoctor;
    this.btnText = 'update';
    this.status = true;
  }

  delete(doctor: Doctor){

    const idxPos = this.doctorList.indexOf(doctor);

    this.service.removeDoctor(doctor).subscribe(resp => {

      console.log('removed');
      this.doctorList.splice(idxPos,1);
    });

  }

  submit() {

    if (this.btnText === 'Add') {

    this.service.addDoctors(this.doctor).subscribe(resp => {
      console.log('added');
      this.doctorList.push(resp);
      this.form.reset();
      this.btnText = 'Add';
    });
  } else {
     this.service.updateDoctorDetails(this.doctor).subscribe(resp =>{
        console.log('updated');
        this.doctorList[this.editPox] = resp;
        this.form.reset();
        this.btnText = 'Add';
     });
  }
  }
}
