import { defineEventHandler } from "h3";
export default defineEventHandler(() => {
  return {
    blogs: [
      {
        id: 1,
        img: "assets/images/blog1.png",
        title: {
          en: "The Largest And Oldest Quotations Page On The Web With About 30 Categories",
          ar: "مولد النصوص العربية والإنجليزية والألمانية والألكترونية والأجنبية والأسواق الأخرى",
        },
        type: {
          en: "Web Development",
          ar: "تطوير الويب",
        },
      },
      {
        id: 2,
        img: "assets/images/blog1.png",
        title: {
          en: "The Largest And Oldest Quotations Page On The Web With About 30 Categories",
          ar: "مولد النصوص العربية والإنجليزية والألمانية والألكترونية والأجنبية والأسواق الأخرى",
        },
        type: {
          en: "Web Development",
          ar: "تطوير الويب",
        },
      },
    ],
  };
});
