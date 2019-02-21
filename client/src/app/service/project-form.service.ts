import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectFormService {

  constructor(private http:HttpClient) { }

  fetchRoles() {
    return this.http.get('/server/roles');
  }

  generateYml(data) {
    console.log(data);
    var roleParams: string[] = [];
    data['roles'].forEach(element => {
      roleParams.push(element)
    });
    data['roles'] = roleParams;
    console.log(data);
    const options = {headers: {'Content-Type': 'application/json'}};
    return this.http.post<any>('/server/create', JSON.stringify(data), options);
  }
}
