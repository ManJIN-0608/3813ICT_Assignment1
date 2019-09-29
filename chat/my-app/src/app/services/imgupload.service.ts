import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const SERVER_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class ImguploadService {

  constructor(private http:HttpClient) { }

  imgupload(fd){
    return this.http.post<any>(SERVER_URL +'/upload',fd)
  }
}
