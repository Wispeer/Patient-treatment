import { Component } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: 'patient.component.html',
})
export class PatientComponent {

  name: string | undefined;
  id: number | undefined;
  gender: string | undefined;

}
