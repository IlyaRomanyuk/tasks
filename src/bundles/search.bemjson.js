module.exports = {
  block: 'page',
  title: 'Search',
  content: [
    {block: 'search', content: [
        {elem: 'content', content: [
            {elem: 'button', elemMods: {active: true}},
            {elem: 'input', elemMods: {disabled: true}},
          ]},
      ]},
  ],
};
