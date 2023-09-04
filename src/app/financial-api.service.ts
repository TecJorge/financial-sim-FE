import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  sendRequest(data: any) {
    return this.http.post('http://localhost:8080/finance_sim/calculate_instalment', data);
  }

  saveSimulation(data:any){
    return this.http.post('http://localhost:8080/finance_sim/save_sim',data)
  }
}