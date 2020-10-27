export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f98604220b5880b7331fba0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-jfen24fv',
                  apiId: '2a03540e-b45b-4115-84e1-293983d58cc5'
                },
                {
                  buildHookId: '5f986043151a030d9d8d6c87',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-s7can1ob',
                  apiId: '4aee5cc9-9d4c-4d7f-a768-5dc61dbdf2f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/corneliu10/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-s7can1ob.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
