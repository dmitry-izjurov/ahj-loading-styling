import {
  elemChat, elemsBoxNewHeader, elemsBoxImg, elemsBoxText, elemsBoxFooter, addAnim, removeAnim, printNews, elemPopup
} from './utils';

import Worker from '../../web.worker';

export default class Inspector {
  constructor() {
    this.data = undefined;
  }

  getUpdate() {
    addAnim(elemsBoxNewHeader, elemsBoxImg, elemsBoxText, elemsBoxFooter);      
      const worker = new Worker();
      worker.addEventListener('message', (event) => {
        console.log(event);
        const xhr = new XMLHttpRequest();
        const url = 'http://localhost:7070/?method=getNews';
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            try {
              this.data = JSON.parse(xhr.responseText);
              removeAnim(elemsBoxNewHeader, elemsBoxImg, elemsBoxText, elemsBoxFooter);
              printNews(this.data, elemsBoxNewHeader, elemsBoxImg, elemsBoxText, elemsBoxFooter);
              worker.postMessage(this.data);
            } catch (e) {
              elemChat.insertAdjacentHTML('beforeend', elemPopup);
              elemChat.classList.toggle('chat__popup');
            }
          } 
        });
        
      });

      worker.addEventListener('error', (event) => {
        console.error(event);
      });
  }
}
