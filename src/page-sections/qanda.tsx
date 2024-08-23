import Accordion from "../components/accordion";

export default function QandA() {
  return (
    <Accordion
      data={[
        {
          question: "Maymun Çiçeği Nedir?",
          answer:
            "Mpox, maymun çiçeği virüsünün neden olduğu bir hastalıktır. Bu viral enfeksiyon, genellikle yakın temas yoluyla insanlar arasında yayılabilir ve bazen de enfekte bir kişinin temas ettiği nesneler ve yüzeyler aracılığıyla çevreden insanlara bulaşabilir. Maymun çiçeği virüsünün bazı vahşi hayvanlar arasında bulunduğu ortamlarda, enfekte hayvanlarla temas eden kişiler de virüsü kapabilir.",
        },
        {
          question: "Semptomları Nelerdir?",
          answer: `
              Mpox, çeşitli belirtiler ve semptomlar ortaya çıkarabilir. Bazı kişilerde belirtiler hafif seyrederken, diğerleri daha ciddi bir hastalık geliştirerek tıbbi bakıma ihtiyaç duyabilir. Mpox'un yaygın belirtileri arasında 2-4 hafta sürebilen bir döküntü yer alır. Bu döküntü, ateş, baş ağrısı, kas ağrıları, sırt ağrısı, halsizlik ve şişmiş lenf düğümleri gibi semptomlarla başlayabilir ya da bu belirtiler döküntüyü takip edebilir. Döküntü, genellikle kabarcıklar veya yaralar şeklinde görülür ve yüz, ellerin iç kısımları, ayak tabanları, kasık, genital veya anal bölgeler gibi farklı yerlerde ortaya çıkabilir. Lezyonlar ayrıca ağız, boğaz, anüs, rektum, vajina ya da gözlerde de bulunabilir. Yaraların sayısı bir ile birkaç bin arasında değişebilir. Bazı kişilerde, şiddetli ağrıya neden olabilen rektum iltihabı (proktit) ve idrar yapmayı zorlaştırabilecek genital iltihaplanma görülebilir. Genellikle, mpox belirtileri birkaç hafta içinde, ağrı veya ateş için ilaç gibi destekleyici tedaviyle kendiliğinden düzelir. Ancak, bazı kişilerde hastalık daha şiddetli seyredebilir ya da komplikasyonlara ve hatta ölüme yol açabilir. Yenidoğanlar, çocuklar, hamileler ve bağışıklık sistemi zayıflamış bireyler, özellikle ileri HIV hastalığı olanlar, daha ciddi mpox riski ve ölüm olasılığı taşırlar. 
              Mpox’un ciddi vakaları, ağız, gözler ve genital bölgede daha büyük ve yaygın lezyonların oluşumu, cilt veya kan enfeksiyonları ve akciğer enfeksiyonlarını içerebilir. Komplikasyonlar arasında, cilt lezyonlarından kaynaklanan ciddi bakteriyel enfeksiyonlar, mpox'un beyin (ensefalit), kalp (miyokardit) veya akciğerleri (pnömoni) etkilemesi ve göz sorunları yer alabilir. Ciddi mpox vakaları, hastaneye yatış, destekleyici bakım ve lezyonların şiddetini azaltmak ve iyileşme süresini hızlandırmak için antiviral tedavi gerektirebilir.
              Elde edilen verilere göre, mpox vakalarının %0.1 ile %10'u arasında ölümle sonuçlandığı bildirilmiştir. Ancak, farklı bölgelerde ölüm oranlarının, sağlık hizmetlerine erişim durumu ve bağışıklık sistemi baskılanması gibi çeşitli faktörlere bağlı olarak değişebileceği unutulmamalıdır.`,
        },
        {
          question: "Nasıl Bulaşır?",
          answer: (
            <>
              <h3 className="font-bold text-lg my-4">
                İnsandan İnsana Bulaşma
              </h3>
              <p className="text-lg">
                Mpox, genellikle mpox hastalığına sahip bir kişiyle yakın temas
                yoluyla bulaşır. Yakın temas, deri teması (örneğin, dokunma veya
                cinsel ilişki), ağızdan ağıza temas (örneğin, öpüşme) ve mpox
                hastalığı olan bir kişiyle yüz yüze görüşme (örneğin, konuşma
                veya yakın solunum, bu da enfekte solunum parçacıklarının
                yayılmasına neden olabilir) gibi durumları içerir. 2022'de
                başlayan küresel salgın sırasında, virüs çoğunlukla cinsel temas
                yoluyla yayıldı. Farklı ortamlarda ve koşullarda mpox'un nasıl
                yayıldığını anlamak için daha fazla araştırma gereklidir.
              </p>
              <p className="text-lg">
                Mpox hastalığı olan kişilerin tüm lezyonları kabuk bağlayıp,
                kabuklar döküldükten sonra yeni bir deri tabakası oluşana kadar,
                gözlerdeki ve vücuttaki (ağız, boğaz, gözler, vajina ve anüs)
                tüm lezyonlar iyileşene kadar enfeksiyon riski taşıdığı kabul
                edilir. Bu süreç genellikle 2 ila 4 hafta sürer.
              </p>
              <p className="text-lg">
                Virüs, mpox hastalığı olan bir kişinin temas ettiği giysiler,
                yatak örtüleri, havlular, nesneler, elektronik eşyalar ve
                yüzeylerde bir süre varlığını sürdürebilir. Başka biri bu
                eşyaları dokunarak enfekte olabilir, özellikle de ellerinde
                kesik veya yaralar varsa veya ellerini yıkamadan gözlerine,
                burunlarına, ağızlarına veya diğer mukoz membranlara
                dokunurlarsa. Kirli yüzeylerin/nesnelerin temizlenmesi ve
                dezenfekte edilmesi ve bu tür eşyalarla temas sonrası ellerin
                yıkanması, bu tür bulaşmayı önlemeye yardımcı olabilir.
              </p>
              <p className="text-lg">
                Virüs, hamilelik sırasında fetüse, doğum sırasında veya
                sonrasında deri teması yoluyla veya mpox hastalığı olan bir
                ebeveynden bir bebek veya çocuğa yakın temas yoluyla da
                bulaşabilir.
              </p>
              <p className="text-lg">
                Semptomsuz (belirti göstermeyen) bir kişiden mpox kapma durumu
                bildirilmiş olsa da, virüsün semptomlar başlamadan veya
                lezyonlar iyileştikten sonra bulaşıp bulaşamayacağı konusunda
                sınırlı bilgi bulunmaktadır. Canlı virüs semen örneklerinde
                izole edilmiş olmasına rağmen, virüsün semen, vajinal sıvılar,
                amniyotik sıvılar, anne sütü veya kan yoluyla ne kadar
                yayılabileceği henüz bilinmemektedir.
              </p>
              <h3 className="font-bold text-lg my-4">
                Hayvandan İnsana Bulaşma
              </h3>
              <p className="text-lg">
                Virüsü taşıyan bir hayvanla fiziksel temas eden kişiler, örneğin
                bazı maymun türleri veya kara kemirgenler (ağaç sincabı gibi),
                mpox hastalığı geliştirebilirler. Temas, hayvan ısırıkları veya
                tırmalamaları yoluyla veya avcılık, deri çıkarma, tuzak kurma
                veya et hazırlama gibi aktiviteler sırasında olabilir. Virüs
                ayrıca yeterince pişirilmemiş kontamine etler yoluyla da
                bulaşabilir.
              </p>
              <p className="text-lg">
                Hayvanlardan mpox kapma riskini azaltmak için, özellikle hasta
                veya ölü olan (etleri ve kanları dahil) vahşi hayvanlarla
                korunmasız temastan kaçınılmalıdır. Virüsün bulunduğu ülkelerde,
                hayvan parçaları veya et içeren yiyeceklerin iyice pişirilmesi
                gerekmektedir.
              </p>
              <h3 className="font-bold text-lg my-4">İnsanlardan Hayvanlara</h3>
              <p className="text-lg">
                Pet köpeklerde virüs tespit edildiğine dair birkaç rapor
                olmuştur. Ancak, bu durumların gerçek enfeksiyonlar mı yoksa
                yüzey kontaminasyonu ile mi ilgili olduğu doğrulanmamıştır.
              </p>
              <p className="text-lg">
                Virüsün birçok hayvan türünde hassasiyeti bilindiğinden, virüsün
                insanlardan hayvanlara yayılma potansiyeli bulunmaktadır.
                Mpox'lu veya şüpheli kişiler, evcil hayvanlar (kediler,
                köpekler, hamsterlar, develiler), çiftlik hayvanları ve vahşi
                hayvanlarla yakın fiziksel temastan kaçınmalıdır.
              </p>
              <p className="text-lg">
                Evcil hayvan sahipleri ve hayvanlarla çalışan kişiler için daha
                ayrıntılı tavsiyelere, WOAH'ın maymun çiçeği virüsünün geri
                dönüşünü azaltma riskine yönelik kılavuzlarında ulaşılabilir.
              </p>
              <p className="text-lg">
                WHO, virüsün doğal rezervuarını daha iyi anlamak ve ülkelerin
                hayvanlardan insanlara veya insanlardan hayvanlara mpox bulaşma
                riskini azaltmalarına yardımcı olmak için Gıda ve Tarım Örgütü
                (FAO) ve Dünya Hayvan Sağlığı Örgütü (WOAH) ile işbirliği
                yapmaya devam etmektedir.
              </p>
            </>
          ),
        },
        {
          question:
            "Eşcinsel, biseksüel erkeklerin mpox hastalığına yakalanma riski daha mı yüksektir?",
          answer: `
              Mpox riski, sadece cinsel olarak aktif olan veya eşcinsel, biseksüel ve diğer erkeklerle cinsel ilişkiye giren erkeklerle sınırlı değildir. Belirtileri olan bir kişiyle yakın temasta bulunan herkes risk altındadır, ayrıca birden fazla cinsel partneri olan kişiler de risk taşır.

              2022/2023 yıllarında birçok ülkede görülen mpox vakalarının çoğunluğu, eşcinsel, biseksüel ve diğer erkeklerle cinsel ilişkiye giren erkekler arasında tespit edilmiştir. Virüsün bu cinsel ağlar içinde kişiden kişiye geçtiği göz önüne alındığında, eşcinsel, biseksüel ve diğer erkeklerle cinsel ilişkiye giren kişiler, enfekte biriyle cinsel ilişkiye girdiklerinde veya yakın temas kurduklarında daha yüksek risk altında olabilirler. Birden fazla veya yeni cinsel partneri olan kişiler en yüksek riski taşır. Eşcinsel, biseksüel ve diğer erkeklerle cinsel ilişkiye giren toplulukları bilinçlendirmek, en yüksek risk altındaki kişileri korumak için hayati öneme sahiptir. Eğer erkek olarak başka erkeklerle cinsel ilişkiye giriyorsanız, riskinizi bilerek kendinizi ve başkalarını korumak için adımlar atın. Mpox ile uyumlu belirtileriniz varsa, hemen bir sağlık kuruluşuna başvurarak test yaptırmanız ve tedavi almanız önemlidir.
                            
                `,
        },
        {
          question: "Mpox ve seks hakkında neler biliyoruz?",
          answer: (
            <>
              <p className="text-lg">
                Mpox, öpüşme, dokunma, oral ve penetratif vajinal veya anal
                cinsel ilişki gibi enfekte bir kişiyle yakın temas yoluyla
                yayılabilir. Birden fazla veya yeni cinsel partneri olan kişiler
                en yüksek risk altındadır.
              </p>
              <p className="text-lg">
                Yeni ve alışılmadık döküntüleri veya lezyonları olan herkes,
                cinsel yolla bulaşan enfeksiyonlar (STI'ler) ve mpox açısından
                test edilene kadar cinsel ilişkiden veya diğer yakın temas
                türlerinden kaçınmalıdır. Unutmayın ki döküntüler vücut içinde,
                ağız, boğaz, genital bölge, vajina ve anüs gibi zor
                görülebilecek yerlerde de bulunabilir.
              </p>
              <p className="text-lg">
                Mpox'un topluluğunuzda veya bulunduğunuz bölgede cinsel yolla
                yayıldığını düşünüyorsanız, salgın kontrol altına alınana kadar
                riskinizi azaltmayı düşünün:
                <ul className="list-disc pl-6 text-lg my-4">
                  <li>
                    Partnerlerinizle mpox belirtileri ve riskleri hakkında
                    açıkça konuşun.
                  </li>
                  <li>
                    Cinsel partnerlerinizle iletişim bilgilerini paylaşın,
                    böylece belirtiler ortaya çıkarsa birbirinizi
                    bilgilendirebilirsiniz.
                  </li>
                  <li>Cinsel ilişkiden bir süre uzak durun.</li>
                  <li>
                    Yeni cinsel partnerlerinizi, tek seferlik partnerleri veya
                    anonim partnerleri azaltın.
                  </li>
                  <li>Sürekli olarak prezervatif kullanın.</li>
                  <li>Grup seksinden kaçının.</li>
                  <li>
                    Seks yapılan mekânlardan (örneğin cruising barlar, saunalar,
                    karanlık odalar, ticari seks mekânları veya seksin para
                    karşılığı yapıldığı diğer mekânlar) kaçının.
                  </li>
                  <li>
                    Cinsel bağlamlarda alkol veya uyuşturucu kullanımından
                    (chemsex dahil) kaçının.
                  </li>
                  <li>Mevcutsa ve uygunsa aşı olma imkanını değerlendirin.</li>
                </ul>
              </p>
              <p className="text-lg">
                Maymun çiçeği virüsünün menide bulunduğu tespit edilmiştir,
                ancak meniden veya vajinal sıvılardan bulaşıp bulaşmadığı henüz
                bilinmemektedir. Prezervatif kullanmak sizi mpox'tan tamamen
                korumaz, ancak riskinizi veya maruziyetinizi azaltabilir ve sizi
                ve diğerlerini HIV ve diğer cinsel yolla bulaşan
                enfeksiyonlardan koruyabilir. Mpox geçiren kişilere iyileştikten
                sonra 12 hafta boyunca prezervatif kullanmaları önerilir.
              </p>
            </>
          ),
        },
        {
          question:
            "Maymun Çiçeği ile enfekte oldum. Başkalarının enfekte olmasını önlemek için ne yapabilirim?",
          answer: (
            <>
              <p className="text-lg">
                Eğer mpox hastasıysanız, sağlık uzmanınız iyileşme sürecinde ne
                yapmanız gerektiği konusunda size tavsiyelerde bulunacaktır.
                Evde mi iyileşmeniz gerektiği yoksa bir sağlık kuruluşunda mı
                tedavi görmeniz gerektiği konusunda ulusal tavsiyelere uyun.
              </p>
              <p className="text-lg">
                Bu süreçte, döküntüleriniz tamamen iyileşene kadar başkalarıyla
                yakın temasta bulunmaktan kaçınmak önemlidir.
              </p>
              <p className="text-lg">
                Evde izolasyon önerildiğinde, birlikte yaşadığınız kişileri
                olabildiğince korumak için şu adımları izleyin:
              </p>
              <ul className="list-disc pl-6 text-lg my-4">
                <li>
                  İhtiyacınız olan şeyleri size ulaştırmaları için
                  arkadaşlarınızdan ve ailenizden yardım isteyin.
                </li>
                <li>Ayrı bir odada izole olun.</li>
                <li>
                  Ayrı bir banyo kullanın veya her kullanımdan sonra
                  dokunduğunuz yüzeyleri temizleyin.
                </li>
                <li>
                  Sık dokunulan yüzeyleri sabun ve suyla, ardından bir ev
                  dezenfektanı ile temizleyin ve dezenfekte edin.
                </li>
                <li>
                  Süpürmekten/elektrik süpürgesi kullanmaktan kaçının (bu, virüs
                  partiküllerini harekete geçirip başkalarına bulaştırabilir).
                </li>
                <li>
                  Ayrı mutfak gereçleri, eşyalar ve elektronik cihazlar kullanın
                  ya da bunları paylaşmadan önce sabun ve suyla veya
                  dezenfektanla iyice temizleyin.
                </li>
                <li>Havlu, yatak örtüsü veya giysileri paylaşmayın.</li>
                <li>
                  Kendi çamaşırlarınızı yıkayın (Yatak örtülerinizi,
                  giysilerinizi ve havlularınızı dikkatlice kaldırın, sallamadan
                  taşıyın, çamaşır makinesine götürmeden önce plastik bir
                  torbaya koyun ve 60 derece üzerinde sıcak su ile yıkayın).
                </li>
                <li>İyi bir havalandırma için pencereleri açın.</li>
                <li>
                  Evdeki herkesin ellerini düzenli olarak sabun ve suyla ya da
                  alkol bazlı el dezenfektanı ile temizlemesini teşvik edin.
                </li>
              </ul>
              <p className="text-lg">
                Evde izole olurken başka biriyle aynı odada bulunmaktan veya
                yakın temastan kaçınamıyorsanız, onların riskini azaltmak için:
              </p>
              <ul className="list-disc pl-6 text-lg my-4">
                <li>Birbirinize dokunmaktan kaçının.</li>
                <li>
                  Ellerinizi sık sık sabun ve suyla ya da alkol bazlı el
                  dezenfektanı ile temizleyin.
                </li>
                <li>
                  Döküntülerinizi giysi veya bandajla kapatın (tekrar izole
                  olana kadar – döküntüleriniz açıkta kaldığında daha iyi
                  iyileşir).
                </li>
                <li>Evdeki pencereleri açarak iyi bir hava akışı sağlayın.</li>
                <li>
                  Siz ve aynı odada bulunduğunuz kişi iyi oturan tıbbi maskeler
                  takın.
                </li>
                <li>Diğer kişilerle aranızda en az 1 metre mesafe bırakın.</li>
              </ul>
            </>
          ),
        },
        {
          question:
            "Mpox hastası birinin tamamen iyileşmesi için nasıl bir bakıma ihtiyacı vardır?",
          answer: (
            <>
              <p className="text-lg">
                Bir kişinin alması gereken bakım, belirtilerine ve daha ciddi
                bir hastalık geliştirme riskine bağlıdır. Mpox olan kişiler,
                sağlık uzmanlarının tavsiyelerine uymalıdır. Belirtiler
                genellikle 2–4 hafta sürer ve genellikle kendi kendine veya ağrı
                ya da ateş için destekleyici bakım (analjezikler ve
                antipiretikler gibi) ile geçer.
              </p>
              <p className="text-lg">
                Evde iyileşen mpox hastalarının yeterince su içmeleri, iyi
                beslenmeleri ve yeterli uyku almaları önemlidir. Kendi kendine
                izole olan kişiler, zihinsel sağlıklarına dikkat etmeli;
                rahatlatıcı ve keyif verici aktiviteler yapmalı, teknolojiyi
                kullanarak sevdikleriyle iletişimde kalmalı, yeterince iyi
                hissediyorlarsa izole haldeyken egzersiz yapmalı ve zihinsel
                sağlıklarıyla ilgili desteğe ihtiyaç duyuyorlarsa bunu talep
                etmelidirler.
              </p>
              <p className="text-lg">
                Mpox hastaları, ciltlerini kaşımaktan kaçınmalı ve döküntülerine
                iyi bakmalıdır. Lezyonlara dokunmadan önce ve sonra ellerini
                yıkamalı, ciltlerini kuru ve açıkta tutmalıdırlar (başka biriyle
                aynı odada olmaları gerekiyorsa, döküntülerini giysi veya
                bandajla kapatmalı ve tekrar izole olana kadar böyle
                kalmalıdır). Döküntüler sterilize su veya antiseptik ile
                temizlenebilir. Ağızdaki yaralar için tuzlu su gargarası
                kullanılabilir, vücutta yaraların neden olduğu rahatsızlığı
                hafifletmek için karbonat ve Epsom tuzlarıyla sıcak banyo
                yapılabilir. Gerekirse lezyonların neden olduğu ağrıyı yönetmek
                için parasetamol kullanılabilir. Daha güçlü bir ağrı kesiciye
                ihtiyaç duyulursa, bir sağlık uzmanına danışılmalıdır.
              </p>
            </>
          ),
        },
        {
          question:
            "Bakımımdaki bir çocukta Maymun Çiçeği varsa ne yapmalıyım?",
          answer: (
            <>
              <p className="text-lg">
                Çocuklar, belirtileri olan biriyle yakın temas halinde
                olduklarında mpox kapabilirler. Evde, kardeşler, ebeveynler,
                bakıcılar veya diğer aile üyeleri aracılığıyla yakın temas
                yoluyla virüse maruz kalabilirler. Afrika'daki bazı bölgelerde,
                çocuklar ve ergenler avlanma, tuzak kurma faaliyetleri veya
                yeterince pişirilmemiş et tüketimi yoluyla virüse maruz
                kalabilirler. Mpox olan biriyle cinsel ilişkiye girmiş olan
                ergenler de risk altındadır. Mpox döküntüleri, ilk başta
                suçiçeği ve diğer viral enfeksiyonlar gibi yaygın çocuk
                hastalıklarına benzeyebilir. Eğer bakımını üstlendiğiniz bir
                çocukta mpox olabileceğini düşündüğünüz belirtiler varsa, bir
                sağlık uzmanından yardım almanız önemlidir. Onlar, çocuğun test
                edilmesi ve gerekli bakımı alması konusunda size yol
                göstereceklerdir.
              </p>
              <p className="text-lg">
                Çocuklar, yetişkinlere göre daha ciddi mpox riski altında
                olabilirler. İyileşene kadar yakından izlenmeleri ve ek bakım
                gerekip gerekmediği kontrol edilmelidir. Çocuğun sorumluluğunu
                üstlenen bir sağlık çalışanı, hastanede bakım görmelerini
                tavsiye edebilir. Bu durumda, sağlıklı ve mpox riski düşük olan
                bir ebeveyn veya bakıcı, çocukla birlikte kalabilir.
              </p>
              <p className="text-lg">
                Eğer mpox teşhisi konmuş veya mpox şüphesi olan bir kişiyseniz
                ve emziriyorsanız, sağlık uzmanınıza danışın. Onlar, mpox
                bulaşma riskini ve emzirmeyi kesmenin bebeğiniz üzerindeki
                olumsuz etkilerini değerlendireceklerdir. Emzirmeye ve yakın
                temasa devam etmeniz mümkünse, virüs bulaşma riskini azaltmak
                için döküntüleri kapatmak gibi önlemler almanız konusunda size
                tavsiyede bulunacaklardır. Enfeksiyon riski, emzirmenin ve
                ebeveyn-çocuk arasındaki yakın temasın kesilmesinin yol
                açabileceği zarar ve sıkıntılarla dikkatlice dengelenmelidir.
                Monkeypox virüsünün anne sütü yoluyla çocuğa geçip geçmediği
                henüz bilinmemektedir; bu, daha fazla araştırılması gereken bir
                konudur.
              </p>
            </>
          ),
        },
        {
          question: "Maymun Çiçeği'nin tedavisi var mıdır?",
          answer: (
            <p>
              Çiçek hastalığına yönelik tedaviler üzerine yapılan uzun yıllar
              süren araştırmalar, mpox tedavisinde de faydalı olabilecek
              ürünlerin geliştirilmesine yol açmıştır. Örneğin, çiçek
              hastalığını tedavi etmek için geliştirilen bir antiviral olan
              tecovirimat, Ocak 2022'de Avrupa İlaç Ajansı tarafından mpox
              tedavisi için istisnai durumlarda kullanılmak üzere onaylanmıştır.
              Mpox salgını bağlamında bu tedavilerle ilgili deneyim artmakla
              birlikte, hâlâ sınırlıdır. Bu nedenle, bu tür ilaçların kullanımı
              genellikle bir klinik araştırmaya veya genişletilmiş erişim
              protokolüne dahil edilmeyi ve gelecekte en iyi nasıl
              kullanılabileceklerini anlamaya yardımcı olacak bilgilerin
              toplanmasını içerir.
            </p>
          ),
        },
        {
          question: "Maymun Çiçeği'nin aşısı var mı?",
          answer: (
            <>
              <p>
                Evet, DSÖ'nün mpox'a karşı kullanılmasını önerdiği aşılar
                vardır. Çiçek hastalığı adı verilen ve yok edilmiş bir hastalığa
                karşı daha yeni ve güvenli aşıların geliştirilmesi, uzun yıllar
                süren araştırmaların sonucudur. Bu aşılardan bazıları, mpox'a
                karşı kullanım için çeşitli ülkelerde onaylanmıştır.
              </p>
              <p>
                Şu anda DSÖ, MVA-BN veya LC16 aşılarının kullanılmasını
                önermektedir; bu aşılar mevcut değilse, ACAM2000 aşısı
                kullanılabilir.
              </p>
              <p>
                Aşılamanın sadece risk altında olan kişiler (örneğin, mpox
                hastası biriyle yakın temasta bulunmuş kişiler veya mpox'a maruz
                kalma riski yüksek olan bir gruba mensup kişiler) için
                düşünülmesi gerekmektedir. Şu anda toplu aşılama
                önerilmemektedir. Seyahat edenler, bireysel risk
                değerlendirmesine dayalı olarak sağlık hizmeti sağlayıcılarıyla
                aşı olmayı düşünebilirler.
              </p>
              <p>
                Eğer yaşadığınız toplulukta devam eden bir salgın nedeniyle
                mpox'a maruz kalma riskiniz yüksekse, mevcut aşı seçenekleri
                hakkında sağlık hizmeti sağlayıcınızla konuşun. DSÖ, şu anda
                mpox hastası biriyle yakın temasta bulunan veya mpox'a maruz
                kalma riski yüksek olan gruplara mensup kişiler için aşıları
                önermektedir. Aşılar, toplulukları mpox'tan korumada bir araçtır
                ve diğer halk sağlığı ve sosyal önlemlerle birlikte
                kullanılmalıdır.
              </p>
              <p>
                Mpox aşıları, enfeksiyon ve ağır hastalığa karşı belli bir
                koruma sağlar. Aşılandıktan sonra, mpox kapmamak ve yaymamak
                için dikkatli olmaya devam edin. Bunun nedeni, aşı olduktan
                sonra bağışıklık gelişmesinin birkaç hafta sürmesi ve bazı
                kişilerin aşıya yanıt vermemesi olasılığıdır. Aşılandıktan sonra
                mpox kapanlar için ise, aşı yine de ağır hastalığa ve hastaneye
                yatışa karşı koruma sağlar.
              </p>
              <p>
                Aşı etkinliği üzerine yapılan çalışmalar, aşılamanın ardından
                mpox'a karşı iyi bir koruma sağladığını göstermektedir. Mpox
                için aşıların kullanımı üzerine yapılacak daha fazla çalışma, bu
                aşıların farklı ortamlardaki etkinliği hakkında ek bilgiler
                sağlayacaktır.
              </p>
            </>
          ),
        },
        {
          question: "Hamilelikte Maymun Çiçeği'nin riskleri nelerdir?",
          answer: (
            <p>
              Hamilelik sırasında mpox kapmak (göreceli olarak bağışıklığın
              baskılandığı bir durum olarak kabul edilir) fetüs veya yenidoğan
              bebek için tehlikeli olabilir ve hamileliğin kaybına, ölü doğuma,
              yenidoğanın ölümüne veya ebeveyn için komplikasyonlara yol
              açabilir. Hamileyseniz, mpox olan biriyle yakın temastan kaçının.
              Bulaşıcı bir kişiyle yakın temasta bulunan herkes, kim olursa
              olsun mpox kapabilir. Mpox'a maruz kaldığınızı düşünüyor veya mpox
              olabilecek belirtiler gösteriyorsanız, sağlık hizmeti
              sağlayıcınıza başvurun. Sizi test ettirip ihtiyaç duyduğunuz
              bakımı almanıza yardımcı olacaklardır.
            </p>
          ),
        },
        {
          question:
            "Geçmişte Maymun Çiçeği geçirdim. Tekrar yakalanabilir miyim?",
          answer: (
            <p>
              Mpox sonrası bağışıklığın ne kadar sürdüğüne dair anlayışımız hala
              gelişmeye devam ediyor. İkinci enfeksiyon vakaları rapor
              edilmiştir. Geçmişte mpox geçirmiş bazı kişiler, yeniden enfekte
              olabilir. Daha önce mpox geçirmiş olsanız bile, yeniden enfekte
              olmamak için elinizden geleni yapmalısınız. Eğer daha önce mpox
              geçirdiyseniz ve şu anda evinizde birisi bu hastalığa sahipse,
              bakımı üstlenerek diğerlerini koruyabilirsiniz, çünkü muhtemelen
              diğerlerine göre daha fazla bağışıklığa sahipsinizdir. Ancak, yine
              de olabildiğince maruz kalmaktan kaçınmak için tüm önlemleri
              almanız önemlidir.
            </p>
          ),
        },
      ]}
    />
  );
}
