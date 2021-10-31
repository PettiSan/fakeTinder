module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What are we going to create?',
        choices: [
          { name: 'Component', value: 'components' },
          { name: 'Page', value: 'pages' },
        ],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: function (data) {
      var actions = []
      switch (data?.type) {
        case 'components':
          actions.push({
            type: 'add',
            path: `../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx`,
            templateFile: 'templates/Components/Component.tsx.hbs',
          })
          actions.push({
            type: 'add',
            path: `../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx`,
            templateFile: 'templates/Components/stories.tsx.hbs',
          })
          actions.push({
            type: 'add',
            path: `../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx`,
            templateFile: 'templates/Components/test.tsx.hbs',
          })
          break
        case 'pages':
          actions.push({
            type: 'add',
            path: '../src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
            templateFile: 'templates/Pages/Page.tsx.hbs',
          })
          break
        default:
          break
      }
      return actions
    },
  })
}
