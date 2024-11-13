import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  constructor(private http: HttpClient) {}

  obterTodos() {
    return this.http.get('http://localhost:3000/aluno');
  }
  obterPorId(id: number) {
    return this.http.get('http://localhost:3000/aluno/' + id);
  }
}
