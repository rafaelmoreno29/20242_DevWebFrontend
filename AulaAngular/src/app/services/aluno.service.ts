import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  urlApi: String = environment.UrlApi;
  constructor(private http: HttpClient) {}

  obterTodos() {
    return this.http.get(this.urlApi + '/aluno');
  }
  obterPorRa(ra: string) {
    return this.http.get(this.urlApi + '/aluno/' + ra);
  }
  inserir(aluno: any) {
    return this.http.post(this.urlApi + '/aluno', aluno);
  }
  delete(id: string) {
    return this.http.delete(this.urlApi + '/aluno/' + id);
  }
  editar(aluno: any) {
    return this.http.put(this.urlApi + '/aluno/' + aluno.ra, aluno);
  }
}
