import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorListing } from '../Interfaces/doctor-listing';

@Injectable({
  providedIn: 'root'
})
export class DoctorListingService {
  _url: string = '/assets/data/doctor-listing.json';

  constructor(private _http: HttpClient) { }

  public getAllDoctors(): Observable<DoctorListing[]>{
    return this._http.get<DoctorListing[]>(this._url);
  }
}
