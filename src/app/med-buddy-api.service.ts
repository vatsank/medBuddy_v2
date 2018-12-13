import { Transaction } from './transaction';
import { Hospital } from './hospital';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class MedBuddyAPIService {

   baseURL = 'http://localhost:3000/doctors';
   headers = new  HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) {
   }

    findAllHospitals(): Observable<Hospital[]> {

       return this.http.get<Hospital[]>
       ('http://localhost:3000/hospitals');
    }

    findAllTransactions(): Promise<Transaction[]> {

      return this.http.get<Transaction[]>
         ('http://localhost:3000/txns').toPromise();
    }

    getDoctors(): Observable<Doctor[]> {

      return this.http.get<Doctor[]>(this.baseURL);
    }

    addDoctors(doctor: Doctor): Observable<Doctor> {
      return this.http.post<Doctor>(this.baseURL, doctor, {headers: this.headers});
    }

    updateDoctorDetails(doctor: Doctor): Observable<Doctor> {
      const url = `${this.baseURL}/${doctor.id}`;

      return this.http.put<Doctor>(url, doctor, {headers: this.headers});
    }

    removeDoctor(doctor: Doctor): Observable<Doctor> {

      const url = `${this.baseURL}/${doctor.id}`;
      console.log(url);
      return this.http.delete<Doctor>(url, {headers: this.headers});
    }
}
