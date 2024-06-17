import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {

  private readonly DATA_URL = 'http://217.100.219.254:57400/blocks/height';

  constructor(private http: HttpService){}

  getTransactionInfoById() {
    return this.http.get(this.DATA_URL)
      .pipe(
        map(response => response.data)
      );
  }

}
