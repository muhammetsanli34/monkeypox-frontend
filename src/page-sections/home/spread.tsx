export default function Spread() {
  return (
    <div className="flex gap-8 items-start mt-24 container mx-auto">
      <img
        src="spread.jpg"
        alt="Maymun Çiçeği Nasıl Yayılır"
        style={{
          height: "400px",
        }}
      />
      <div className="flex flex-col  gap-8">
        <h2 className="text-3xl font-bold uppercase">
          Maymun Çiçeği Nasıl Yayılır?
        </h2>
        <h3 className="text-2xl font-bold text-red-600">
          İNSANDAN İNSANA BULAŞMA
        </h3>
        <p className="text-justify text-gray-500">
          Mpox virüsü, enfekte bir kişiyle temas, cinsel ilişki, konuşma veya
          yakın mesafede solunum gibi durumlarla insandan insana bulaşabilir. Bu
          durumlar, bulaşıcı solunum partiküllerinin oluşmasına yol açabilir.
          Ancak, Dünya Sağlık Örgütü (DSÖ), virüsün farklı ortamlarda ve
          koşullarda yayılma şekliyle ilgili daha fazla araştırmaya ihtiyaç
          duyulduğunu belirtmektedir.
        </p>
        <p className="text-justify text-gray-500">
          Bilim insanlarının bildiği kadarıyla, Mpox virüsü, enfekte bir kişinin
          temas ettiği giysiler, yatak takımları, havlular, nesneler, elektronik
          cihazlar ve yüzeylerde bir süre daha varlığını sürdürebilir. Bu
          eşyalarla temas eden bir kişi, ellerini yıkamadan önce gözlerine,
          burnuna veya ağzına dokunursa virüsü alabilir.
        </p>
      </div>
    </div>
  );
}
