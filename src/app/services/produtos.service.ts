import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private URL: string = 'http://localhost:4200/produtos'

  constructor() (private http: HttpClient)

  buscarTodos()
  {

  }
}
