export const blogPage ={
    title: 'Blog Page',
    name: 'blogPage',
    type: 'document',
    fields: [
        {
            title: 'Heading',
            name: 'heading',
            type: 'string'
        },
        {
            title: 'Blog Post Cards',
            name: 'blogPostCards',
            type: 'array',
            of: [
                {
                    type:'object',
                    fields: [
                        {title:'Card Image', name: 'cardImage', type: 'image'},
                        {title:'Title', name: 'title', type: 'string'},
                        {title:'Slug', name: 'slug', type: 'string'},
                        {title:'Description', name: 'description', type: 'array', 
                            of: [{type: 'block'}]},
                        {title:'ID', name: 'id', type: 'number'},
                        {title: 'Date', name: 'date', type: 'date'}
                    ]
                }
            ]
        }
    ]
}