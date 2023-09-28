import product01 from "../assets/imgs/product01.jpg";
import product20 from "../assets/imgs/product20.jpg";
import product15 from "../assets/imgs/product15.jpg";
import bg from "../assets/imgs/bg.jpg";

export const data = {
  products: [
    {
      id: 1,
      title: "El örgüsü Bebek Çorabı",
      description:
        "El örgüsü Bebek Çorabı sizin için en iyisidir. Hepsi size alabileceğiniz en iyiyi sunmak için, harika tasarımcılarımız tarafından yaratıldı.",

      price: 30,
      discountPercentage: 30,
      rating: 3.69,
      stock: 94,
      category: "Çorap",
      thumbnail: product01,
      images: [product01, product01],
    },
    {
      id: 2,
      title: "Yetişkin Çorabı",
      description:
        "Yetişkin çorapları, ergenlerden yetişkinlere kadar geniş bir yaş aralığında kullanılan ve ayakları koruyarak konfor sağlayan giyim parçalarıdır. Farklı materyallerden üretilirler, pamuklu, yün, polyester gibi malzemeler tercih edilir. Ayak sağlığına uygun olarak tasarlanan yetişkin çorapları, renk, desen ve kesim çeşitliliği ile moda ve tarzı yansıtmak için kullanılır.",

      price: 60,
      discountPercentage: 30,
      rating: 3.69,
      stock: 200,
      category: "Çorap",
      thumbnail: product20,
      images: [product20, product20],
    },
    {
      id: 3,
      title: "Bebek Çorabı",
      description:
        "Bebek çorapları, bebeklerin hassas ciltleri için özel olarak tasarlanmış, yumuşak ve pamuklu dokusuyla dikkat çeken giyim parçalarıdır. Bebeklerin ayaklarını sıcak tutmak, korumak ve rahat ettirmek için kullanılır. Renkli, sevimli desenlerle ve bebeklerin küçük ayaklarına uygun kesimlerle bebek çorapları, ebeveynlerin tercihleri doğrultusunda seçilir ve bebeklerin giyim tarzını tamamlar.",

      price: 35,
      discountPercentage: 30,
      rating: 3.69,
      stock: 400,
      category: "Çorap",
      thumbnail: product15,
      images: [product15, product15],
    },
    {
      id: 4,
      title: "Yeniyıl Çorabı",
      description:
        "Yeni yıl çorapları, yılın en özel zamanını karşılamak için adımlarınıza mutluluk ve neşe katıyor! Yeni yılın coşkusunu ve heyecanını en iyi şekilde yansıtan bu özel çoraplar, rengarenk tasarımları ve eğlenceli desenleriyle herkesi kendine çekiyor.",

      price: 50,
      discountPercentage: 30,
      rating: 3.69,
      stock: 100,
      category: "Çorap",
      thumbnail: bg,
      images: [bg, bg],
    },
  ],
};
