import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentfulOptionsService {

  constructor(
    private _client: HttpClient
  ) { }

  public get(): Observable<string> {
    return this._client.get<{accessToken: string}>(`https://localhost:5001/api/contentful-options/access-token`)
    .pipe(
      map(x => x.accessToken)
    );
  }
}
