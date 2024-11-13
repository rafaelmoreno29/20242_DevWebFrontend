import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
})
export class AlunoComponent implements OnInit {
  alunos: any = [];

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.alunoService.obterTodos().subscribe((dados: any) => {
      this.alunos = dados;
    });
  }

  novo() {}
  editar(aluno: any) {}
  excluir(aluno: any) {}
}
