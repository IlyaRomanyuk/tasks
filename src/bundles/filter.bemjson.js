module.exports = {
  block: 'page',
  title: 'Filter',
  content: [
    {block: 'filter', content: [
        {elem: 'inner', content: [
            {elem: 'title', content: 'поиск по характеристикам'},
            {elem: 'price', content: [
                {elem: 'label', content: 'Цена товара (р)'},
                {elem: 'range', attrs: {'id': 'range'}},
                {elem: 'values', content: [
                  [...new Array(2)].map((v, i) => {
                    return {elem: `first-${i + 1}`};
                  }),
                  ]},
              ]},
            {elem: 'type', content: [
                {elem: 'label', content: 'Тип'},
                {elem: 'option', content: [
                    {tag: 'label', content: [
                        {tag: 'input', attrs: {'type': 'checkbox', 'name': 'type'}},
                        {tag: 'span'},
                        {tag: 'p', content: ['Маска сварщика', {tag: 'span', content: '(25)'}]},
                      ]},
                  ]},
              ]},
            {elem: 'brand', content: [
                {elem: 'label', content: [
                  'Бренд', {elem: 'image', content: [{block: 'fi', mods: {icon: 'information'}}]},
                  ]},
                [{name: 'aurora', quant: '9'}, {name: 'pit', quant: '9'}, {name: 'pecahta', quant: '4'}, {name: 'сибртех', quant: '3'}].map((val) => {
                  return {elem: 'option', content: [
                      {tag: 'label', content: [
                          {tag: 'input', attrs: {'type': 'checkbox', 'name': 'brand'}},
                          {tag: 'span'},
                          {tag: 'p', content: [`${val.name}`, {tag: 'span', content: `(${val.quant})`}]},
                        ]},
                    ]};
                }),
              ]},
          ]},
      ]},
  ],
};
