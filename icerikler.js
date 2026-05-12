/* MiniYazılımcı — İçerik Dosyası
   Admin panelinden otomatik oluşturulur.
   Elle de düzenleyebilirsin. */
const ICERIK = {

  site: {
    baslik: "MiniYazılımcı",
    slogan: "2025–2026 · Kodlamayı Öğreniyoruz!",
    footer: "© 2026 MiniYazılımcı · Birlikte öğreniyoruz 🌱"
  },

  /* Menüler — sıra, renk, aktiflik admin'den yönetilir */
  menuler: [
    { id: "scratch",    baslik: "Scratch",     aktif: true, sira: 1 },
    { id: "tinkercad",  baslik: "Tinkercad",   aktif: true, sira: 2 },
    { id: "arduino",    baslik: "Arduino",     aktif: true, sira: 3 },
    { id: "algoritma",  baslik: "Algoritma",   aktif: true, sira: 4 },
    { id: "yapay_zeka", baslik: "Yapay Zeka",  aktif: true, sira: 5 }
  ],

  /* Bölüm içerikleri */
  bolumler: {

    scratch: [
      {
        id: "s1",
        baslik: "Hayvan Yarışı",
        emoji: "🐇",
        kisa_aciklama: "Klavye tuşlarıyla kontrol edilen iki oyunculu koşu yarışı yap!",
        konu_anlatimi: "Bu projede sprite'ları klavye tuşlarıyla hareket ettirmeyi öğreniyoruz. Sol oyuncu A/D, sağ oyuncu ←/→ tuşlarını kullanır. Bitiş çizgisine ilk dokunan kazanır!",
        adimlar: ["Sahneye iki hayvan sprite'ı ekle", "Her biri için klavye bloğu oluştur", "Bitiş çizgisi koşulu ekle", "Kazananı duyur"],
        scratch_link: "https://scratch.mit.edu",
        pdf_link: "", video_embed: ""
      },
      {
        id: "s2",
        baslik: "Labirent Kaçışı",
        emoji: "🌀",
        kisa_aciklama: "Değişkenler ve koşullarla labirentten kaç!",
        konu_anlatimi: "Değişkenler bilgi saklamak için kutucuklardır. Bu projede 'süre' değişkeni ile geri sayım ekleyeceğiz.",
        adimlar: ["Labirent arka planı çiz", "Süre değişkeni oluştur", "Duvar koşulu ekle", "Bitiş mesajı ekle"],
        scratch_link: "https://scratch.mit.edu",
        pdf_link: "", video_embed: ""
      }
    ],

    tinkercad: [
      {
        id: "t1",
        baslik: "LED Yakıp Söndürme",
        emoji: "💡",
        kisa_aciklama: "Tinkercad'de ilk devrenizi kurup LED'i kontrol edin.",
        konu_anlatimi: "Tinkercad'in devre simülatörü ile gerçek devre kurmadan önce bilgisayarda test edebilirsin. LED'i 220Ω direnç ile bağlayıp Arduino ile kontrol edeceğiz.",
        adimlar: ["Tinkercad'e giriş yap", "Yeni devre oluştur", "Arduino + LED + direnç bağla", "Kodu yaz ve simüle et"],
        tinkercad_link: "https://www.tinkercad.com",
        pdf_link: "", video_embed: ""
      },
      {
        id: "t2",
        baslik: "Trafik Lambası",
        emoji: "🚦",
        kisa_aciklama: "Üç renkli LED ile gerçek trafik lambası simülasyonu.",
        konu_anlatimi: "Kırmızı, sarı ve yeşil LED'leri sırayla yakıp söndürerek trafik lambası simüle edeceğiz. Zamanlama ve döngü mantığını öğreneceğiz.",
        adimlar: ["3 LED + 3 direnç bağla", "Her biri farklı pine bağla", "Sıralı yakma kodunu yaz", "Tinkercad'de simüle et"],
        tinkercad_link: "https://www.tinkercad.com",
        pdf_link: "", video_embed: ""
      },
      {
        id: "t3",
        baslik: "Su Seviyesi Sensörü",
        emoji: "💧",
        kisa_aciklama: "Sensörle su seviyesi ölç, LED ile uyar!",
        konu_anlatimi: "Analog sensörden okunan değere göre LED'leri yakar ve buzzer ile uyarı veririz. Gerçek hayatta kullanılan IoT projelerine benzer bir sistem.",
        adimlar: ["Sensör ve LED'leri bağla", "analogRead ile değer oku", "Koşullu LED kontrolü yaz", "Buzzer uyarısı ekle"],
        tinkercad_link: "https://www.tinkercad.com",
        pdf_link: "", video_embed: ""
      }
    ],

    arduino: [
      {
        id: "a1",
        baslik: "İlk Arduino Kodum",
        emoji: "⚡",
        kisa_aciklama: "Arduino nedir? İlk kodumuzu yazalım!",
        konu_anlatimi: "Arduino, fiziksel dünyayla etkileşime giren projeler yapmamızı sağlayan küçük bir bilgisayardır. setup() ve loop() fonksiyonlarını öğreneceğiz.",
        adimlar: ["Arduino IDE'yi indir", "Yeni proje aç", "setup() ve loop() yaz", "LED'i yakıp söndür"],
        pdf_link: "", video_embed: ""
      },
      {
        id: "a2",
        baslik: "Hareket Sensörü",
        emoji: "👁",
        kisa_aciklama: "PIR sensör ile hareket algıla, LED yak!",
        konu_anlatimi: "PIR (Pasif Kızılötesi) sensörü insan vücudundan yayılan ısıyı algılar. Hareket algılandığında LED yakar veya buzzer çalar.",
        adimlar: ["PIR sensörü bağla", "digitalRead ile oku", "Hareket varsa LED yak", "Seri monitörde izle"],
        pdf_link: "", video_embed: ""
      }
    ],

    algoritma: [
      {
        id: "alg1",
        baslik: "Algoritma Nedir?",
        emoji: "🧩",
        kisa_aciklama: "Adım adım çözüm yöntemi öğren!",
        konu_anlatimi: "Algoritma, belirli bir problemi çözmek için izlenen adım adım talimatlardır. Yemek tarifi de bir algoritmadır!",
        adimlar: ["Problemi tanımla", "Girdileri belirle", "Çözüm adımlarını yaz", "Test et ve düzelt"],
        pdf_link: "", video_embed: ""
      },
      {
        id: "alg2",
        baslik: "Döngüler",
        emoji: "🔁",
        kisa_aciklama: "Aynı işlemi tekrar tekrar yap!",
        konu_anlatimi: "Döngüler aynı işlemi birden fazla kez yapmanı sağlar. 1'den 10'a saymak için 10 kez aynı adımı tekrarlamak yerine döngü kullanırız.",
        adimlar: ["Kaç kez tekrar edeceğini belirle", "Başlangıç değerini yaz", "Her adımda ne yapılacağını tanımla", "Bitiş koşulunu belirle"],
        pdf_link: "", video_embed: ""
      }
    ],

    yapay_zeka: [
      {
        id: "ya1",
        baslik: "Yapay Zeka Nedir?",
        emoji: "🤖",
        kisa_aciklama: "Makineler nasıl öğrenir? Keşfedelim!",
        konu_anlatimi: "Yapay zeka, bilgisayarların insan gibi düşünmesini ve öğrenmesini sağlayan teknolojilerin genel adıdır. Sesli asistanlar, öneri sistemleri hep yapay zekadır.",
        adimlar: ["Yapay zeka örneklerini tanı", "Makine öğrenmesi kavramını öğren", "Günlük hayattan örnekler bul", "Kendi sınıflandırıcını yap"],
        pdf_link: "", video_embed: ""
      },
      {
        id: "ya2",
        baslik: "Teachable Machine",
        emoji: "🎓",
        kisa_aciklama: "Google Teachable Machine ile kendi AI'ını eğit!",
        konu_anlatimi: "Google'ın ücretsiz aracı Teachable Machine ile kendi yapay zekanı eğitebilirsin. Fotoğraf veya ses kullanarak makineye bir şeyleri tanımayı öğretebilirsin.",
        adimlar: ["teachablemachine.withgoogle.com'a git", "Görüntü projesi oluştur", "En az 2 sınıf ekle", "Modeli eğit ve test et"],
        pdf_link: "", video_embed: ""
      }
    ]
  },

  hakkimda: {
    isim: "Öğretmen Adı Soyadı",
    unvan: "Teknoloji & Kodlama Öğretmeni",
    biyografi_1: "Merhaba! MiniYazılımcı platformuna hoş geldin.",
    biyografi_2: "Scratch, Arduino, Tinkercad ve daha fazlasını birlikte öğreniyoruz!",
    dersler: ["Scratch", "Arduino", "Tinkercad", "Algoritma", "Yapay Zeka"],
    eposta: "ornek@okul.edu.tr",
    sinif: "Kodlama Atölyesi",
    mesai: "Pazartesi–Cuma, 08:00–17:00"
  }
};
