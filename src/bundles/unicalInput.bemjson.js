module.exports = {
  block: 'page',
  title: 'Input',
  content: [
    {block: 'unicalInput', content: [
        {elem: 'content', content: [
            {elem: 'element'},
            {elem: 'label', content: 'Your name', elemMods: {disabled: true}},
          ]},
      ]},
  ],
};
