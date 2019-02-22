import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable()
export class AppEffect {
  public baseUrl = environment.baseUrl;

  constructor(protected httpClient: HttpClient) { }

  generateAuthorizationHeader() {
    return  new HttpHeaders({
      'Authorization': 'Client-ID ' + environment.apiKey
    });
  }

  get$(url: string, params: any = null) {

    const headers = this.generateAuthorizationHeader();
    if (params) {
      let Params = new HttpParams();
      const realKeys = Object.keys(params);
      const paramKeys = Object.keys(params);

      Params = this.buildGetParams(realKeys, paramKeys, params, Params);
      return this.httpClient.get(url, {
        params: Params,
        headers
      });
    }
    return this.httpClient.get(url , {headers});
  }

  post$(url: string, payload: any, options = {}) {
    const headers = this.generateAuthorizationHeader();
    return this.httpClient.post(url, payload, {...options, headers});
  }

  delete$(url: string, payload: any) {
    return this.httpClient.delete(url, payload);
  }

  private buildGetParams(realKeys: Array<string>, paramKeys: Array<string>, values: any, httpParams: HttpParams): HttpParams {
    realKeys.forEach((paramName, index) => {
      if (typeof values[paramName] === 'object' && values[paramName]) {
        console.log(values[paramName]);
        const recursiveRealKeys = Object.keys(values[paramName]);
        const recursiveParamKeys = Object.keys(values[paramName]).map((subParamName) => paramKeys[index] + '[' + subParamName + ']');
        httpParams = this.buildGetParams(recursiveRealKeys, recursiveParamKeys, values[paramName], httpParams);
      } else {
        if (values[paramName]) {
          httpParams = httpParams.set(paramKeys[index], values[paramName]);
        }
      }
    });

    return httpParams;
  }
}
