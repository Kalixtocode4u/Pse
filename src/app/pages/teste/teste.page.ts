import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IUsuario } from 'src/app/interfaces/iusuario';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {

  constructor(private api: ApiService, private nav: NavController) {
    //this.obtemUsuarios()
    //this.obtemUsuarioPorId(2);
    //this.adicionaUsuario("test", "teste@email.com", "sagrado")
    //this.updateUsuario(4, 'suscesso', 'parabens@email.com', 'tudocerto');
    //this.exluirUsuario(3);
    //this.entrarUsuario('filmeDoPele@email.com','hexacampeao')
  }

  ngOnInit() {
  }

  async obtemUsuarios(){
    this.api.getUsuarios().subscribe(
      (response) => {
        console.table(response);
      },
      (error) => {
        console.error('Erro ao obter dados; ' + error)
      }
    );
    
  }

  async obtemUsuarioPorId(id: number,){
    this.api.getUsuarioById(id).subscribe(
      (response) => {
        console.table(response);
      },
      (error) => {
        console.error('Erro ao obter dados; ' + error)
      }
    );
  }

  async adicionaUsuario(nome: string, email: string, senha: string){
    const novoUsuario: IUsuario = {nome , email, senha}
    this.api.postUsuario(novoUsuario).subscribe(
      (response) => {
        console.log('Api response:' + response)
      },
      (error) => {
        console.error('Erro ao obter dados; ' + error)
      }
    );
  }

  async updateUsuario(id: number, nome: string, email: string, senha: string){
    const novoUsuario: IUsuario = {nome , email, senha}
    this.api.putUsuario(id, novoUsuario).subscribe(
      (response) => {
        console.log('Api response: ' + response);
      },
      (error) => {
        console.error('Erro ao obter dados; ' + error)
      }
    );
  }

  async exluirUsuario(id: number){
    this.api.deleteUsuario(id).subscribe(
      (response) => {
        console.log('Usuario deletado com sucesso');
      },
      (error) => {
        console.error('Erro ao excluir usuario')
      }
    );
  }

  entrarUsuario(email: string, senha: string){
    const usuario: IUsuario = {nome: '' , email, senha}
    this.api.loginUsuario(usuario).subscribe(
      (response) => {
        console.log('Api response:' + response)
      },
      (error) => {
        console.error('Erro ao obter dados; ' + error)
      }
    )
  }

  irHome(){
    this.nav.navigateForward('home');
  }
}
