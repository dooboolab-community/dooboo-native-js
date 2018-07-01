import { observable } from 'mobx';
import { NavigationActions } from 'react-navigation';

class ObservableListStore {
  @observable _cnt: number = 0;
  @observable _loading: boolean = false;
}

const observableListStore = new ObservableListStore();
export default observableListStore;
