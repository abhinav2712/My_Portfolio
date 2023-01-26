export default {
  name: 'achievement',
  title: 'Achievement',
  type: 'document',
  fields: [
    {
      name:"achTitle",
      title:"AchTitle",
      type:"string"
    },
    {
      name:"achievementImage",
      title:"AchievementImage",
      type:"image",
      options:{
        hotspot:true,
      },
    },
   
    {
      name:"date",
      title:"Date",
      type:"date",
    },
   

    {
      name:"achpoints",
      title:"AchPoints",
      type:"array",
      of:[{type:"string"}],
    },
  ],
}
