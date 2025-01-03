export default {
    title: 'About Blog Section',
    name: 'aboutBlogSection',
    type: 'object',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
      {
        title: 'Description',
        name: 'description',
        type: 'array', 
        of: [{type: 'block'}]},
     
    ],
}