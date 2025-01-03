export default{
    title: 'Featured Post Section',
    name: 'featuredPostSection',
    type: 'object',
    fields:[
        {
            title: 'Heading',
            name: 'heading',
            type: 'string',
        },
        {
            title: 'Featured cards',
            name: 'featuredCards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {title: 'Card Image', name: 'cardImg', type: 'image'},
                        {title: 'Date', name: 'date', type: 'date'},
                        {title: 'Title',name: 'title',type: 'string'},
                        {title: 'Slug', name: 'slug', type: 'string'},
                        {title: 'Id', name: 'id', type: 'number'},
                    ]
                }
            ]
        },
    ]
}