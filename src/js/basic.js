import Inspector from './Inspector';
import { elemButton } from './utils';

const inspector = new Inspector();

inspector.getUpdate();
elemButton.addEventListener('click', () => inspector.getUpdate());

if (navigator.serviceWorker) {
  window.addEventListener('load', async() => {
    try {
      if (navigator.serviceWorker) {
        await navigator.serviceWorker.register('/service.worker.js', {scope: './'});
        console.log('sw registered');
      }
      // await registration.unregister();
    }
    catch (e) {
      console.log(e);
    }
  });
}
