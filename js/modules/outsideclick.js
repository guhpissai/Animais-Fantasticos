export default function outSideClick(element, events, callback) {
 const html = document.documentElement;
 const outside = 'data-outside'
 if(!element.hasAttribute(outside)) {
  events.forEach(event => {
   setTimeout(() => html.addEventListener(event, handleOutSideClick));
  })
  element.setAttribute(outside, '');
 }
 function handleOutSideClick(event) {
  if(!element.contains(event.target)) {
   element.removeAttribute(outside)
   events.forEach(event => {
    html.removeEventListener(event, handleOutSideClick);
   })
   callback()
  }
 }
}