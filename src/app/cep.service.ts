import { Cep } from './cep';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})

export class CepService {

  constructor(private http:Http) { }

    buscar(cep:string) {
      return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
               .toPromise()
               .then(response => this.converterResCep(response.json()));
    }

    private converterResCep(cepResposta):Cep {
      let cep = new Cep();
      cep.cep = cepResposta.cep;
      cep.logradouro = cepResposta.logradouro;
      cep.complemento = cepResposta.complemento;
      cep.bairro = cepResposta.bairro;
      cep.cidade = cepResposta.localidade;
      cep.estado = cepResposta.uf;
      return cep;
    }

}
