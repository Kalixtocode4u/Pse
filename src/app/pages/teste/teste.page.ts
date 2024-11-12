import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {

  constructor(private api: ApiService) {}

  ngOnInit() {
  }

  carregaUsuarios(){}

  adicionaUsuarios(){}

  exluirUsuario(){}

}
