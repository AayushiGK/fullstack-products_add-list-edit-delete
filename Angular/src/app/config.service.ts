import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(public http: HttpClient) { }
  // public readonly url = 'http://localhost:4200';
}
