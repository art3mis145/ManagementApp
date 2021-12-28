import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SvDesc } from 'src/app/models/sinhvien';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface Sinhvien {
  fullname: string;
  email: string;
  dob: string;
  gender: string;
  job: string;
  subject: string;
}
export interface Giangvien {
  fullname: string;
  email: string;
  dob: string;
  gender: string;
  job: string;
  subject: string;
}
export interface Subject {
  name: string;
  totalSV: number;
}
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
})
export class ManagementComponent implements OnInit {
  subjs: Subject[] = [
    { name: 'Toán', totalSV: 0 },
    { name: 'Vật lý', totalSV: 0 },
    { name: 'Hoá học', totalSV: 0 },
    { name: 'Lịch sử', totalSV: 0 },
    { name: 'Địa lý', totalSV: 0 },
    { name: 'Sinh học', totalSV: 0 },
  ];

  Svs: any;
  Gvs: any;
  p: number = 1;
  // insertFrm!: FormGroup;
  private sinhviensCollection!: AngularFirestoreCollection<Sinhvien>;
  private giangviensCollection!: AngularFirestoreCollection<Giangvien>;
  students!: Observable<Sinhvien[]>;
  teachers!: Observable<Giangvien[]>;
  constructor(
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private service: DataService,
    private http: HttpClient
  ) {
    this.sinhviensCollection = afs.collection<Sinhvien>('sinhvien');
    this.students = this.sinhviensCollection.valueChanges({
      idField: 'id',
    });
    this.students.subscribe((data) => {
      console.log(data);
      this.Svs = data;
    });
    this.giangviensCollection = afs.collection<Giangvien>('giangvien');
    this.teachers = this.giangviensCollection.valueChanges({
      idField: 'id',
    });
    this.teachers.subscribe((data) => {
      console.log(data);
      this.Gvs = data;
    });
  }

  add(
    fullname: any,
    email: any,
    dob: any,
    gender: any,
    job: any,
    subject: any
  ) {
    // gender = 'true' ? true : false;
    if (job == 'student') {
      this.sinhviensCollection.add({
        fullname: fullname,
        email: email,
        dob: dob,
        gender: gender,
        job: job,
        subject: subject,
      });
    } else if (job == 'teacher') {
      this.giangviensCollection.add({
        fullname: fullname,
        email: email,
        dob: dob,
        gender: gender,
        job: job,
        subject: subject,
      });
    }
  }

  deleteSV(name: any) {
    this.sinhviensCollection.doc(name).delete();
  }
  get() {
    let result = this.service.getAllSv();
    console.log(result);
  }
  ngOnInit(): void {
    // this.insertFrm = this.fb.group({
    //   email: ['', Validators.required],
    //   name: ['', [Validators.required]],
    //   dob: [''],
    // });
  }

  // onSubmit() {
  //   if (this.insertFrm.invalid) {
  //     return;
  //   }
  //   let sinhvien = new SvDesc();
  //   //lay thông tin dữ liệu nhập trên form
  //   sinhvien.fullname = this.insertFrm.controls['name'].value; //hoặc item.id = this.insertFrm.controls.id.value;
  //   //...tương tự cho những trường khác

  //   this.service
  //     .insertItem(sinhvien)
  //     .subscribe((data) => console.log(data.fullname)); //gọi với tên hàm tương ứng với bước số 7
  // }
}
