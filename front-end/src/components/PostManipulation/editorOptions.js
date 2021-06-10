const editorOptions = {
  toolbar: {
    buttons: [
      'bold',
      'underline',
      'anchor',
      'h3',
      'h4',
      'quote',
      {
        name: 'pre',
        action: 'append-pre',
        tagNames: ['pre'],
        contentDefault: 'PRE',
      },
      {
        name: 'strikethrough',
        action: 'strikethrough',
        tagNames: ['strike'],
        contentDefault: 'CODE',
      },
    ],
  },
  placeholder: {
    text: 'Tell your story...',
    hideOnClick: false,
  },
};

export default editorOptions;
