import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from '../services/aluno.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css'],
})
export class AlunoDetalheComponent implements OnInit {
  form: FormGroup;
  ra: string = '0';
  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute
  ) {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      ra: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.ra = this.route.snapshot.params['ra'];
    this.alunoService.obterPorRa(this.ra).subscribe((dados: any) => {
      this.form.controls['nome'].setValue(dados.nome);
      this.form.controls['ra'].setValue(dados.ra);
    });
  }

  salvar() {
    if (this.form.valid) {
      if (this.ra != '0') {
        this.alunoService
          .editar({
            ra: this.form.controls['ra'].value,
            nome: this.form.controls['nome'].value,
          })
          .subscribe((dados: any) => {
            alert('Aluno editado com sucesso');
          });
      } else {
        this.alunoService
          .inserir({
            ra: this.form.controls['ra'].value,
            nome: this.form.controls['nome'].value,
          })
          .subscribe((dados: any) => {
            alert('Aluno inserido com sucesso');
          });
      }
    }
  }
}
