import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Work } from 'src/interfaces/Work';

@Injectable()
export class WorkService {
  private apiUrl = 'http://localhost:5167/api/Work';
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<Work[]> {
    return this.httpClient.get<Work[]>(this.apiUrl);
  }
  getById(id: string): Observable<Work> {
    return this.httpClient.get<Work>(`${this.apiUrl}/${id}`);
  }
}
