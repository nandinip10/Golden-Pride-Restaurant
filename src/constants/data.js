import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "₹6,000",
    tags: "AU | Bottle",
  },
  {
    title: "Pinot Gris",
    price: "₹5,000",
    tags: "AU | Bottle",
  },
  {
    title: "Cabernet Sauvignon",
    price: "₹4,400",
    tags: "FR | 750 ml",
  },
  {
    title: "Sangiovese",
    price: "₹3,100",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "₹4,600",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "₹20,000",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "₹16,000",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "₹10,000",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "₹6,000",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "₹8,000",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Golden Hat",
    subtitle: "A culinary award for young chefs.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Emerging Chef of the Year.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "For maintenance and ambience.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Chef of the Year.",
  },
];

export default { wines, cocktails, awards };
