import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': 'f33d1e66e9mshf350c38f2954fd5p18280cjsn5aa42a7da4de',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
                'useQueryString': 'true'
            },
            setParams: {
                key: 'e40e743af2c94b0c916a8aa618fb4473',
            }
        });
        return next.handle(req);
    }
}