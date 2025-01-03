export default{
    title: 'Popular Destination Section',
    name: 'popularDestinationSection',
    type: 'object',
    fields:[
        {
            title: 'Heading',
            name: 'heading',
            type: 'string',
        },
        {
            title: 'Popular cards',
            name: 'popularCards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {title: 'Card Image', name: 'cardImg', type: 'image'},
                        {title: 'Date', name: 'date', type: 'date'},
                        {title: 'Title',name: 'title',type: 'string'},
                        {title: 'Description',name: 'description',type: 'string'},
                        {title: 'Slug', name: 'slug', type: 'string'},
                        {title: 'Id', name: 'id', type: 'number'},
                    ]
                }
            ]
        },
    ]
}