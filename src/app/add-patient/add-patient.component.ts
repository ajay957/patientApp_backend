import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  patientId=""
  patientName=""
  dateOfAppo=""
  image=""
  mobNo=""
  doctorName=""

  constructor(private api:ApiService){}

  readValue=()=>{
    let data:any={"patientId":this.patientId,"patientName":this.patientName,"dateOfAppo":this.dateOfAppo,"image":this.image,"mobNo":this.mobNo,"doctorName":this.doctorName}
    console.log(data);
    this.api.addPatient(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("patient added successfully")
          this.patientId=""
          this.patientName=""
          this.dateOfAppo=""
          this.image=""
          this.mobNo=""
          this.doctorName=""
        } else {
          alert("something went wrong")
        }
      }
    )  
  }

}
