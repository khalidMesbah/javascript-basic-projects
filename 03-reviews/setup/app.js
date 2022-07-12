/* local reviews data */
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 5,
    name: "khalid mesbah",
    job: "frontend web developer",
    img:
      "person-1.jpeg",
    text:
      "Hi, I’m Khalid, a Junior Frontend Web Developer who is super lucky to find his passion early, I code mainly for fun that’s what I am enjoying, I have hundreds of pens and tens of projects exploring the field of Frontend Web Engineering, I am not a superman but I have superpowers like Patience, Consistency, Hard Work, Passion, Curiosity, Enthusiasm, Challenger Mindset, and Willingness to Continually Learn and Improve.",
  },
];
/* current review id => global variable */
let currentReviewId = reviews.length - 1;
/* buttons */
const prevBtn = document.querySelector(`.prev-btn`);
const nextBtn = document.querySelector(`.next-btn`);
const randomBtn = document.querySelector(`.random-btn`);
/* articles parts */
const personImgEl = document.getElementById(`person-img`);
const authorEl = document.getElementById(`author`);
const jobEl = document.getElementById(`job`);
const infoEl = document.getElementById(`info`);
/* event listeners */
nextBtn.addEventListener(`click`, () => {
  currentReviewId < reviews.length - 1 ?
    currentReviewId++ :
    currentReviewId = 0;
  updateReview();
});
prevBtn.addEventListener(`click`, () => {
  currentReviewId > 0 ?
    currentReviewId-- :
    currentReviewId = reviews.length - 1;
  updateReview();
});
randomBtn.addEventListener(`click`, () => {
  currentReviewId = Math.floor(Math.random() * reviews.length);
  updateReview();
});
const updateReview = () => {
  const newReview = reviews[currentReviewId];
  personImgEl.src = newReview.img;
  authorEl.textContent = newReview.name;
  jobEl.textContent = newReview.job;
  infoEl.textContent = newReview.text;
};
/* load initial review */
updateReview();
