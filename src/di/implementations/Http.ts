import {Http} from '../../data/network/implementation/Http';
import {HttpManager} from '../../data/network/interfaces/HttpManager';

export default (): HttpManager => {
  return new Http();
};
