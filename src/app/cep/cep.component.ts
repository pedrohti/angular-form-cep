import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';
import { Cep } from '../cep';


@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  cep = new Cep();
  isLoading = false;
  constructor(private cepService:CepService) { }

  ngOnInit() { }

  buscar() {
    this.isLoading = true;
    this.cepService.buscar(this.cep.cep)
        .then((cep:Cep) => {
          this.isLoading = false;
          this.cep = cep
        })
        .catch(() => {
          this.isLoading = false;
          let cep = this.cep.cep; //guarda
          this.cep = new Cep(); //zera
          this.cep.cep = cep; //retorna
          alert('Não foi possível buscar o CEP')
        })
  }
}
