import { Component, NgZone, OnInit } from '@angular/core';
import { AuthOdooService } from 'src/app/services/auth-odoo.service';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	usuario: UsuarioModel;
	usuario$: Observable<UsuarioModel>;
	subscriptionUsuario: Subscription;

	user: string;
	pass: string;
	islog: boolean;

	constructor(private ngZone: NgZone, private _authOdoo: AuthOdooService, private router: Router) {
		this.usuario = new UsuarioModel();
	}

	ngOnInit(): void {
		this.usuario$ = this._authOdoo.getUser$();

		this.subscriptionUsuario = this.usuario$.subscribe((user) => {
			this.ngZone.run(() => {
				this.usuario = user;

				this.checkUser();
			});
		});



////////////////////////////Aqui llamo a iniciar tu tines q hacerlo desde el submit con los datos del login

this.iniciar();


	}

	ngOnDestroy(): void {
		//Called once, before the instance is destroyed.
		//Add 'implements OnDestroy' to the class.
		this.subscriptionUsuario.unsubscribe();
	}

	checkUser() {
		if (this.usuario.connected) {
			//this._taskOdoo.setUser(this.usuario);
			//this._chatOdoo.setUser(this.usuario);

			/*  if(!this._taskOdoo.getInit()){
      this._taskOdoo.setInit();
      this._taskOdoo.notificationPull();
      } */
      console.log("conectado exitosamente");
			this.router.navigate([ '/table' ]);
		} else {
		/* 	this.loading.dismiss();
			this.presentAlertConfirm(); */

      console.log("error conectando");
		}
	}


   iniciar(){
    
/////////////////para  probar

this.usuario.username = "nieves@example.com"
this.usuario.password = "custumer"


    /* this.usuario.username = this.user;
    this.usuario.password = this.pass; */
    this._authOdoo.loginClientApk(this.usuario);
   
  }

}
