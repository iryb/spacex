export const getRandomImage = (): string => {
  const images = [
    "/assets/card-1.jpg",
    "/assets/card-2.jpg",
    "/assets/card-3.jpg",
    "/assets/card-4.jpg",
    "/assets/card-5.jpg",
    "/assets/card-6.jpg",
    "/assets/card-7.jpg",
    "/assets/card-8.jpg",
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  return randomImage;
};
