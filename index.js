function makeBookmarkElement(item) {
  if (item.expanded) {
    return `<div data-item-id="${item.id}">${item.title} ${item.url} ${item.title} ${item.description} </div>`
  }
  else return `<div data-item-id="${item.id}"> ${item.title} ${item.rating}</div>`
}

function makeAddFormElement() {
  return `<form> <input type="text" name="hi"> </form>`
}
//$(this).closest('li').data('item-id');

function render() {
  let bookmarks = [...store.items];
  if (store.filter > 0)
    bookmarks = bookmarks.filter(bookmark => bookmark.rating >= store.filter);
    
  let html;
  if (!store.adding)
    html = bookmarks.map(makeBookmarkElement).join('');
  else html = makeAddFormElement();
  
  if (store.error)
    html = `<div>${store.error}</div>` + html; 
  $('main').html(html);
}