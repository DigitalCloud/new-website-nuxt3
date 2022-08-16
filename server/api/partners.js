import { defineEventHandler } from "h3";
export default defineEventHandler(() => {
  return {
    partner: [
      {
        id: 1,
        dec: {
          en: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
          ar: "مولد النصوص العربية والإنجليزية والألمانية والألكترونية والأجنبية والأسواق الأخرى",
        },
        name: "Linh Nguyen",
        position: "Founder & CEO",
        user_img: "https://randomuser.me/api/portraits/men/32.jpg",
        main_img: "images/partner/partner.png",
      },
      {
        id: 2,
        dec: {
          en: "DCA serves Dignissim ligula netus pellentesque dictumst. Interdum a sem amet egestas ullamcorper aliquam.",
          ar: "مولد النصوص العربية والإنجليزية والألمانية والألكترونية والأجنبية والأسواق الأخرى",
        },
        name: "daniel hamza",
        position: "front-end developer",
        user_img: "https://randomuser.me/api/portraits/men/30.jpg",
        main_img: "images/works/w-1.webp",
      },
    ],
  };
});
