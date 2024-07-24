# İş İlan Portalı

Bu proje, iş ilanlarını listeleyen, arama yapabilen ve ilan detaylarına gidilebilen bir iş ilan portalıdır. Proje, React, Axios, JSON Server ve Context API kullanılarak geliştirilmiştir.

## Proje Görseli

![İşİlanPortal](https://github.com/user-attachments/assets/2519d95c-338f-4fa1-abd8-ceaf3e56df9d)


## Özellikler

- İş ilanlarını listeleme
- İlanlar arasında arama yapma
- İlan detaylarını görüntüleme

## Kurulum ve Çalıştırma

### Gereksinimler

- Node.js (v12 ve üzeri)
- npm veya yarn

### Adımlar

1. Depoyu klonlayın:

    ```bash
    git clone https://github.com/kullanici_adi/is-ilan-portali.git
    cd is-ilan-portali
    ```

2. Gerekli paketleri yükleyin:

    ```bash
    npm install
    ```

3. JSON Server'ı kurun ve çalıştırın:

    ```bash
    npm install json-server
    json-server --watch db.json --port 3000
    ```

4. React uygulamasını başlatın:

    ```bash
    npm start
    ```

5. Tarayıcınızda `http://localhost:5173` adresine gidin.

## Proje Yapısı

- `src/App.js`: Uygulamanın ana bileşeni ve yönlendirme işlemleri.
- `src/components/IlanList.js`: İş ilanlarının listelendiği bileşen.
- `src/components/IlanKartlari.js`: Her bir iş ilanını temsil eden kart bileşeni.
- `src/components/IlanDetay.js`: İlan detaylarının gösterildiği bileşen.
- `src/JobContext.js`: İş ilanlarını tutan ve yöneten context bileşeni.

## Kullanılan Teknolojiler

- [React](https://reactjs.org/): Kullanıcı arayüzü oluşturmak için.
- [Axios](https://axios-http.com/): HTTP isteklerini gerçekleştirmek için.
- [JSON Server](https://github.com/typicode/json-server): Sahte bir REST API sunucusu oluşturmak için.
- [React Router](https://reactrouter.com/): İlan detay sayfasına yönlendirme yapmak için.
- [Context API](https://reactjs.org/docs/context.html): Durum yönetimi için.

## Proje Hakkında

Bu proje, iş ilanlarını listeleyen ve kullanıcıların ilan detaylarını görüntüleyebileceği bir uygulama geliştirmek amacıyla oluşturulmuştur. Arama işlevselliği sayesinde kullanıcılar ilanlar arasında kolayca arama yapabilirler.



