import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
})
export class AlunoComponent implements OnInit {
  alunos: any = [];

  constructor(private alunoService: AlunoService, private router: Router) {}

  ngOnInit(): void {
    this.alunoService.obterTodos().subscribe((dados: any) => {
      this.alunos = dados;
    });
  }

  novo() {
    this.router.navigate(['/aluno-detalhe/0']);
  }
  editar(aluno: any) {
    this.router.navigate(['/aluno-detalhe/' + aluno.ra]);
  }
  excluir(aluno: any) {
    this.alunoService.delete(aluno._id).subscribe((dados: any) => {
      alert('Aluno excluído com sucesso');
      this.alunoService.obterTodos().subscribe((dados: any) => {
        this.alunos = dados;
      });
    });
  }
}
