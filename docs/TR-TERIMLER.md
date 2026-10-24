# Türkçe çeviri: üslup ve terimler

Bu belge `src/locales/tr/` çevirisi için ortak kurallardır. Genel kurallar `docs/I18N.md` belgesindedir, önce onu oku.

## Okur ve üslup

- Okur 10–16 yaş arası, meraklı bir öğrenci. DENEYAP atölyelerine hazırlanıyor.
- "Sen" diye hitap et. Emir kipini sıcak kullan: "Kabloyu tak.", "Komutu çalıştır."
- Kısa cümle kur. Bir cümlede tek iş anlat. Noktalı virgül kullanma.
- İngilizce yapıyı kopyalama. Türkçede doğal duran sırayı kullan.
- Teknik terimi ilk geçtiği yerde gerekirse kısaca aç. Ama her seferinde açma.

## Çevrilmeyenler

- Kod, komutlar, dosya yolları, pin adları (`GPIO 4`, `3V3`, `GND`), C++ sözcükleri, kütüphane ve API adları, birimler (`ms`, `MHz`, `Ω`).
- `<code>…</code>` ve `<kbd>…</kbd>` içindeki her şey.
- Kartın kendisinin yazdığı ya da çizdiği metin: seri monitör satırları, ekrandaki yazılar, BLE yayın adları.
- Ürün ve marka adları: ESP32-S3, DevKitC-1, PlatformIO, Wi-Fi, Bluetooth LE, Claude.
- "ESP32 Labs" adı olduğu gibi kalır.

## Biçim kuralları

- `{{yer_tutucu}}` ifadelerini aynen koru. Sıraları değişebilir, adları değişmez.
- `<b>`, `<i>`, `<code>`, `<span class="…">`, `<part>`, `<link>` gibi etiketleri aynen koru. Yerleri değişebilir, eklenemez, silinemez, adları değişmez.
- Yer tutucuya ek getirme. Türkçe ünlü uyumu bilinmeyen sözcükte bozulur.
  - Kötü: `{{name}}'e bağlan`
  - İyi: `Ağa bağlan: {{name}}` ya da `{{name}} adlı ağa bağlan`
- Çoğul anahtarlar: İngilizcede `x_one` ve `x_other` varsa Türkçede de ikisini yaz. Türkçede sayıdan sonra ad tekil kalır: "3 ders", "1 ders".
- Düzyazıdaki ondalık sayılarda virgül kullan: "1,9″ ekran". Kod ve komutlarda noktayı koru.
- JSON yapısını değiştirme. Aynı anahtarlar, aynı dizi uzunlukları, 2 boşluk girinti, sonda yeni satır.
- Tırnak için “ ” kullan.

## Terimler

| İngilizce | Türkçe |
| --- | --- |
| lab, labs | deney, deneyler |
| lesson | ders |
| bench | tezgâh |
| bench guide | tezgâh rehberi |
| bench log | tezgâh günlüğü |
| board | kart (gerekirse "geliştirme kartı") |
| card (RFID/NFC) | kart (karışırsa "RFID kartı") |
| tag (RFID/NFC) | etiket |
| reader | okuyucu |
| flash (karta program yazmak) | karta yükle, yükle |
| upload | yükle |
| firmware | kart yazılımı |
| toolchain | geliştirme araçları |
| serial monitor | seri monitör |
| serial port | seri port |
| simulator | simülatör |
| breadboard | breadboard |
| jumper wire | jumper kablo |
| wire (fiil) | bağla |
| wiring | bağlantı, bağlantılar |
| resistor | direnç |
| button | düğme |
| display, screen | ekran |
| step | adım |
| tick (adımı) | işaretle |
| goal | amaç |
| progress | ilerleme |
| track (konu grubu) | konu |
| tour (kod okuyucu) | Tur |
| story (kod okuyucu) | Hikâye |
| explore (kod okuyucu) | Keşfet |
| phrasebook | kod sözlüğü |
| code reader | kod okuyucu |
| variable | değişken |
| function | fonksiyon |
| loop | döngü |
| array | dizi |
| pointer | işaretçi |
| library | kütüphane |
| callback | geri çağırma (callback) |
| interrupt | kesme |
| state machine | durum makinesi |
| advertising (BLE) | yayın |
| pairing | eşleştirme |
| central / peripheral (BLE) | merkez / çevre birimi |
| access point | erişim noktası |
| over the air (OTA) | kablosuz güncelleme (OTA) |
| loudness | ses düzeyi |
| pitch | perde |
| spectrum | spektrum |
| speaker | hoparlör |
| microphone | mikrofon |
| recorder | ses kaydedici |
| settings | ayarlar |
| theme (light/dark) | tema (açık/koyu) |
