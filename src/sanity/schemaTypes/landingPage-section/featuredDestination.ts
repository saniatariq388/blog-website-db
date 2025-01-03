export  const featuredDestination = {
    title: 'Featured Destination Section',
    name: 'featuredDestinationSection',
    type: 'object',
    fields:[
        {
            title: 'Heading',
            name: 'heading',
            type: 'string',
        },
        {
            title: 'Featured Destination cards',
            name: 'featuredDestinationCards',
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