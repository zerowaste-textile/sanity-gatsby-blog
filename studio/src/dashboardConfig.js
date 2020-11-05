export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fa422ce372db5a999a2cfaa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-paw7x6gp',
                  apiId: '44f282e9-921e-445e-8f8b-3312e4c2279e'
                },
                {
                  buildHookId: '5fa422ce4978c9c1889b3620',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cfnfa2j6',
                  apiId: '4ebac446-4952-48ab-a635-a34c16df040f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zerowaste-textile/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-cfnfa2j6.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
