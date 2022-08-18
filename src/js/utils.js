export const body = document.querySelector('body');
export const elemChat = document.querySelector('.chat');
export const elemButton = document.querySelector('.button');
export const elemsBoxNewHeader = Array.from(document.querySelectorAll('.box-new__header'));
export const elemsBoxImg = Array.from(document.querySelectorAll('.box-img'));
export const elemsBoxText = Array.from(document.querySelectorAll('.box-text'));
export const elemsBoxFooter = Array.from(document.querySelectorAll('.box-footer'));

export const elemPopup = `
<div class="popup">
  <div class="popup__block">
    Не удалось загрузить данные. Проверьте подключение и обновите страницу
  </div>
</div>
`;

export function addAnim(elemsBoxNewHeaderArr, elemsBoxImgArr, elemsBoxTextArr, elemsBoxFooterArr) {
  elemsBoxNewHeaderArr.forEach(a => {
    if (!a.classList.contains('anim')) a.classList.add('anim');
    if (!a.classList.contains('box-new__header_anim')) a.classList.add('box-new__header_anim');
    a.textContent = '';
  });

  elemsBoxImgArr.forEach(a => {
    if (!a.classList.contains('anim')) a.classList.add('anim');
    if (!a.classList.contains('box-img_anim')) a.classList.add('box-img_anim');
    a.textContent = '';
  });

  elemsBoxTextArr.forEach(a => {
    if (!a.classList.contains('anim')) a.classList.add('anim');
    if (!a.classList.contains('box-text_anim')) a.classList.add('box-text_anim');
    a.textContent = '';
  });

  elemsBoxFooterArr.forEach(a => {
    if (!a.classList.contains('anim')) a.classList.add('anim');
    if (!a.classList.contains('box-footer_anim')) a.classList.add('box-footer_anim');
    a.textContent = '';
  });
}

export function removeAnim(elemsBoxNewHeaderArr, elemsBoxImgArr, elemsBoxTextArr, elemsBoxFooterArr) {
  elemsBoxNewHeaderArr.forEach(a => {
    if (a.classList.contains('anim')) a.classList.remove('anim');
    if (a.classList.contains('box-new__header_anim')) a.classList.remove('box-new__header_anim');
  });

  elemsBoxImgArr.forEach(a => {
    if (a.classList.contains('anim')) a.classList.remove('anim');
    if (a.classList.contains('box-img_anim')) a.classList.remove('box-img_anim');
  });

  elemsBoxTextArr.forEach(a => {
    if (a.classList.contains('anim')) a.classList.remove('anim');
    if (a.classList.contains('box-text_anim')) a.classList.remove('box-text_anim');
  });

  elemsBoxFooterArr.forEach(a => {
    if (a.classList.contains('anim')) a.classList.remove('anim');
    if (a.classList.contains('box-footer_anim')) a.classList.remove('box-footer_anim');
  });
}

export function printNews(data, elemsBoxNewHeaderArr, elemsBoxImgArr, elemsBoxTextArr, elemsBoxFooterArr) {
  elemsBoxNewHeaderArr.forEach((a,i)=> {
    a.textContent = data.response.news[i].title;
  });
  elemsBoxImgArr.forEach((a,i)=> {
    a.textContent = data.response.news[i].img;
  });
  elemsBoxTextArr.forEach((a,i)=> {
    a.textContent = data.response.news[i].text;
  });
  elemsBoxFooterArr.forEach((a,i)=> {
    a.textContent = data.response.news[i].footer;
  });
}
