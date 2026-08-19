const { add, subtract, multiply, divide } = require('./index');

let passed = 0;
let failed = 0;

// Basit bir "esitlik kontrolu" fonksiyonu - Jest'in expect().toBe() yaptigi isin
// elle yazilmis hali
function check(name, actual, expected) {
  const ok = actual === expected;
  if (ok) {
    console.log(`OK  - ${name}`);
    passed++;
  } else {
    console.error(`HATA - ${name}`);
    console.error(`   Beklenen : ${expected}`);
    console.error(`   Gelen    : ${actual}`);
    failed++;
  }
}

// Bir fonksiyonun hata firlatmasini bekleyen kontrol - Jest'in
// expect().toThrow() yaptigi isin elle yazilmis hali
function checkThrows(name, fn, expectedMessage) {
  try {
    fn();
    console.error(`HATA - ${name}`);
    console.error(`   Beklenen : '${expectedMessage}' mesajiyla hata firlatmasi`);
    console.error(`   Gelen    : hata firlatmadi`);
    failed++;
  } catch (err) {
    if (err.message === expectedMessage) {
      console.log(`OK  - ${name}`);
      passed++;
    } else {
      console.error(`HATA - ${name}`);
      console.error(`   Beklenen mesaj : ${expectedMessage}`);
      console.error(`   Gelen mesaj    : ${err.message}`);
      failed++;
    }
  }
}

console.log('--- Manuel testler calisiyor ---\n');

check('toplama dogru calisir', add(2, 3), 5);
check('cikarma dogru calisir', subtract(5, 2), 3);
check('carpma dogru calisir', multiply(4, 3), 12);
check('bolme dogru calisir', divide(10, 2), 5);
checkThrows('sifira bolme hata firlatir', () => divide(10, 0), 'Sifira bolme hatasi');

console.log(`\n--- Sonuc: ${passed} basarili, ${failed} basarisiz ---`);

// Jest'in otomatik yaptigi son adim: en az bir test kiriksa
// process'i hata koduyla (1) bitir, Jenkins bunu FAILURE olarak okusun
if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
