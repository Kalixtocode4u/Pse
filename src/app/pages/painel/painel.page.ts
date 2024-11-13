import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.page.html',
  styleUrls: ['./painel.page.scss'],
})
export class PainelPage implements OnInit {

  usuarios:any[] = []

  constructor(private api: ApiService,private nav: NavController) {
    this.listaUsuarios();
  }

  ngOnInit() {
  }

  listaUsuarios(){
    this.api.getUsuarios().subscribe(
      (reponse) => {
        console.log(reponse)
        this.usuarios = reponse
      },
      (error) => {
        console.error(error);
      }
    )
  }

  irHome(){
    this.nav.navigateForward('home');
  }

}
