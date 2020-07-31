import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PractitionerHttpModel} from '../../libHttp/models/practitionerHttpModel';

@Injectable()
export class PractitionerService {
  getAll(): Observable<PractitionerHttpModel[]> {
    return new Observable<PractitionerHttpModel[]>(subscriber => {
      subscriber.next([{
        id: 'test',
        description: 'test',
        name: 'toto'
      }, {
        id: 'alpha',
        description: 'alpha',
        name: 'titi'
      }]);
      subscriber.complete();
    });
  }

  get(id: string): Observable<PractitionerHttpModel> {
    return new Observable<PractitionerHttpModel>(subscriber => {
      subscriber.next({
        id,
        name: 'toto',
        description: 'test' + id
      });
      subscriber.complete();
    });
  }
}
