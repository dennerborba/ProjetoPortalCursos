import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  companyName: string = 'Zentora Pagamentos, Tecnologia e Serviços LTDA';
  companyCNPJ: string = '37.144.007/0001-07';
  companyAddress: string = 'Av. Brasil, 610 - Ponta Aguda, Blumenau - SC';
  companyCEP: string = '89050-000';
  buyersEmail: string = 'compradores@zentora.com.br';
  producersEmail: string = 'infoprodutores@zentora.com.br';
}
