import { IProduto } from 'src/app/model/iproduto.model.ts/iproduto.model.ts.module';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaProdutos: IProduto[] = []

  constructor(private produtosService: ProdutosService) {}

    ngOnInit(): void{
      this.carregarProdutos();
     }

    carregarProdutos(): void{
      this.produtosService.buscarTodos().subscribe(retorno => {
        this.listaProdutos = retorno;
      })
    }

}
