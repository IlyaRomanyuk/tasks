module.exports = [
  {
    block: 'modal', cls: 'fade', attrs: { 'id': 'ID2' }, content: [
      {
        elem: 'dialog', cls: 'modal-dialog-centered modal-lg', content: [
          {
            elem: 'header', content: [
              { elem: 'title', content: 'Второе модальное окно' },
              { elem: 'close', content: { block: 'fi', mods: { icon: 'close' } } },
            ]
          },
          {
            elem: 'body', content: [
              { tag: 'p', content: 'Содержимое второго модального окна' },
              { tag: 'p', content: 'Содержимое второго модального окна' },
              { tag: 'p', content: 'Содержимое второго модального окна' },
              { tag: 'p', content: 'Содержимое модального окна' },
              { tag: 'p', content: 'Содержимое модального окна' },

            ]
          },
          {
            elem: 'footer', content: [
              { tag: 'a', attrs: { 'data-toggle': 'modal', 'href': '#ID3', 'id': 'link' }, content: 'Второе модальное окно' },
              { block: 'btn', content: 'Сохранить' },
            ]
          },
        ]
      },
    ]
  },
];
