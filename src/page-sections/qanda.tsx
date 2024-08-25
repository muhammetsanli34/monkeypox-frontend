import { useTranslations } from "next-intl";
import Accordion from "../components/accordion";

export default function QandA() {
  const t = useTranslations();
  return (
    <Accordion
      data={[
        {
          // question: "Maymun Çiçeği Nedir?",
          question: t("monkeypox.question1"),
          answer:
            // "Mpox, maymun çiçeği virüsünün neden olduğu bir hastalıktır. Bu viral enfeksiyon, genellikle yakın temas yoluyla insanlar arasında yayılabilir ve bazen de enfekte bir kişinin temas ettiği nesneler ve yüzeyler aracılığıyla çevreden insanlara bulaşabilir. Maymun çiçeği virüsünün bazı vahşi hayvanlar arasında bulunduğu ortamlarda, enfekte hayvanlarla temas eden kişiler de virüsü kapabilir.",
            t("monkeypox.answer1"),
        },
        {
          // question: "Semptomları Nelerdir?",
          question: t("monkeypox.question2"),
          // answer: `
          //     Mpox, çeşitli belirtiler ve semptomlar ortaya çıkarabilir. Bazı kişilerde belirtiler hafif seyrederken, diğerleri daha ciddi bir hastalık geliştirerek tıbbi bakıma ihtiyaç duyabilir. Mpox'un yaygın belirtileri arasında 2-4 hafta sürebilen bir döküntü yer alır. Bu döküntü, ateş, baş ağrısı, kas ağrıları, sırt ağrısı, halsizlik ve şişmiş lenf düğümleri gibi semptomlarla başlayabilir ya da bu belirtiler döküntüyü takip edebilir. Döküntü, genellikle kabarcıklar veya yaralar şeklinde görülür ve yüz, ellerin iç kısımları, ayak tabanları, kasık, genital veya anal bölgeler gibi farklı yerlerde ortaya çıkabilir. Lezyonlar ayrıca ağız, boğaz, anüs, rektum, vajina ya da gözlerde de bulunabilir. Yaraların sayısı bir ile birkaç bin arasında değişebilir. Bazı kişilerde, şiddetli ağrıya neden olabilen rektum iltihabı (proktit) ve idrar yapmayı zorlaştırabilecek genital iltihaplanma görülebilir. Genellikle, mpox belirtileri birkaç hafta içinde, ağrı veya ateş için ilaç gibi destekleyici tedaviyle kendiliğinden düzelir. Ancak, bazı kişilerde hastalık daha şiddetli seyredebilir ya da komplikasyonlara ve hatta ölüme yol açabilir. Yenidoğanlar, çocuklar, hamileler ve bağışıklık sistemi zayıflamış bireyler, özellikle ileri HIV hastalığı olanlar, daha ciddi mpox riski ve ölüm olasılığı taşırlar.
          //     Mpox’un ciddi vakaları, ağız, gözler ve genital bölgede daha büyük ve yaygın lezyonların oluşumu, cilt veya kan enfeksiyonları ve akciğer enfeksiyonlarını içerebilir. Komplikasyonlar arasında, cilt lezyonlarından kaynaklanan ciddi bakteriyel enfeksiyonlar, mpox'un beyin (ensefalit), kalp (miyokardit) veya akciğerleri (pnömoni) etkilemesi ve göz sorunları yer alabilir. Ciddi mpox vakaları, hastaneye yatış, destekleyici bakım ve lezyonların şiddetini azaltmak ve iyileşme süresini hızlandırmak için antiviral tedavi gerektirebilir.
          //     Elde edilen verilere göre, mpox vakalarının %0.1 ile %10'u arasında ölümle sonuçlandığı bildirilmiştir. Ancak, farklı bölgelerde ölüm oranlarının, sağlık hizmetlerine erişim durumu ve bağışıklık sistemi baskılanması gibi çeşitli faktörlere bağlı olarak değişebileceği unutulmamalıdır.`,
          answer: (
            <>
              <p className="text-lg">{t("monkeypox.answer2p1")}</p>
              <p className="text-lg">{t("monkeypox.answer2p2")}</p>
              <p className="text-lg">{t("monkeypox.answer2p3")}</p>
            </>
          ),
        },
        {
          // question: "Nasıl Bulaşır?",
          question: t("monkeypox.question3"),
          answer: (
            <>
              <h3 className="font-bold text-lg my-4">
                {t("monkeypox.answer3t1")}
              </h3>
              <p className="text-lg">{t("monkeypox.answer3p1")}</p>
              <p className="text-lg">{t("monkeypox.answer3p2")}</p>
              <p className="text-lg">{t("monkeypox.answer3p3")}</p>
              <p className="text-lg">{t("monkeypox.answer3p4")}</p>
              <p className="text-lg">{t("monkeypox.answer3p5")}</p>
              <h3 className="font-bold text-lg my-4">
                {t("monkeypox.answer3t2")}
              </h3>
              <p className="text-lg">{t("monkeypox.answer3p6")}</p>
              <p className="text-lg">{t("monkeypox.answer3p7")}</p>
              <h3 className="font-bold text-lg my-4">
                {t("monkeypox.answer3t3")}
              </h3>
              <p className="text-lg">{t("monkeypox.answer3p8")}</p>
              <p className="text-lg">{t("monkeypox.answer3p9")}</p>
              <p className="text-lg">{t("monkeypox.answer3p10")}</p>
              <p className="text-lg">{t("monkeypox.answer3p11")}</p>
            </>
          ),
        },
        {
          question: t("monkeypox.question4"),
          answer: (
            <>
              <p className="text-lg">{t("monkeypox.answer4p1")}</p>
              <p className="text-lg">{t("monkeypox.answer4p2")}</p>
            </>
          ),
        },
        {
          question: t("monkeypox.question5"),
          answer: (
            <>
              <p className="text-lg">{t("monkeypox.answer5p1")}</p>
              <p className="text-lg">{t("monkeypox.answer5p2")}</p>
              <p className="text-lg">
                {t("monkeypox.answer5p3")}
                <ul
                  className="list-disc pl-6 text-lg my-4"
                  // dangerouslySetInnerHTML={{
                  //   __html: t("monkeypox.answer5listElements"),
                  // }}
                >
                  {t("monkeypox.answer5listElements")
                    .split(".")
                    .map((item) => item && <li>{item}</li>)}
                </ul>
              </p>
              <p className="text-lg">{t("monkeypox.answer5p4")}</p>
            </>
          ),
        },
        {
          question: t("monkeypox.question6"),
          answer: (
            <>
              <p className="text-lg">{t("monkeypox.answer6p1")}</p>
              <p className="text-lg">{t("monkeypox.answer6p2")}</p>
              <p className="text-lg">{t("monkeypox.answer6p3")}</p>
              <ul className="list-disc pl-6 text-lg my-4">
                {t("monkeypox.answer6listElements")
                  .split(".")
                  .map((item) => item && <li>{item}</li>)}
              </ul>
              <p className="text-lg">{t("monkeypox.answer6p4")}</p>
              <ul className="list-disc pl-6 text-lg my-4">
                {t("monkeypox.answer6listElements2")
                  .split(".")
                  .map((item) => item && <li>{item}</li>)}
              </ul>
            </>
          ),
        },
        {
          question: t("monkeypox.question7"),
          answer: (
            <>
              <p className="text-lg">{t("monkeypox.answer7p1")}</p>
              <p className="text-lg">{t("monkeypox.answer7p2")}</p>
              <p className="text-lg">{t("monkeypox.answer7p3")}</p>
            </>
          ),
        },
        {
          question: t("monkeypox.question8"),
          answer: (
            <>
              <p className="text-lg">{t("monkeypox.answer8p1")}</p>
              <p className="text-lg">{t("monkeypox.answer8p2")}</p>
              <p className="text-lg">{t("monkeypox.answer8p3")}</p>
            </>
          ),
        },
        {
          question: t("monkeypox.question9"),
          answer: <p>{t("monkeypox.answer9")}</p>,
        },
        {
          question: t("monkeypox.question10"),
          answer: (
            <>
              <p>{t("monkeypox.answer10p1")}</p>
              <p>{t("monkeypox.answer10p2")}</p>
              <p>{t("monkeypox.answer10p3")}</p>
              <p>{t("monkeypox.answer10p4")}</p>
              <p>{t("monkeypox.answer10p5")}</p>
              <p>{t("monkeypox.answer10p6")}</p>
            </>
          ),
        },
        {
          question: t("monkeypox.question11"),
          answer: <p>{t("monkeypox.answer11")}</p>,
        },
        {
          question: t("monkeypox.question12"),
          answer: <p>{t("monkeypox.answer12")}</p>,
        },
      ]}
    />
  );
}
