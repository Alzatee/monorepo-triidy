import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { DefaultResponse } from '@core/models/interfaces/default-response';
import { createCharacterQuery, createCharacterSearchQuery } from '@shared/shared-functions';
import { QueryResponseCharacter } from '@core/models/interfaces/query-response-character';
import { QueryResponseCharacters } from '@core/models/interfaces/query-response-characters';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getCharacters(page: number): Observable<DefaultResponse> {
    return this.http.get<DefaultResponse>(`${this.baseUrl}/api/character/?page=${page}`);
  }

  getCharacterByQuery(characterId: number): Observable<QueryResponseCharacter> {
    const query = {
      query: createCharacterQuery(characterId)
    };

    return this.http.post<QueryResponseCharacter>(`${this.baseUrl}/graphql`, query);
  }

  searchCharacterByName(page: number, characterName: string): Observable<QueryResponseCharacters> {
    const query = {
      query: createCharacterSearchQuery(page, characterName)
    };
  
    return this.http.post<QueryResponseCharacters>(`${this.baseUrl}/graphql`, query);
  }
  
}