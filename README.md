# Jenkins CI/CD Demo

Bu proje, Jenkins pipeline surecini adim adim test etmek icin hazirlanmis kucuk bir Node.js uygulamasidir.

## Pipeline Asamalari

1. **Checkout** – GitHub'dan kodu ceker
2. **Install Dependencies** – `npm install`
3. **Lint** – `npm run lint` (ESLint)
4. **Test** – `npm test` (Jest)
5. **Build** – `npm run build` (dist/ klasoru olusturur)
6. **Deploy** – simulasyon (gercek bir sunucuya deploy etmiyor, sadece adimi gosteriyor)

## Bilerek Hata Uretme Senaryolari

Her asamada neyin kirildigini gormek icin asagidakileri sirayla deneyebilirsin:

### Lint asamasinda hata
`index.js` icine kullanilmayan bir degisken ekle:
```js
const unusedVar = 5; // eslint no-unused-vars hatasi verir (rules'da "error" yaparsan)
```
Not: `.eslintrc.json` icinde `no-unused-vars` şu an `"warn"` seviyesinde, hata olarak durdurmasini istersen `"error"` yap.

### Test asamasinda hata
`index.js` icindeki `add` fonksiyonunu boz:
```js
function add(a, b) {
  return a - b; // kasitli hata
}
```
Test `toplama dogru calisir` kirilacak ve pipeline Test asamasinda duracak.

### Build asamasinda hata
`build.js` icinde olmayan bir dosyayi okumaya calis:
```js
const indexContent = fs.readFileSync(path.join(__dirname, 'olmayan-dosya.js'), 'utf8');
```

### Install asamasinda hata
`package.json` icine olmayan bir paket ekle:
```json
"dependencies": {
  "bu-paket-yok-12345": "^1.0.0"
}
```

Her degisikligi yapip push ettiginde Jenkins job'i otomatik tetiklenir (webhook kuruluysa) ve hangi stage'in kirmizi oldugunu Stage View / Blue Ocean ekraninda net olarak gorursun.
