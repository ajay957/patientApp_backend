import { Component } from '@angular/core';

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

  readValue=()=>{
    let data:any={"patientId":this.patientId,"patientName":this.patientName,"dateOfAppo":this.dateOfAppo,"image":this.image,"mobNo":this.mobNo,"doctorName":this.doctorName}
    console.log(data);
  }

}
