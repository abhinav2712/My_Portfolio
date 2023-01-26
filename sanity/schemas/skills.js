export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name:"title",
      title:"Title",
      description:"Title of Skill",
      type:"string" 
    },
    {
      name:"Progress",
      title:"progress",
      type:"number",
      description:"Progress of skill from 0 to 100%",
      validation:(Rule) =>Rule.min(0).max(100),
    },
   
    {
      name:"image",
      title:"Image",
      type:"image",
      option:{
        hotspot:true,
      },
    },
  ],
}
