import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, concat, concatMap, delay, of, retryWhen, take, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class GenericService {
    constructor(private http: HttpClient) { }

    public get<T>(url: string, endpoint: string, params?: string, headers?: HttpHeaders): Observable<any> {
        //const endpointUri = params ? `${endpoint}/?${params}` : `${endpoint}`;
        return this.http.get<T>(`${url}/${endpoint}` + (params ? `/${params}` : ''), { headers }).pipe(
            retryWhen(errors => errors.pipe(
                concatMap((result: any) => {
                    if (result.code === 504) {
                        return of(result);
                    }
                    return throwError(result);
                }),
                delay(1000),
                take(4),
                o => concat(o, throwError(`No fue posible conectarse al servidor.`))
            ))
        )
    }

    public post<T>(url: string, endpoint: string, model?: any, headers?: HttpHeaders): Observable<any> {
        return this.http.post<T>(`${url}/${endpoint}`, model, { headers });
    }

    public put<T>(url: string, endpoint: string, model?: any, headers?: HttpHeaders): Observable<any> {
        return this.http.put<T>(`${url}/${endpoint}`, model, { headers });
    }

    public patch<T>(url: string, endpoint: string, model?: any, headers?: HttpHeaders): Observable<any> {
        return this.http.patch<T>(`${url}/${endpoint}`, model, { headers });
    }

    public delete<T>(url: string, endpoint: string, params?: string, headers?: HttpHeaders): Observable<any> {
        return this.http.delete<T>(`${url}/${endpoint}` + (params ? `/${params}` : ''), { headers });
    }
}
