module.exports = {
  block: 'page',
  title: 'Float',
  content: [
    {
      cls: 'container', content: [
        {
          cls: 'row', content: [
            {
              block: 'float', content: [
                { elem: 'header', content: 'header' },
                {
                  elem: 'content', content: [
                    {
                      elem: 'sidebar', content: [
                        { elem: 'item-2', content: 'item-2' },
                        { elem: 'item-4', content: 'item-4' },
                      ]
                    },
                    {
                      elem: 'item-3', content: [{ elem: 'item-5', content: 'item-5' }, 'много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста',
                      ]
                    },
                  ]
                },
                { elem: 'footer', content: 'footer' },
              ]
            },
          ]
        },
      ]
    },
  ],
};
