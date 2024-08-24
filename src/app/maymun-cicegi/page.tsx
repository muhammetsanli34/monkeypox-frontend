import Overlay from "../../components/overlay";
import QandACarousel from "../../page-sections/QandaCarousel";
import QandA from "../../page-sections/qanda";
export default function Monkeypox() {
  return (
    <>
      <Overlay
        title="Maymun Çiçeği"
        breadcrumb={[
          {
            link: "/",
            text: "Anasayfa",
          },
          {
            link: "/monkeypox",
            text: "Maymun Çiçeği",
          },
        ]}
      />

      <div className="container mx-auto mt-12">
        <h2 className="text-4xl text-left font-bold text-primary mt-12">
          Sıkça Sorulan Sorular
        </h2>
        <hr className="w-64 mr-auto border-2 border-primary my-6" />

        <div
          className="grid grid-cols-1
        lg:grid-cols-2 gap-8
      "
        >
          <QandA />
          <QandACarousel />
        </div>
      </div>
    </>
  );
}
