export default {
    name: "comment",
    title: "Comment",
    type: "document",
    fields: [{
        name: "postedBy",
        title: "PostedBy",
        type:"postedBy"
    },
        // actual comment
        {
            name: "comment",
            title: "Comment",
            type:"string",
        }
    ]
}