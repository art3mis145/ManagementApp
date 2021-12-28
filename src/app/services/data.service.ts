import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SvDesc } from '../models/sinhvien';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Sinhvien {
  fullname: string;
  email: string;
  dob: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public data: any;
  constructor(private http: HttpClient) {}

  // deleteSv(name: any) {
  //   this.http.delete<Sinhvien>(environment.URL + '/api/DelSv?name=' + name);
  // }
  // insertItem(sinhvien: SvDesc): Observable<SvDesc> {
  //   return this.http.post<SvDesc>(
  //     'http://localhost:8000/api/insert/',
  //     sinhvien
  //   );
  // }
  getAllSv() {
    return this.http.get(environment.URL + '/getSv').subscribe((data) => {
      console.log(data);
    });
  }
}
