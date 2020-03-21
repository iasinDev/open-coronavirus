/**
 * LoopBack Application
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { Geolocation } from '../model/geolocation';
import { GeolocationWithRelations } from '../model/geolocationWithRelations';
import { LoopbackCount } from '../model/loopbackCount';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class GeolocationControllerService {

    protected basePath = 'http://localhost:3000';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    /**
     * @param where 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public geolocationControllerCount(where?: { [key: string]: object; }, observe?: 'body', reportProgress?: boolean): Observable<LoopbackCount>;
    public geolocationControllerCount(where?: { [key: string]: object; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LoopbackCount>>;
    public geolocationControllerCount(where?: { [key: string]: object; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LoopbackCount>>;
    public geolocationControllerCount(where?: { [key: string]: object; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (where !== undefined && where !== null) {
            queryParameters = queryParameters.set('where', <any>where);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<LoopbackCount>(`${this.configuration.basePath}/geolocations/count`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestBody 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public geolocationControllerCreate(requestBody?: { [key: string]: object; }, observe?: 'body', reportProgress?: boolean): Observable<Geolocation>;
    public geolocationControllerCreate(requestBody?: { [key: string]: object; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Geolocation>>;
    public geolocationControllerCreate(requestBody?: { [key: string]: object; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Geolocation>>;
    public geolocationControllerCreate(requestBody?: { [key: string]: object; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Geolocation>(`${this.configuration.basePath}/geolocations`,
            requestBody,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public geolocationControllerDeleteById(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public geolocationControllerDeleteById(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public geolocationControllerDeleteById(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public geolocationControllerDeleteById(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling geolocationControllerDeleteById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.delete<any>(`${this.configuration.basePath}/geolocations/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param filter 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public geolocationControllerFind(filter?: object, observe?: 'body', reportProgress?: boolean): Observable<Array<GeolocationWithRelations>>;
    public geolocationControllerFind(filter?: object, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GeolocationWithRelations>>>;
    public geolocationControllerFind(filter?: object, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GeolocationWithRelations>>>;
    public geolocationControllerFind(filter?: object, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (filter !== undefined && filter !== null) {
            queryParameters = queryParameters.set('filter', <any>filter);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Array<GeolocationWithRelations>>(`${this.configuration.basePath}/geolocations`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id 
     * @param filter 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public geolocationControllerFindById(id: string, filter?: object, observe?: 'body', reportProgress?: boolean): Observable<GeolocationWithRelations>;
    public geolocationControllerFindById(id: string, filter?: object, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GeolocationWithRelations>>;
    public geolocationControllerFindById(id: string, filter?: object, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GeolocationWithRelations>>;
    public geolocationControllerFindById(id: string, filter?: object, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling geolocationControllerFindById.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (filter !== undefined && filter !== null) {
            queryParameters = queryParameters.set('filter', <any>filter);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<GeolocationWithRelations>(`${this.configuration.basePath}/geolocations/${encodeURIComponent(String(id))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id 
     * @param requestBody 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public geolocationControllerReplaceById(id: string, requestBody?: { [key: string]: object; }, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public geolocationControllerReplaceById(id: string, requestBody?: { [key: string]: object; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public geolocationControllerReplaceById(id: string, requestBody?: { [key: string]: object; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public geolocationControllerReplaceById(id: string, requestBody?: { [key: string]: object; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling geolocationControllerReplaceById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.configuration.basePath}/geolocations/${encodeURIComponent(String(id))}`,
            requestBody,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param where 
     * @param requestBody 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public geolocationControllerUpdateAll(where?: { [key: string]: object; }, requestBody?: { [key: string]: object; }, observe?: 'body', reportProgress?: boolean): Observable<LoopbackCount>;
    public geolocationControllerUpdateAll(where?: { [key: string]: object; }, requestBody?: { [key: string]: object; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LoopbackCount>>;
    public geolocationControllerUpdateAll(where?: { [key: string]: object; }, requestBody?: { [key: string]: object; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LoopbackCount>>;
    public geolocationControllerUpdateAll(where?: { [key: string]: object; }, requestBody?: { [key: string]: object; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (where !== undefined && where !== null) {
            queryParameters = queryParameters.set('where', <any>where);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<LoopbackCount>(`${this.configuration.basePath}/geolocations`,
            requestBody,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id 
     * @param requestBody 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public geolocationControllerUpdateById(id: string, requestBody?: { [key: string]: object; }, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public geolocationControllerUpdateById(id: string, requestBody?: { [key: string]: object; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public geolocationControllerUpdateById(id: string, requestBody?: { [key: string]: object; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public geolocationControllerUpdateById(id: string, requestBody?: { [key: string]: object; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling geolocationControllerUpdateById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<any>(`${this.configuration.basePath}/geolocations/${encodeURIComponent(String(id))}`,
            requestBody,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}