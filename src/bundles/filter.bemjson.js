const arr = [
  {name: 'aurora', quant: '9'}, {name: 'pit', quant: '9'}, {name: 'pecahta', quant: '4'}, {name: 'сибртех', quant: '3'},
];
module.exports = {
  block: 'page',
  title: 'Filter',
  content: [
    {cls: 'container', content: [
        {cls: 'row  justify-content-center', content: [
            {block: 'filter', content: [
                {elem: 'title', content: 'поиск по характеристикам'},
                {elem: 'section', content: [
                    {elem: 'label', content: 'Цена товара (р)'},
                    {elem: 'price', content: [
                        {block: 'range', content: [
                            {elem: 'slider', attrs: {'id': 'slider'}},
                            {elem: 'values', content: [
                                [...new Array(2)].map((v, i) => {
                                  return {elem: `first-${i + 1}`};
                                }),
                              ]},
                          ]},
                      ]},
                  ]},
                {elem: 'section', content: [
                    {elem: 'label', content: 'Тип'},
                    {elem: 'option', content: [
                        {block: 'check', content: [
                            {tag: 'label', content: [
                                {tag: 'input', attrs: {'type': 'checkbox', 'name': 'type'}},
                                {tag: 'span'},
                                {tag: 'p', content: ['Маска сварщика']},
                              ]},
                          ]},
                        {elem: 'count', tag: 'span', content: '(25)'},
                      ]},
                  ]},
                {elem: 'section', content: [
                    {elem: 'label', mods: {'br': true}, content: [
                        'Бренд', {elem: 'image', content: [{block: 'fi', mods: {icon: 'information'}}]},
                      ]},
                    arr.map((val) => {
                      return {elem: 'option', mods: {'br': true}, content: [
                          {block: 'check', content: [
                              {tag: 'label', content: [
                                  {tag: 'input', attrs: {'type': 'checkbox', 'name': 'brand'}},
                                  {tag: 'span'},
                                  {tag: 'p', content: `${val.name}`},
                                ]},
                            ]},
                          {elem: 'count', tag: 'span', content: `(${val.quant})`},
                        ]};
                    }),
                  ]},
                {elem: 'section', content: [
                    {elem: 'label', content: 'Choosing'},
                    {elem: 'list', content: [
                        {block: 'select', tag: 'select', attrs: {'name': 'select'}, content: [
                            arr.map((val, i) => {
                              return {elem: 'item', tag: 'option', attrs: {'value': `${i} + 1`}, content: `${val.name}`};
                            }),
                          ]},
                      ]},
                  ]},
              ]},
          ]},
      ]},
  ],
};
