import { Component } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
})
export class AlunoComponent {
  alunos: any = [];

  constructor() {}

  novo() {}
  editar(aluno: any) {}
  excluir(aluno: any) {}
}
