import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Patients, data } from 'src/app/components/models/patients.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})

export class HomeComponent implements OnInit {
  patients: Observable<Patients[]> | any;

  constructor(
    private storeService: StoreService,
    private store: Store) {
    }

  ngOnInit(): void {
     this.storeService.getAllPatients().subscribe((data) => {console.log(data);this.patients = data});
    this.getAllPatients();
    console.log('patients', this.patients);
  }

  getAllPatients(): void {
    // this.store.pipe(select((state: any) => {return state.data}))
    // .subscribe((state: any) => {
    //   this.patients.data = state.data;
    //   console.log('this.patients.data', this.patients.data);
    // })
  }


}
