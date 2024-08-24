import Overlay from "../../components/overlay";
import Spread from "../../page-sections/spread";
import style from "./style.module.css";
export default function Symptoms() {
  return (
    <div>
      <Overlay
        title="Mpox Belirtileri"
        breadcrumb={[
          {
            link: "/",
            text: "Anasayfa",
          },
          {
            link: "/symptoms",
            text: "Mpox Belirtileri",
          },
        ]}
      />
      <div className="container mx-auto">
        <p className="my-2 text-gray-600 mt-8">
          Mpox'un yaygın belirtileri genellikle iki ila dört hafta süren ateş,
          baş ağrısı, kas ve sırt ağrıları, düşük enerji seviyesi ve şişmiş lenf
          düğümleri ile başlar.
        </p>
        <p className="my-2 text-gray-600">
          Mpox geçiren kişiler, ciltlerindeki tüm kabarcıklar kabuk bağlayıp
          düştükten ve altında yeni bir deri tabakası oluşana kadar bulaşıcı
          kabul edilir. Bu süreç genellikle iki ila dört hafta sürer. Mpox
          geçirdikten sonra, hastalık yeniden bulaşabilir.
        </p>
        <p className="my-2 text-gray-600">
          Hastalığın şiddetli seyretmesi durumunda, lezyonların şiddetini
          azaltmak ve iyileşme süresini hızlandırmak amacıyla hastane tedavisi,
          destekleyici bakım ve antiviral ilaçlar gerekebilir. Mpox virüsü,
          enfekte bir hayvandan veya virüs taşıyan başka bir insandan
          bulaşabilir.
        </p>
        <p className="my-2 text-gray-600">
          Her virüste olduğu gibi, Mpox virüsünde de enfeksiyonun ardından bir
          kuluçka dönemi vardır. İlk belirtiler genellikle enfeksiyondan sonraki
          5 ile 21 gün arasında ortaya çıkar. Belirtilerin en yaygın görüldüğü
          dönem ise 6 ila 13. günler arasındadır. Mpox belirtileri, geçmişte
          büyük salgınlara neden olmuş olan çiçek hastalığına benzese de, farklı
          bir seyir izleyebilir.
        </p>

        <div
          className="grid
        grid-cols-1
        gap-4
        mt-8
        md:grid-cols-2
        mx-auto
        "
        >
          <div
            className="flex items-center
          "
          >
            <img
              src="/spots.png"
              alt="lesion"
              className={style.symptomImage}
            />
            <h2 className="text-2xl font-bold">
              Lenf düğümlerinde şişme , <br />
              deri döküntüleri
            </h2>
          </div>
          <div
            className="flex items-center
          "
          >
            <img
              src="/fever.png"
              alt="lesion"
              className={style.symptomImage}
            />
            <h2 className="text-2xl font-bold">Ateş</h2>
          </div>
          <div className="flex items-center">
            <img
              src="/backache.png"
              alt="lesion"
              className={style.symptomImage}
            />
            <h2 className="text-2xl font-bold">Sırt Ağrısı</h2>
          </div>
          <div className="flex items-center">
            <img
              src="/headache.png"
              alt="lesion"
              className={style.symptomImage}
            />
            <h2 className="text-2xl font-bold">Baş Ağrısı</h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Spread />
      </div>
    </div>
  );
}
