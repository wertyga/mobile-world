import { useObserver } from 'mobx-react';
import useStores from './useStores';

export default selector => useObserver(() => selector(useStores()));
