import { makeAutoObservable } from 'mobx';
import { HourType } from '../const';

class HoursType {
  hoursType = HourType.academic;

  constructor() {
    makeAutoObservable(this);
  }

  setHoursType(type) {
    console.log(type);
    this.hoursType = type;
  }
}

export default new HoursType();
