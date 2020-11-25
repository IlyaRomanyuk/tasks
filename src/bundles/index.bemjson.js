module.exports = {
  block: 'page',
  title: 'Пустая',
  content: [
    require('./common/header.bemjson'),
    {block: 'navbar', content: [
        {block: 'logo', content: [
            {elem: 'link'},
          ]},
        {block: 'menu', content: [
            [...new Array(4)].map((value, index) => ({elem: 'link', content: `link ${index + 1}`})),
          ]},
      ]},

    {block: 'wrapper', content: [
        {block: 'content', content: [
            {elem: 'title', content: 'About us'},
            {elem: 'text', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
            {elem: 'inner', content: [...new Array(4)].map((value, index) => {
                return {elem: 'item', content: [
                    {elem: 'card-text', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'},
                    {elem: 'card-btn', content: `show ${index + 1}`},
                  ]};
              })},
          ]},
      ]},
    require('./common/footer.bemjson'),
  ],
};
