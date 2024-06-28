const treeDetails = [
  {
    id: 1,
    name: "Banyan Tree",
    scientificName: "Ficus benghalensis",
    description:
      "The Banyan tree is a large, evergreen tree with aerial roots. It is the national tree of India and is known for its massive canopy and longevity. Banyan trees are often considered sacred and are a focal point in many religious and cultural practices across India.",
    uses: "Banyan trees are used for shade, ornamental purposes, and traditional medicine. The leaves, bark, and roots have medicinal properties used in Ayurveda.",
    environment:
      "Banyan trees thrive in tropical and subtropical climates, preferring well-drained soil and full sunlight.",
    image: "https://cdn.hswstatic.com/gif/banyan-tree.jpg",
  },
  {
    id: 2,
    name: "Neem Tree",
    scientificName: "Azadirachta indica",
    description:
      "The Neem tree is known for its medicinal properties and is widely used in traditional medicine. Every part of the tree has some utility, making it a valuable plant in Indian culture. Neem is renowned for its antifungal, antibacterial, and antiviral properties.",
    uses: "Neem leaves, bark, and oil are used in traditional medicine, pest control, and skincare products. Neem is also used in agriculture as a natural pesticide.",
    environment:
      "Neem trees grow well in tropical and subtropical regions with well-drained soil. They are drought-resistant and can tolerate high temperatures.",
    image:
      "https://i.pinimg.com/originals/c2/71/e2/c271e24b437c72da12e1879283f9389a.jpg",
  },
  {
    id: 3,
    name: "Mango Tree",
    scientificName: "Mangifera indica",
    description:
      "The Mango tree produces delicious mango fruits, which are popular worldwide. It is a large, evergreen tree with a dense canopy. Mangoes are rich in vitamins and minerals, making them a nutritious fruit.",
    uses: "Mango fruits are consumed fresh, dried, or used in culinary dishes. The wood of the mango tree is used in furniture making, and the leaves are used in religious ceremonies.",
    environment:
      "Mango trees prefer tropical and subtropical climates with well-drained soil. They require full sun and protection from frost.",
    image:
      "https://nurserylive.com/cdn/shop/products/nurserylive-mango-tree-kesar-grafted-plant.jpg?v=1634223741",
  },
  {
    id: 4,
    name: "Peepal Tree",
    scientificName: "Ficus religiosa",
    description:
      "The Peepal tree, also known as the sacred fig, is revered in Hinduism and Buddhism. It is often found near temples and is known for its heart-shaped leaves. The tree has a long lifespan and is considered a symbol of enlightenment and peace.",
    uses: "Peepal leaves, bark, and roots are used in traditional medicine to treat various ailments. The tree is also planted for shade and ornamental purposes.",
    environment:
      "Peepal trees thrive in tropical and subtropical climates. They prefer well-drained soil and full sun but can tolerate partial shade.",
    image: "https://boota.pk/wp-content/uploads/2021/01/Peepal-Tree.jpg",
  },
  {
    id: 5,
    name: "Ashoka Tree",
    scientificName: "Saraca asoca",
    description:
      "The Ashoka tree is known for its beautiful foliage and fragrant flowers. It is considered sacred and is associated with love and fertility. The tree has a slender trunk and a dense canopy of leaves, making it a popular ornamental plant.",
    uses: "Ashoka tree bark is used in traditional medicine to treat gynecological disorders. The tree is also planted for its aesthetic appeal and shade.",
    environment:
      "Ashoka trees grow well in tropical and subtropical climates. They prefer moist, well-drained soil and partial to full sunlight.",
    image:
      "https://m.media-amazon.com/images/I/91Ek2hlBNZL.AC_UF1000,1000_QL80.jpg",
  },
  {
    id: 6,
    name: "Gulmohar Tree",
    scientificName: "Delonix regia",
    description:
      "The Gulmohar tree is known for its flamboyant display of bright red or orange flowers and feathery leaves. It is a fast-growing tree that provides excellent shade. The Gulmohar tree is often planted along roadsides and in gardens for its striking appearance.",
    uses: "Gulmohar trees are primarily used for ornamental purposes. They provide shade and enhance the aesthetic appeal of landscapes.",
    environment:
      "Gulmohar trees thrive in tropical and subtropical climates. They prefer well-drained soil and full sun.",
    image:
      "https://growbilliontrees.com/cdn/shop/articles/Gen-Gar-3.png?v=1703231450&width=1100",
  },
  {
    id: 7,
    name: "Sandalwood Tree",
    scientificName: "Santalum album",
    description:
      "The Sandalwood tree is valued for its fragrant wood, which is used in perfumes, incense, and traditional medicine. The tree has a slender trunk and a dense canopy of leaves. Sandalwood oil is extracted from the heartwood and is highly prized for its aroma.",
    uses: "Sandalwood wood and oil are used in perfumes, incense, and traditional medicine. The tree is also planted for its aesthetic appeal and shade.",
    environment:
      "Sandalwood trees grow well in tropical and subtropical climates. They prefer well-drained soil and partial to full sunlight.",
    image:
      "https://m.media-amazon.com/images/I/81sU022LyWS.AC_UF1000,1000_QL80.jpg",
  },
  {
    id: 8,
    name: "Sal Tree",
    scientificName: "Shorea robusta",
    description:
      "The Sal tree is a large, deciduous tree that is economically important for its timber. It has a straight trunk and a dense canopy of leaves. Sal wood is durable and resistant to termites, making it ideal for construction and furniture making.",
    uses: "Sal wood is used in construction, furniture making, and as fuel. The resin from the tree is used in traditional medicine.",
    environment:
      "Sal trees thrive in tropical and subtropical climates. They prefer well-drained soil and full sun but can tolerate partial shade.",
    image:
      "https://www.rachnakar.com/wp-content/uploads/2021/01/IMG_20201115_120731-scaled.jpg",
  },
  {
    id: 9,
    name: "Teak Tree",
    scientificName: "Tectona grandis",
    description:
      "The Teak tree is known for its durable and water-resistant wood, commonly used in furniture making. It has a straight trunk and a dense canopy of leaves. Teak wood is highly valued for its strength, durability, and resistance to pests.",
    uses: "Teak wood is used in furniture making, shipbuilding, and construction. The tree is also planted for its aesthetic appeal and shade.",
    environment:
      "Teak trees grow well in tropical and subtropical climates. They prefer well-drained soil and full sun.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W9151jparSxLEqGUVRW7DYNcqV4vVMlLBg&s",
  },
  {
    id: 10,
    name: "Jamun Tree",
    scientificName: "Syzygium cumini",
    description:
      "The Jamun tree produces small, dark purple fruits that are sweet and tart. It is a large, evergreen tree with a dense canopy of leaves. Jamun fruits are rich in vitamins and minerals and are used in various culinary dishes and traditional medicine.",
    uses: "Jamun fruits are consumed fresh, made into jams and jellies, or used in traditional medicine. The wood is used for agricultural implements and construction.",
    environment:
      "Jamun trees thrive in tropical and subtropical climates. They prefer well-drained soil and full sun but can tolerate partial shade.",
    image: "https://i.ytimg.com/vi/AcyVXchpFJM/maxresdefault.jpg",
  },
];

export default treeDetails;
