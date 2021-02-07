import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Flower } from '../classes/Flower';

@Injectable({
  providedIn: 'root'
})
export class FloraService {

  private AppURL:string = environment.url
  constructor(public Http: HttpClient) { }

  getData():Observable<Flower[]> {
    return this.Http.get<Flower[]>(this.AppURL)
  }
}
