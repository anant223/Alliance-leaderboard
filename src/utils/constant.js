const initialUsers = [
  {
    id: 1,
    name: "Alice Cooper",
    offers: "Web Design",
    needs: "Marketing",
    image: "https://i.pravatar.cc/100?img=3",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Bob Dylan",
    offers: "Marketing",
    needs: "Coding",
    image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Amy",
    offers: "Coding",
    needs: "Web Design",
    image: "https://i.pravatar.cc/100?img=1",
    rating: 4.8,
  },
  {
    id: 4,
    name: "David",
    offers: "Coding",
    needs: "Web Developer",
    image: "https://i.pravatar.cc/100?img=4",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Eva",
    offers: "Coding",
    needs: "Web Design",
    image: "https://i.pravatar.cc/100?img=5",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Ivy",
    offers: "Coding",
    needs: "Web Design",
    image: "https://i.pravatar.cc/100?img=9",
    rating: 4.8,
  },
  {
    id: 7,
    name: "Grace",
    offers: "Coding",
    needs: "Web Design",
    image: "https://i.pravatar.cc/100?img=12",
    rating: 4.8,
  },
];



const generateTopic = (offer, need) => {
  const topics = [
    `How can ${offer} skills be applied to ${need}?`,
    `What are the latest trends in ${offer} and ${need}?`,
    `How do ${offer} and ${need} complement each other in business?`,
    `What challenges do you face in ${need} that ${offer} might solve?`,
    `How did you get started in ${offer}?`,
  ];
  return topics[Math.floor(Math.random() * topics.length)];
};

export {initialUsers, generateTopic}