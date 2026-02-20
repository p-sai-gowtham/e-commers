const blogs = [
  {
    id: 1,
    title: "Cooking tips make cooking simple",
    excerpt: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat voluptatem nostrum exercitationem ullam corporis suscipit laboriosam.",
    content: `<p>Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
    <h3>"Visiting the camp was wonderful. They have a great program for the children and I can tell they love what they do."</h3>
    <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>`,
    image: "/img/blog/blog-1.jpg",
    heroImage: "/img/blog/details/details-hero.jpg",
    contentImage: "/img/blog/details/details-pic.jpg",
    author: "Michael Scofield",
    authorImage: "/img/blog/details/details-author.jpg",
    authorRole: "Admin",
    date: "May 4, 2019",
    comments: 5,
    category: "Food",
    tags: ["Cooking", "Healthy Food", "Life Style"],
  },
  {
    id: 2,
    title: "6 ways to prepare breakfast for 30",
    excerpt: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat voluptatem nostrum exercitationem ullam corporis suscipit laboriosam.",
    content: `<p>Preparing breakfast for a large group does not have to be stressful. With a few simple strategies, you can create a delicious spread that everyone will enjoy. Start by planning a menu that includes a mix of hot and cold items.</p>
    <p>Consider make-ahead dishes like overnight oats, egg casseroles, and fruit platters. These can be prepared the night before, saving you valuable morning time. Set up a buffet-style serving area so guests can help themselves.</p>
    <h3>"The secret to a great breakfast gathering is preparation and variety — something for everyone at the table."</h3>
    <p>Don't forget beverages! A coffee station with various options, fresh-squeezed juice, and a selection of teas will round out your breakfast spread perfectly.</p>`,
    image: "/img/blog/blog-2.jpg",
    heroImage: "/img/blog/details/details-hero.jpg",
    contentImage: "/img/blog/details/details-pic.jpg",
    author: "Emily Watson",
    authorImage: "/img/blog/details/details-author.jpg",
    authorRole: "Chef",
    date: "May 12, 2019",
    comments: 8,
    category: "Food",
    tags: ["Cooking", "Breakfast", "Tips"],
  },
  {
    id: 3,
    title: "Visit the best organic farms",
    excerpt: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat voluptatem nostrum exercitationem ullam corporis suscipit laboriosam.",
    content: `<p>Organic farming is more than just a trend — it's a return to how food was meant to be grown. Visiting organic farms gives you a firsthand look at sustainable agriculture practices that prioritize soil health and biodiversity.</p>
    <p>From rolling fields of heirloom tomatoes to orchards filled with heritage apple varieties, organic farms offer a sensory experience unlike any other. Many farms welcome visitors for tours, tastings, and pick-your-own experiences.</p>
    <h3>"There is nothing quite like tasting a tomato still warm from the sun, picked right from the vine at an organic farm."</h3>
    <p>Supporting local organic farms not only gives you access to the freshest produce available but also helps sustain farming communities and protect the environment for future generations.</p>`,
    image: "/img/blog/blog-3.jpg",
    heroImage: "/img/blog/details/details-hero.jpg",
    contentImage: "/img/blog/details/details-pic.jpg",
    author: "James Parker",
    authorImage: "/img/blog/details/details-author.jpg",
    authorRole: "Writer",
    date: "June 1, 2019",
    comments: 3,
    category: "Life Style",
    tags: ["Organic", "Farming", "Travel"],
  },
  {
    id: 4,
    title: "Tasty and healthy: best smoothie recipes",
    excerpt: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat voluptatem nostrum exercitationem ullam corporis suscipit laboriosam.",
    content: `<p>Smoothies are one of the easiest ways to pack nutrition into your day. Whether you're fueling up for a workout or looking for a healthy snack, there's a smoothie recipe for every occasion and preference.</p>
    <p>The green powerhouse smoothie combines spinach, banana, almond milk, and a scoop of protein powder for a filling meal replacement. For something sweeter, try blending frozen berries with Greek yogurt and a drizzle of honey.</p>
    <h3>"A great smoothie is all about balance — combine fruits for sweetness, greens for nutrition, and protein for staying power."</h3>
    <p>Pro tip: freeze your fruits in advance for a thicker, creamier smoothie without needing ice. And don't be afraid to experiment with additions like chia seeds, flaxseed, or nut butters.</p>`,
    image: "/img/blog/blog-4.jpg",
    heroImage: "/img/blog/details/details-hero.jpg",
    contentImage: "/img/blog/details/details-pic.jpg",
    author: "Sarah Miller",
    authorImage: "/img/blog/details/details-author.jpg",
    authorRole: "Nutritionist",
    date: "June 15, 2019",
    comments: 12,
    category: "Beauty",
    tags: ["Healthy Food", "Smoothie", "Recipes"],
  },
  {
    id: 5,
    title: "The benefits of eating seasonal produce",
    excerpt: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat voluptatem nostrum exercitationem ullam corporis suscipit laboriosam.",
    content: `<p>Eating seasonally means choosing fruits and vegetables that are naturally harvested during their peak growing season. This practice results in better-tasting produce, more nutritional value, and lower costs at the market.</p>
    <p>Spring brings asparagus, peas, and strawberries. Summer offers an abundance of tomatoes, corn, and stone fruits. Fall is the time for apples, squash, and root vegetables, while winter delivers citrus, kale, and hearty greens.</p>
    <h3>"When you eat with the seasons, every meal becomes a celebration of what nature offers at its very best."</h3>
    <p>Beyond taste and nutrition, eating seasonally reduces the environmental impact of food transportation and supports local farmers who grow what thrives naturally in your region.</p>`,
    image: "/img/blog/blog-5.jpg",
    heroImage: "/img/blog/details/details-hero.jpg",
    contentImage: "/img/blog/details/details-pic.jpg",
    author: "Michael Scofield",
    authorImage: "/img/blog/details/details-author.jpg",
    authorRole: "Admin",
    date: "July 3, 2019",
    comments: 7,
    category: "Food",
    tags: ["Organic", "Healthy Food", "Seasonal"],
  },
  {
    id: 6,
    title: "A guide to the best vegetable markets",
    excerpt: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat voluptatem nostrum exercitationem ullam corporis suscipit laboriosam.",
    content: `<p>Farmers' markets and vegetable markets are experiencing a renaissance as more people seek fresh, locally grown produce. These vibrant marketplaces offer an experience that no supermarket can match.</p>
    <p>The best vegetable markets feature an ever-changing selection of seasonal produce, artisanal products, and knowledgeable vendors who can tell you exactly when and where your food was grown. Many also feature prepared foods, live music, and community events.</p>
    <h3>"A morning at the farmers' market is not just shopping — it's connecting with your community and the food that nourishes you."</h3>
    <p>To make the most of your market visit, arrive early for the best selection, bring reusable bags, and don't be afraid to ask vendors for cooking tips and recipe suggestions.</p>`,
    image: "/img/blog/blog-6.jpg",
    heroImage: "/img/blog/details/details-hero.jpg",
    contentImage: "/img/blog/details/details-pic.jpg",
    author: "Emily Watson",
    authorImage: "/img/blog/details/details-author.jpg",
    authorRole: "Chef",
    date: "July 20, 2019",
    comments: 4,
    category: "Travel",
    tags: ["Travel", "Food", "Life Style"],
  },
];

export const blogCategories = ["All", "Food", "Beauty", "Life Style", "Travel"];

export function getBlogById(id) {
  return blogs.find((b) => b.id === Number(id));
}

export function getBlogsByCategory(category) {
  if (!category || category === "All") return blogs;
  return blogs.filter((b) => b.category === category);
}

export function searchBlogs(query) {
  const q = query.toLowerCase();
  return blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      b.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export function getRecentBlogs(count = 3) {
  return blogs.slice(-count).reverse();
}

export function getRelatedBlogs(currentId, count = 3) {
  return blogs.filter((b) => b.id !== Number(currentId)).slice(0, count);
}

export default blogs;
