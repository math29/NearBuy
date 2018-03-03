import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Store} from '../model/store';

@Injectable()
export class StoresService {
  API_URL = "https://data.opendatasoft.com/api/records/1.0/search/?dataset=sirene%40public&facet=rpet&facet=depet&facet=libcom&facet=siege&facet=libapet&facet=saisonat&facet=libnj&facet=libapen&facet=ess&facet=libtefen&facet=categorie&facet=proden&facet=vmaj1&facet=vmaj2&facet=vmaj3&facet=libtu&facet=liborigine&facet=libtca&facet=libreg_new&facet=nom_dept&facet=section&facet=classe&refine.libcom=LYON+7EME&refine.libapen=Autres+commerces+de+d%C3%A9tail+alimentaires+en+magasin+sp%C3%A9cialis%C3%A9";

  constructor(private http: HttpClient) {

  }

  getStoreData(): Observable<Store[]> {
    return this.http.get(this.API_URL).pipe(
      map(object => object['records']),
      map(records => {
        return records.map((record: any) => {
          return new Store(record.fields);
        });
      })
    );
  }
}
