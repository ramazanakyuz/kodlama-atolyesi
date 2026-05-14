/* Kodbino — İçerik Dosyası
   Admin panelinden (admin.html) Dışa Aktar ile güncellenir. */
const ICERIK = {

  site: {
    baslik: "Kodbino",
    slogan: "Hayal Et, Kodla, Geliştir!",
    footer: "© 2026 Kodbino · Birlikte öğreniyoruz! 🌱"
  },

  menuler: [
    { id: "scratch",    baslik: "Scratch",     aktif: true, sira: 1 },
    { id: "arduino",    baslik: "Arduino",     aktif: true, sira: 2 },
    { id: "tinkercad",  baslik: "Tinkercad",   aktif: true, sira: 3 },
    { id: "algoritma",  baslik: "Algoritma",   aktif: true, sira: 4 },
    { id: "yapay_zeka", baslik: "Yapay Zeka",  aktif: true, sira: 5 }
  ],

  bolumler: {

    scratch: [
      {
        id: "s1", emoji: "🐱",
        baslik: "Scratch'e Giriş — İlk Projen",
        kisa_aciklama: "Scratch arayüzünü tanı, ilk sprite'ını hareket ettir!",
        konu_anlatimi: "Scratch, blok tabanlı bir kodlama platformudur. Kod yazmak yerine blokları sürükleyip bırakarak program oluşturursun. Bu projede sahneyi, sprite'ları ve temel hareket bloklarını öğreneceğiz.",
        adimlar: [
          "scratch.mit.edu adresine git ve hesap oluştur",
          "Yeni proje oluştur, sahneyi ve sprite'ı incele",
          "Hareket bloklarından 'x kadar git' bloğunu sürükle",
          "Yeşil bayrağa tıkla ve sprite'ın hareket ettiğini gör",
          "Farklı değerler deneyerek sprite'ı istediğin yere götür"
        ],
        scratch_link: "https://scratch.mit.edu/projects/editor/",
        pdf_link: "", video_embed: ""
      },
      {
        id: "s2", emoji: "🎮",
        baslik: "Hayvan Yarışı Oyunu",
        kisa_aciklama: "Klavye tuşlarıyla kontrol edilen iki oyunculu koşu yarışı!",
        konu_anlatimi: "Bu projede iki farklı sprite'ı klavye tuşlarıyla kontrol etmeyi öğreneceğiz. Sol oyuncu A/D, sağ oyuncu ←/→ tuşlarını kullanacak. Bitiş çizgisine ilk dokunan kazanıyor!",
        adimlar: [
          "İki farklı hayvan sprite'ı ekle (örn: kedi ve köpek)",
          "Her sprite için 'eğer tuşa basılırsa' bloğu oluştur",
          "Sol sprite: A=sola, D=sağa kontrolü ekle",
          "Sağ sprite: ←=sola, →=sağa kontrolü ekle",
          "Bitiş çizgisi çiz ve 'renge değiyor mu' koşulu ekle",
          "Kazananı duyuran 'kazan' mesajı ve sesini ekle"
        ],
        scratch_link: "https://scratch.mit.edu/projects/editor/",
        pdf_link: "", video_embed: ""
      },
      {
        id: "s3", emoji: "🌀",
        baslik: "Labirent Kaçışı",
        kisa_aciklama: "Değişkenler ve koşullarla labirentten kaç, süreye dikkat!",
        konu_anlatimi: "Değişkenler bilgi saklamak için kullanılan kutucuklardır. Bu projede 'süre' değişkeni oluşturup geri sayım ekleyeceğiz. Sprite duvara değdiğinde başa dönsün, kapıya ulaşınca 'Kazandın!' desin.",
        adimlar: [
          "Labirent arka planı çiz veya galeriden seç",
          "'süre' değişkeni oluştur, 60 saniye değeri ver",
          "Süreyi azaltan 'her 1 saniyede -1' döngüsü ekle",
          "Duvar rengine değme koşulu: başa dön",
          "Çıkış kapısı rengine değme: 'Kazandın!' mesajı",
          "Süre 0 olunca: 'Süre doldu!' mesajı"
        ],
        scratch_link: "https://scratch.mit.edu/projects/editor/",
        pdf_link: "", video_embed: ""
      },
      {
        id: "s4", emoji: "⭐",
        baslik: "Platform Oyunu — Yerçekimi",
        kisa_aciklama: "Yerçekimi ve platform mekaniği ile kendi platform oyununu yap!",
        konu_anlatimi: "Yerçekimi, karakterin sürekli aşağı çekilmesi demektir. Bunu Scratch'te 'y değişimi -3' bloğuyla simüle ederiz. Platforma değdiğinde düşme durur, Space ile zıplarız.",
        adimlar: [
          "Karakter sprite'ı seç, zemin ve platformları çiz",
          "Yerçekimi: 'sürekli yap → y'yi -3 değiştir' döngüsü",
          "Zemin rengine değince düşmeyi durdur (y değişimi = 0)",
          "Space tuşu: 'y'yi 10 değiştir' ile zıplama ekle",
          "'puan' değişkeni oluştur",
          "Yıldız sprite'ı ekle, dokunulunca puanı artır ve yıldızı gizle"
        ],
        scratch_link: "https://scratch.mit.edu/projects/editor/",
        pdf_link: "", video_embed: ""
      }
    ],

    arduino: [
      {
        id: "a1", emoji: "💡",
        baslik: "İlk Arduino Kodum — LED Yakıp Söndürme",
        kisa_aciklama: "digitalWrite ve delay ile LED'i kontrol etmeyi öğren!",
        konu_anlatimi: "Arduino, fiziksel dünyayla etkileşime giren projeler yapmamızı sağlayan küçük bir mikrodenetleyicidir. setup() bir kez çalışır, loop() sürekli tekrar eder. digitalWrite ile LED'i açıp kapatacağız.",
        adimlar: [
          "Arduino IDE'yi bilgisayarına indir ve kur",
          "Yeni proje aç (File → New)",
          "13. pine 220Ω dirençle LED bağla",
          "setup() içine: pinMode(13, OUTPUT); yaz",
          "loop() içine: digitalWrite(13, HIGH); delay(1000); digitalWrite(13, LOW); delay(1000); yaz",
          "Kodu yükle (→ butonu) ve LED'in yanıp söndüğünü izle"
        ],
        wokwi_link: "https://wokwi.com/projects/new/arduino-uno",
        pdf_link: "", video_embed: ""
      },
      {
        id: "a2", emoji: "🚦",
        baslik: "Trafik Işığı",
        kisa_aciklama: "3 LED ile gerçek trafik lambası simülasyonu yap!",
        konu_anlatimi: "Üç farklı pine kırmızı (11), sarı (10) ve yeşil (9) LED bağlayacağız. Gerçek trafik ışığı gibi sırayla yakıp söndüreceğiz: kırmızı 3 sn, sarı 1 sn, yeşil 3 sn.",
        adimlar: [
          "3 LED'i 11, 10, 9 nolu pinlere bağla (her birine 220Ω direnç)",
          "setup() içinde üçünü de OUTPUT olarak tanımla",
          "loop() içinde sırayla: kırmızı HIGH 3000ms → LOW",
          "Sarı HIGH 1000ms → LOW",
          "Yeşil HIGH 3000ms → LOW",
          "Kodu Wokwi'de simüle et veya Arduino'ya yükle"
        ],
        wokwi_link: "https://wokwi.com/projects/new/arduino-uno",
        pdf_link: "", video_embed: ""
      },
      {
        id: "a3", emoji: "📡",
        baslik: "Mesafe Sensörü — HC-SR04",
        kisa_aciklama: "Ultrasonik sensörle mesafe ölç, Serial Monitor'da izle!",
        konu_anlatimi: "HC-SR04 sensörü ses dalgası gönderip geri gelme süresini ölçer. Mesafe formülü: cm = süre × 0.034 / 2. Ses hızı 0.034 cm/µs'dir. 2cm ile 400cm arası ölçüm yapabilir.",
        adimlar: [
          "HC-SR04: VCC→5V, GND→GND, Trig→9, Echo→10 bağla",
          "setup() içine Serial.begin(9600) ekle",
          "Trig pinine 10 mikrosaniye HIGH sinyal gönder",
          "pulseIn() ile Echo pininden geri dönüş süresini oku",
          "Mesafeyi hesapla: float cm = sure * 0.034 / 2",
          "Serial.print(cm) ile monitörde izle"
        ],
        wokwi_link: "https://wokwi.com/projects/new/arduino-uno",
        pdf_link: "", video_embed: ""
      }
    ],

    tinkercad: [
      {
        id: "t1", emoji: "🔧",
        baslik: "Tinkercad'e Giriş — İlk Devren",
        kisa_aciklama: "Tinkercad'de sanal devre kur, Arduino ile LED yak!",
        konu_anlatimi: "Tinkercad, tarayıcıda ücretsiz çalışan bir devre simülatörüdür. Gerçek devre kurmadan önce bilgisayarda test edebilirsin. Hiçbir şey kırılmaz, kısa devre yapamazsın!",
        adimlar: [
          "tinkercad.com'a git, ücretsiz hesap oluştur",
          "Circuits → Create new Circuit tıkla",
          "Sağ panelden Arduino Uno sürükle",
          "LED ve 220Ω direnç ekle, bağlantıları çiz",
          "Code → Blocks seç, Blink örneğini yükle",
          "Start Simulation tıkla ve LED'in yandığını gör"
        ],
        tinkercad_link: "https://www.tinkercad.com/circuits",
        pdf_link: "", video_embed: ""
      },
      {
        id: "t2", emoji: "🚦",
        baslik: "Tinkercad Trafik Lambası",
        kisa_aciklama: "3 renkli LED ile trafik lambası — Tinkercad simülasyonu!",
        konu_anlatimi: "Tinkercad'de 3 LED'li trafik lambası devresini kurup simüle edeceğiz. Blok kodlama ile Arduino kodunu otomatik oluşturabiliriz.",
        adimlar: [
          "Yeni devre oluştur",
          "3 farklı renkli LED (kırmızı, sarı, yeşil) ekle",
          "Her LED'e seri 220Ω direnç bağla",
          "Pinleri 11, 10, 9'a bağla",
          "Blok kodla sıralı yakma programı oluştur",
          "Simülasyonu başlat ve çalıştır"
        ],
        tinkercad_link: "https://www.tinkercad.com/circuits",
        pdf_link: "", video_embed: ""
      },
      {
        id: "t3", emoji: "💧",
        baslik: "Su Seviyesi Sensörü",
        kisa_aciklama: "Sensörle su seviyesi ölç, LED'lerle görsel uyarı ver!",
        konu_anlatimi: "Analog sensörden okunan değere göre farklı LED'leri yakarız. Düşük seviye → yeşil, orta → sarı, yüksek → kırmızı. Gerçek hayatta su deposu kontrolü gibi çalışır.",
        adimlar: [
          "Su seviyesi sensörü ve 3 LED ekle",
          "Sensörü A0 analog pinine bağla",
          "analogRead(A0) ile değeri oku (0-1023)",
          "333'ten küçük: yeşil LED yak",
          "333-666 arası: sarı LED yak",
          "666'dan büyük: kırmızı LED yak ve buzzer çal"
        ],
        tinkercad_link: "https://www.tinkercad.com/circuits",
        pdf_link: "", video_embed: ""
      }
    ],

    algoritma: [
      {
        id: "alg1", emoji: "🧩",
        baslik: "Algoritma Nedir?",
        kisa_aciklama: "Adım adım problem çözme sanatını öğren!",
        konu_anlatimi: "Algoritma, belirli bir problemi çözmek için izlenen adım adım talimatlardır. Yemek tarifi de bir algoritmadır: malzemeleri hazırla → karıştır → pişir → servis et. İyi bir algoritma; anlaşılır, sonlu adımlardan oluşur ve her girdi için doğru çıktı üretir.",
        adimlar: [
          "Problemi net olarak tanımla: ne elde etmek istiyoruz?",
          "Girdileri belirle: hangi bilgiler elimizde?",
          "Adım adım çözüm yolunu yaz",
          "Her adımı kontrol et: mantıklı mı?",
          "Farklı girdilerle test et",
          "Hataları düzelt ve tekrar test et"
        ],
        pdf_link: "", video_embed: ""
      },
      {
        id: "alg2", emoji: "🔁",
        baslik: "Döngüler ve Tekrar",
        kisa_aciklama: "Aynı işlemi verimli şekilde tekrar et!",
        konu_anlatimi: "Döngüler, aynı işlemi birden fazla kez yapmamızı sağlar. '1'den 10'a kadar say' için 10 kez aynı adımı yazmak yerine döngü kullanırız. For döngüsü: kaç kez tekrar edeceğini bilirken. While döngüsü: bir koşul sağlandığı sürece.",
        adimlar: [
          "Tekrar edilecek işlemi belirle",
          "Kaç kez tekrar edeceğini veya ne zaman duracağını belirle",
          "For döngüsü: for(i=0; i<10; i++) yapısını anla",
          "While döngüsü: while(koşul) yapısını anla",
          "Scratch'te 'X kez tekrarla' bloğuyla uygula",
          "Sonsuz döngüden kaçınmak için bitiş koşulunu unutma"
        ],
        pdf_link: "", video_embed: ""
      },
      {
        id: "alg3", emoji: "🔀",
        baslik: "Koşullar ve Karar Yapıları",
        kisa_aciklama: "Eğer... yoksa... ile akıllı kararlar al!",
        konu_anlatimi: "Koşullar programın farklı durumlarda farklı davranmasını sağlar. 'Hava yağmurluysa şemsiye al, değilse alma' → EĞER yağmur VARSA şemsiye al, YOKSA alma. Kodda bu if-else yapısıdır.",
        adimlar: [
          "Karar noktasını belirle: ne zaman ne yapılacak?",
          "Koşulu yaz: 'eğer X ise...'",
          "True durumunu yaz: koşul doğruysa ne olsun?",
          "False durumunu yaz: koşul yanlışsa ne olsun?",
          "İç içe koşulları (nested if) öğren",
          "Scratch'te 'eğer... ise... yoksa...' bloğuyla uygula"
        ],
        pdf_link: "", video_embed: ""
      },
      {
        id: "alg4", emoji: "📊",
        baslik: "Sıralama Algoritmaları",
        kisa_aciklama: "Baloncuk sıralaması ile listeyi sırala!",
        konu_anlatimi: "Sıralama algoritmaları bir listedeki elemanları belirli bir sıraya dizer. Baloncuk sıralaması (Bubble Sort): yan yana elemanları karşılaştır, büyük olan sağa git. Her turda en büyük eleman en sağa 'köpük gibi' yükselir.",
        adimlar: [
          "Sıralanmamış bir liste yaz: [5, 3, 8, 1, 9, 2]",
          "İlk iki elemanı karşılaştır: 5 > 3 mü? Evet → yer değiştir",
          "Sonraki çifti karşılaştır: 5 > 8 mi? Hayır → geç",
          "Tur sonunda en büyük eleman en sona geçer",
          "Listeyi baştan başla, sıralı kısımları atla",
          "Hiç değişim yoksa sıralama tamamdır"
        ],
        pdf_link: "", video_embed: ""
      }
    ],

    yapay_zeka: [
      {
        id: "ya1", emoji: "🤖",
        baslik: "Yapay Zeka Nedir?",
        kisa_aciklama: "Makineler nasıl öğrenir? Yapay zekanın sırlarını keşfet!",
        konu_anlatimi: "Yapay zeka, bilgisayarların insan gibi düşünmesini ve öğrenmesini sağlayan teknolojilerin genel adıdır. Sesli asistanlar, yüz tanıma, öneri sistemleri, çeviri araçları — bunların hepsi yapay zeka kullanır.",
        adimlar: [
          "Yapay zeka örneklerini günlük hayatta keşfet",
          "Makine öğrenmesi kavramını öğren: veriden öğrenme",
          "Eğitim verisi nedir? Neden önemlidir?",
          "Sınıflandırma örneği: e-posta spam mi değil mi?",
          "Yapay zekanın yapamadıklarını da öğren",
          "Etik yapay zeka: adil ve güvenli kullanım"
        ],
        pdf_link: "", video_embed: ""
      },
      {
        id: "ya2", emoji: "🎓",
        baslik: "Teachable Machine ile AI Eğit",
        kisa_aciklama: "Google'ın ücretsiz aracıyla kendi yapay zekanı eğit!",
        konu_anlatimi: "Google Teachable Machine ile kamera görüntüsünden nesneleri tanıyan, sesini tanıyan veya poz/duruşu algılayan bir yapay zeka modeli eğitebilirsin. Hiç kod yazmana gerek yok!",
        adimlar: [
          "teachablemachine.withgoogle.com adresine git",
          "Image Project → Standard Image Model seç",
          "En az 2 sınıf oluştur (örn: Kedi / Köpek)",
          "Her sınıf için en az 20 fotoğraf ekle",
          "Train Model butonuna tıkla ve bekle",
          "Preview bölümünde modelini test et ve paylaş"
        ],
        pdf_link: "", video_embed: ""
      },
      {
        id: "ya3", emoji: "🎨",
        baslik: "AI ile Görsel Üretme",
        kisa_aciklama: "Yapay zeka ile hayal ettiğin görselleri oluştur!",
        konu_anlatimi: "Üretici yapay zeka (Generative AI), metin açıklamasından görsel, müzik veya metin üretebilir. Bu teknoloji 'prompt' adı verilen talimatlarla çalışır. İyi bir prompt yazmak başlı başına bir beceridir.",
        adimlar: [
          "Üretici AI araçlarını tanı: DALL-E, Midjourney, Canva AI",
          "Prompt nedir? Açıklayıcı, detaylı talimat yazmayı öğren",
          "Canva.com'a git, ücretsiz hesap oluştur",
          "AI Image Generator aracını bul",
          "Türkçe veya İngilizce bir görsel tarifi yaz",
          "Farklı promptlar dene, sonuçları karşılaştır"
        ],
        pdf_link: "", video_embed: ""
      }
    ]
  },

  hakkimda: {
    isim: "Öğretmen Adı Soyadı",
    unvan: "Teknoloji & Kodlama Öğretmeni",
    biyografi_1: "Merhaba! Kodbino platformuna hoş geldin. 8-15 yaş arası öğrencilere kodlama ve teknoloji eğitimi veriyorum.",
    biyografi_2: "Scratch, Arduino, Tinkercad ve Yapay Zeka dünyasında birlikte keşfediyoruz!",
    dersler: ["Scratch", "Arduino", "Tinkercad", "Algoritma", "Yapay Zeka"],
    eposta: "ornek@okul.edu.tr",
    sinif: "Kodlama Atölyesi",
    mesai: "Pazartesi–Cuma, 08:00–17:00"
  }
};
