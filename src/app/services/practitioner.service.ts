import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PractitionerHttpModel} from '../../libHttp/models/practitionerHttpModel';

@Injectable()
export class PractitionerService {
  getAll(): Observable<PractitionerHttpModel[]> {
    return new Observable<PractitionerHttpModel[]>(subscriber => {
      subscriber.next([{
        id: 'test',
        description: 'test'
      }, {
        id: 'alpha',
        description: 'alpha'
      }]);
    });
  }

  get(id: string): Observable<PractitionerHttpModel> {
    return new Observable<PractitionerHttpModel>(subscriber => {
      subscriber.next({
        id,
        description: 'test' + id
      });
    });
  }
}
