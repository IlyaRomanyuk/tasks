module.exports = {
  block: 'page',
  title: 'Navigation',
  content: [
    {block: 'navigation', content: [
        {elem: 'nav', content: [
          ['75x85', '75x150', '75x100', '75x200'].map((val) => {
            return {elem: 'item', attrs: {src: `http://placehold.it/${val}`}};
          }),
          ]},
      ]},
  ],
};
