export default {
    name: "pin",
    title: "pin",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type:"string"
        }, {
            name: "about",
            title: "About",
            type:"string"
        }, {
            name: "destination",
            title: "Destination",
            type:"url"
        }, {
            name: "category",
            title: "Category",
            type:"string"
        }, {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot:true
            }
        }, {
            name: "userId",
            title: "User ID",
            type: "string",
        },
        // create reference or special type
        {
            name: "postedBy",
            title: "PostedBy",
            type: "postedBy",

        }, {
            name: "save",
            title: "Save",
            type: "array",
            // In array every element ,type has save , save is schema
            of: [{type:"save"}]
        },
        {
            name: "comments",
            title: "Comments",
            type: "array",
            of: [{type:"comment"}],
        }
    ]
}