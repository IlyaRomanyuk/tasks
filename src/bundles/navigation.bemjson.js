module.exports = {
  block: 'page',
  title: 'Navigation',
  content: [
    {block: 'navigation', content: [
        {elem: 'nav', content: [
            {elem: 'list', content: [
                ['Мужские часы', 'Женские час', 'Бренды', 'о компании', 'новости', 'магазины', 'акции'].map((val) => {
                  return {elem: 'item', content: [
                      {elem: 'link', content: (`${val}`)},
                    ]};
                }),
              ]},
          ]},
      ]},
  ],
};
