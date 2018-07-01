import { observable } from 'mobx';
import { NavigationActions } from 'react-navigation';

class ObservableListStore {
  @observable cnt: number = 0;
  @observable loading: boolean = false;
}

const observableListStore = new ObservableListStore();
export default observableListStore;
