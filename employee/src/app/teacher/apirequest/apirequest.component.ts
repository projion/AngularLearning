import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/request.service';
import { Observable, map, tap } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-apirequest',
  templateUrl: './apirequest.component.html',
  styleUrls: ['./apirequest.component.css'],
})
export class ApirequestComponent implements OnInit {
  // url = 'https://jsonplaceholder.typicode.com/posts';
  data: any;
  isloading = true;
  dataForApi?: FormGroup;
  dataupdate = false;
  alert = false;
  // constructor(private http: HttpClient) {}
  constructor(
    private requestservice: RequestService,
    private fb: FormBuilder
  ) {}
  result = null;
  //show all data
  ngOnInit(): void {
    this.dataForApi = this.fb.group({
      id: [''],
      userId: [''],
      title: [''],
      body: [''],
    });
    // this.http.get(this.url).subscribe((result) => {
    //   console.log(result);
    //   this.data = result;
    // });

    // this.requestservice.getdata().subscribe((res) => {
    //   console.log(res);
    //   this.data = res;
    // });

    this.requestservice
      .getdata()
      .pipe(
        tap(() => {
          this.isloading = false;
        })
        // map((res: any) => {
        //   return res.filter((p: any) => p.userId == 1);
        // })
      )
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });
  }
  //create data
  ApiFormData() {
    if (!this.dataupdate) {
      this.requestservice.createdata(this.dataForApi.value).subscribe((res) => {
        console.log(this.dataForApi.value);
        this.data.push(res);
        this.dataForApi.reset();
      });
    } else {
      this.requestservice.updatedata(this.dataForApi.value).subscribe((res) => {
        const tempdata = this.data.find((i) => i.id === res.id);
        const position = this.data.indexOf(tempdata);
        this.data[position] = res;
        console.log(res);
        // this.data.push(res);
        this.dataForApi.reset();
        this.alert = true;
        this.dataupdate = false;
      });
    }
  }
  // createdata() {
  //   this.requestservice.createdata(this.dataForApi.value).subscribe((res) => {
  //     console.log(this.dataForApi.value);
  //     this.data.push(res);
  //   });
  // }

  selectdata(data) {
    console.log(data);
    this.dataForApi.patchValue(data);
    this.dataupdate = true;
  }
  deletedata(Id) {
    this.requestservice.deletedata(Id).subscribe((result) => {
      console.log(result);
      this.data = this.data.filter((i) => i.id !== Id);
    });
  }
}
