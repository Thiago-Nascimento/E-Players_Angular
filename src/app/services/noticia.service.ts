import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  // Variavel criada para armezenar o endereço da API
  url = "http://localhost:3000/noticias";

  // Insere a dependencia HttpClient
  constructor(private httpClient: HttpClient) { }

  // Variavel que armazena as configurações dos Headers da requisição
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Método GET, que vai trazer as notícias da API
  getNoticias(): Observable<Noticia[]> {
    return this.httpClient.get<Noticia[]>(this.url)
  }

  postNoticia(noticia: Noticia): Observable<Noticia> {
    return this.httpClient.post<Noticia>(this.url, JSON.stringify(noticia), this.httpOptions)
  }
  
}
