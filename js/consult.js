
  const testimonials = [
  {
    name: "Mr. Raji Falana",
    job: "CEO, Fajiworks",
    image: "/images/icons8-male-30.png",
    testimonial:
      "I cannot recommend Smmie Ltd enoungh for their expectional immigration consultant services. As someone who was overwhelmed and confused by the immigration process, their team provided perfect guidance.",
  },
  {
    name: "Mirabel Egbo",
    job: "Chef",
    image: "/images/icons8-female-30.png",
    testimonial:
      " From the very beginning, they made the entire process a stress-free experience for me. Their team was highly knowledgeable and guided me through every step of the way, ensuring that all my documents were in order and deadlines were met. They were always available to answer any questions or concerns I had, and their professionalism and attention to detail gave me peace of mind throughout the entire process. Thanks to Sammie Ltd, I was able to successfully obtain my visa and start a new chapter in my life. ",
  },
  {
    name: "Mike Ogbe",
    job: "UI Designer",
    image: "/images/icons8-male-30.png",
    testimonial:
      "I recently had the pleasure of working with Sammie Ltd for my passport application and I cannot recommend them enough. From start to finish, the process was fast and easy thanks to their expertise and guidance. ",
  },
  {
    name: "Belal Mohammed",
    job: "CEO Bussiness Man",
    image: "/images/icons8-male-30.png",
    testimonial:
      "I cannot thank Sammie Ltd enough for their exceptional services in helping me process my regularization of stay. As an immigrant, navigating through the complex and ever-changing immigration laws can be overwhelming and daunting.",
  },
  {
    name: "Grace Makinde",
    job: " Scholar",
    image: "/images/icons8-female-30.png",
    testimonial:
      "I cannot thank Sammie Ltd enough for their exceptional services in helping me with my passport and visa application. With their expertise and guidance, I was able to successfully obtain my passport and visa, and now I can pursue my dream of studying abroad. ",
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;




var a;
function toggle()
{
  if(a==1)
   {
	document.getElementsByClassName('service-box2').style.display='inline';
	   return a = 0;
   }	
	else
	{
	 document.getElementsByClassName('service-box2').style.display='none';
		return a =1;
	}
}
