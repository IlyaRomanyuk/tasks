module.exports = [
  {tag: 'a', attrs: {'data-toggle': 'modal', 'href': '#ID'}, content: 'Первое модальное окно'},
  {block: 'modal', cls: 'fade', attrs: {'id': 'ID'}, content: [
      {elem: 'dialog', cls: 'modal-dialog-centered modal-lg', content: [
          {elem: 'header', content: [
              {elem: 'title', content: 'Заголовок модального окна'},
              {elem: 'close', content: {block: 'fi', mods: {icon: 'close'}}},
            ]},
          {elem: 'body', content: [
              {tag: 'p', content: 'Содержимое модального окна'},
              {tag: 'p', content: 'Содержимое модального окна'},
              {tag: 'p', content: 'Содержимое модального окна'},
              {tag: 'p', content: 'Содержимое модального окна'},
            ]},
          {elem: 'footer', content: [
              {tag: 'a', attrs: {'data-toggle': 'modal', 'href': '#ID2', 'id': 'link'}, content: 'Второе модальное окно'},
              {block: 'btn', content: 'Сохранить'},
            ]},
        ]},
    ]},
];
