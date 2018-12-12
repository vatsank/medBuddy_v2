import { Hospital } from './hospital';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedBuddyAPIService {


  constructor(private http: HttpClient) {
   }

    findAllHospitals(): Observable<Hospital[]> {

       return this.http.get<Hospital[]>
       ('http://localhost:3000/hospitals');
    }
}
