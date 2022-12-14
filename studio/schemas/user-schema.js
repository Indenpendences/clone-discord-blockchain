export const userSchema = {
  name: "users",
  type: "document",
  title: "Users",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "wallerAddress",
      type: "string",
      title: "Waller Address",
    },
    {
      name: "profileImage",
      type: "image",
      title: "Profile Image",
    },
  ],
};
