module.exports = {
  block: 'page',
  title: 'Table',
  content: [
    {block: 'table', cls: 'table-striped  table-bordered', content: [
        {tag: 'thead', cls: 'table-dark', content: [
            {tag: 'tr', content: [
                [...new Array(4)].map((value, index) => {
                  return {tag: 'th', content: `head-${index + 1}`};
                }),
              ]},
          ]},

        {tag: 'tbody', content: [
            [...new Array(16)].map(() => {
              return ({tag: 'tr', content: [
                [...new Array(4)].map((val, index) => {
                  return {tag: 'td', content: `body-${index}`};
                }),
              ]});
            }),
          ]},
      ]},
  ],
};

