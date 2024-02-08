export const course = {
    name: 'course',
    title: 'Course',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Course Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            }
        },
        {
            name: 'description',
            title: 'Course Description',
            type: 'text',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'courseImage',
            title: 'Course Image',
            type: 'image',
        },
        // Array of strings for learning objectives
        {
            name: 'learningObjectives',
            title: 'Learning Objectives',
            type: 'array',
            of: [{ type: 'string' }],
        },
        // Array of strings for course topics
        {
            name: 'topics',
            title: 'Topics',
            type: 'array',
            of: [{ type: 'string' }],
        },
        // Array of strings for course prerequisites
        {
            name: 'prerequisites',
            title: 'Prerequisites',
            type: 'array',
            of: [{ type: 'string' }],
        },
        // Array of mentor objects
        {
            name: 'mentors',
            title: 'Mentors',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', title: 'Name', type: 'string' },
                        { name: 'designation', title: 'Designation', type: 'string' },
                        { name: 'photo', title: 'Photo', type: 'image' },
                    ],
                },
            ],
        },
        // here comming soon initial value is true
        {
            name: 'commingsoon',
            title: 'Comming Soon',
            type: 'boolean',
            initialValue: true,
        },
    ],
};
