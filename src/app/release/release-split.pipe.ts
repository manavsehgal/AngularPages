import {Pipe} from 'angular2/core';

@Pipe({name: 'releaseSplit'})
export class ReleaseSplit {
  transform(value: string, args: string[]) : any {
    switch (args[0]) {
      case 'year': return value.substr(0, value.indexOf('-', 1));
      case 'month': {
        var monthNum = value.substr(value.indexOf('-', 1) + 1, value.indexOf('-', 2) - 2);
        switch (monthNum) {
          case '01': return 'Jan'; case '02': return 'Feb'; case '03': return 'Mar';
          case '04': return 'Apr'; case '05': return 'May'; case '06': return 'Jun';
          case '07': return 'Jul'; case '08': return 'Aug'; case '09': return 'Sep';
          case '10': return 'Oct'; case '11': return 'Nov'; case '12': return 'Dec';
        }
      };
      case 'day': return value.substr(value.indexOf('-', 2) + 4);
    }
  }
}
