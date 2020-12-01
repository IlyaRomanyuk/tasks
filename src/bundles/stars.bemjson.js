module.exports = {
  block: 'page',
  title: 'Stars',
  content: [
    {block: 'stars', content: [
        {
          url: '100x100',
          title: 'SAMSUNG Galaxy A51 64Gb',
        },

        {
          url: '100x100',
          title: 'SAMSUNG Galaxy A50 16Gb',
        },

        {
          url: '100x100',
          title: 'SAMSUNG Galaxy A20 32Gb',
        },
      ].map((value, index) => {
        return {elem: 'item', attrs: {'id': index + 1}, content: [
            {elem: 'img', attrs: {src: `http://placehold.it/${value.url}`}},
            {elem: 'title', content: value.title},
            {elem: 'inner', content: [
              [...new Array(5)].map((value, i) => {
                return {block: 'star', content: [
                    {block: 'fi', attrs: {'data-id': index + 1, 'data-note': ++i}, mods: {icon: 'myStar'}},
                  ]};
              }),
              ]},
          ]};
      })},
  ],
};
