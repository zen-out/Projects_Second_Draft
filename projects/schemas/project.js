export default {
  // name of the slug
  name: "project",
  // what you see in the cms
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "date",
      type: "datetime",
    },
    {
      name: "description",
      type: "string",
    },
    {
      name: "projectType",
      title: "Project Type",
      type: "string",
      // options list
      options: {
        list: [
          {
            value: "javascript",
            title: "Javascript",
          },
          {
            value: "java",
            title: "Java",
          },
        ],
      },
    },
    {
      name: "link",
      type: "url",
    },
    {
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
};
