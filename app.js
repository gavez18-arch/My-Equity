/* ============ Gavez — logika aplikasi ============
   Semua data disimpan di HP ini (localStorage). Tidak ada server. */
'use strict';

/* ---------- Teks dua bahasa: [Indonesia, English] ---------- */
const STR = {
  tab_home: ['Beranda', 'Home'], tab_history: ['Riwayat', 'History'], tab_wallet: ['Dompet', 'Wallet'], tab_assets: ['Aset', 'Assets'],
  settings: ['Pengaturan', 'Settings'], settings_aria: ['Pengaturan dan cadangan', 'Settings and backup'],
  close: ['Tutup', 'Close'], cancel: ['Batal', 'Cancel'], save: ['Simpan', 'Save'], save_changes: ['Simpan perubahan', 'Save changes'],
  saving: ['Menyimpan…', 'Saving…'], delete: ['Hapus', 'Delete'], add: ['Tambah', 'Add'],
  expense: ['Pengeluaran', 'Expense'], income: ['Pemasukan', 'Income'], expenses: ['Pengeluaran', 'Expenses'],
  amount: ['Nominal', 'Amount'], category: ['Kategori', 'Category'], wallet: ['Dompet', 'Wallet'], date: ['Tanggal', 'Date'],
  note_opt: ['Catatan (opsional)', 'Note (optional)'], note_ph: ['Misal: makan siang', 'E.g. lunch'],
  add_tx: ['Tambah transaksi', 'Add transaction'], edit_tx: ['Ubah transaksi', 'Edit transaction'],
  p_today: ['Hari ini', 'Today'], p_week: ['Minggu ini', 'This week'], p_month: ['Bulan ini', 'This month'], p_custom: ['Custom', 'Custom'],
  pn_today: ['hari ini', 'today'], pn_week: ['minggu ini', 'this week'], pn_month: ['bulan ini', 'this month'],
  period: ['Periode', 'Period'], from: ['Dari', 'From'], to: ['Sampai', 'To'],
  yesterday: ['Kemarin', 'Yesterday'],
  net_label: ['Saldo bersih {0}', 'Net balance, {0}'], summary: ['Ringkasan', 'Summary'],
  no_tx: ['Belum ada transaksi', 'No transactions yet'], no_tx_d: ['Ketuk tombol + di bawah untuk mencatat transaksi pertamamu.', 'Tap the + button below to record your first transaction.'],
  backup_nudge: ['Data hanya ada di HP ini. Cadangkan supaya aman.', 'Your data lives only on this phone. Back it up to keep it safe.'], backup_btn: ['Cadangkan', 'Back up'],
  ins_title: ['Insight', 'Insights'], ins_top: ['Pengeluaran terbesar', 'Biggest expense'], ins_top_d: ['{0}, {1} dari total pengeluaran', '{0}, {1} of total expenses'],
  ins_avg: ['Rata-rata pengeluaran harian', 'Average daily spending'], ins_avg_d: ['Dihitung dari {0} hari yang sudah berjalan', 'Based on {0} day(s) so far'],
  ins_cmp: ['Pengeluaran dibanding periode sebelumnya', 'Spending vs previous period'],
  up: ['▲ Naik {0}', '▲ Up {0}'], down: ['▼ Turun {0}', '▼ Down {0}'], same: ['Sama persis', 'Exactly the same'],
  cmp_d: ['{0} sekarang, {1} pada rentang yang sama sebelumnya', '{0} now, {1} over the same span before'],
  cmp_none: ['Belum bisa dibandingkan', 'Nothing to compare yet'], cmp_noexp: ['Belum ada pengeluaran', 'No expenses yet'],
  cmp_none_d: ['Tidak ada pengeluaran pada periode sebelumnya', 'No spending in the previous period'],
  recent: ['Transaksi terbaru', 'Recent transactions'], see_all: ['Lihat semua', 'See all'],
  empty_period: ['Kosong di periode ini', 'Nothing in this period'], empty_period_d: ['Belum ada transaksi {0}.', 'No transactions {0}.'],
  stats: ['Statistik', 'Statistics'],
  pie_title: ['Pemasukan vs pengeluaran', 'Income vs expenses'], pie_sub: ['Periode {0}', 'Period: {0}'], net: ['Saldo bersih', 'Net'], total: ['Total', 'Total'],
  pie_empty: ['Belum ada pemasukan atau pengeluaran {0}.', 'No income or expenses {0}.'],
  cat_title: ['Pengeluaran per kategori', 'Expenses by category'], total_x: ['Total {0}', 'Total {0}'],
  no_exp: ['Tidak ada pengeluaran', 'No expenses'], no_exp_d: ['Belum ada pengeluaran {0}.', 'No expenses {0}.'],
  trend: ['Tren pengeluaran', 'Spending trend'], daily: ['Harian', 'Daily'], monthly: ['Bulanan', 'Monthly'],
  last6: ['6 bulan terakhir', 'Last 6 months'], last6_long: ['6 bulan terakhir (rentang lebih dari 31 hari ditampilkan per bulan)', 'Last 6 months (ranges over 31 days are shown by month)'],
  highest: ['Tertinggi {0}', 'Highest {0}'], tap_bar: ['Ketuk batang untuk melihat nilainya.', 'Tap a bar to see its value.'],
  cmp6: ['Pemasukan vs pengeluaran per bulan', 'Income vs expenses by month'], tip_cmp: ['masuk {0}, keluar {1}, selisih {2}', 'in {0}, out {1}, net {2}'],
  hist_sub: ['Ketuk transaksi untuk mengubah atau menghapus', 'Tap a transaction to edit or delete it'],
  search_ph: ['Cari catatan, kategori, atau nominal', 'Search notes, categories, or amounts'], search_aria: ['Cari transaksi', 'Search transactions'],
  all_types: ['Semua jenis', 'All types'], all_cats: ['Semua kategori', 'All categories'],
  from_date: ['Dari tanggal', 'From date'], to_date: ['Sampai tanggal', 'To date'],
  hist_empty: ['Riwayat masih kosong', 'No history yet'], hist_empty_d: ['Transaksi yang kamu catat akan muncul di sini.', 'Transactions you record will show up here.'],
  n_tx: ['{0} transaksi', '{0} transaction(s)'], n_tx_total: ['{0} transaksi, total {1}', '{0} transaction(s), total {1}'], clear_filters: ['Hapus filter', 'Clear filters'],
  no_match: ['Tidak ada yang cocok', 'No matches'], no_match_d: ['Coba kata kunci lain atau longgarkan filter.', 'Try another keyword or loosen the filters.'],
  show_more: ['Tampilkan lebih banyak', 'Show more'],
  w_cash: ['Tunai', 'Cash'], w_bank: ['Bank', 'Bank'], w_ewallet: ['E-wallet', 'E-wallet'], w_credit: ['Kredit', 'Credit'],
  w_sub: ['Saldo tiap dompet', 'Balance of each wallet'], w_total: ['Total saldo dompet', 'Total wallet balance'],
  w_avail: ['Dana tersedia', 'Available funds'], w_debt: ['Utang kredit', 'Credit owed'],
  w_types: ['Jenis dompet', 'Wallet types'], w_flow: ['Masuk {0}, keluar {1} bulan ini', 'In {0}, out {1} this month'],
  w_owed: ['Utang', 'Owed'], w_hint: ['Ketuk dompet untuk menyesuaikan saldonya, misalnya setelah tarik tunai, isi e-wallet, atau bayar tagihan kredit. Setiap transaksi menambah atau mengurangi saldo dompet yang dipilih.', 'Tap a wallet to adjust its balance, for example after an ATM withdrawal, an e-wallet top-up, or a credit payment. Each transaction adds to or subtracts from the wallet you pick.'],
  w_set: ['Saldo {0} sekarang', 'Current {0} balance'], w_set_d: ['Masukkan saldo saat ini. Riwayat transaksi tidak berubah.', 'Enter the current balance. Your transaction history is not changed.'],
  w_set_credit: ['Tagihan kredit sekarang', 'Current credit owed'], w_set_credit_d: ['Masukkan jumlah yang masih harus dibayar. Isi 0 kalau sudah lunas.', 'Enter the amount you still owe. Enter 0 if it is paid off.'],
  w_need: ['Saldo belum diisi.', 'Enter a balance first.'], w_saved: ['Saldo diperbarui', 'Balance updated'],
  a_sub: ['Opsional: catat aset yang kamu punya', 'Optional: track the assets you own'],
  k_saham: ['Saham', 'Stocks'], k_emas: ['Emas', 'Gold'], k_deposito: ['Deposito', 'Time deposit'], k_obligasi: ['Obligasi', 'Bonds'],
  k_reksadana: ['Reksadana', 'Mutual funds'], k_properti: ['Properti', 'Property'], k_crypto: ['Crypto', 'Crypto'],
  ph_saham: ['Misal: BBCA', 'E.g. BBCA'], ph_emas: ['Misal: Antam 10 gram', 'E.g. Antam 10 g'], ph_deposito: ['Misal: Bank Jago', 'E.g. Bank Jago'],
  ph_obligasi: ['Misal: ORI024', 'E.g. ORI024'], ph_reksadana: ['Misal: Reksadana pasar uang', 'E.g. Money market fund'],
  ph_properti: ['Misal: Rumah, tanah, ruko', 'E.g. House, land, shop'], ph_crypto: ['Misal: Bitcoin', 'E.g. Bitcoin'],
  pick_first: ['Aset apa saja yang kamu punya?', 'Which assets do you own?'], pick_first_d: ['Bagian ini opsional. Pilih jenisnya dulu, lalu isi nominalnya. Pilihan bisa diubah kapan saja.', 'This part is optional. Pick the types first, then enter the amounts. You can change this any time.'],
  pick_edit: ['Atur jenis aset', 'Manage asset types'], pick_edit_d: ['Ketuk untuk menambah atau mematikan jenis aset.', 'Tap to add or turn off an asset type.'],
  pick_save: ['Simpan pilihan', 'Save selection'], pick_need: ['Pilih minimal satu jenis aset.', 'Pick at least one asset type.'], pick_saved: ['Pilihan aset tersimpan', 'Asset selection saved'],
  pick_used: ['Masih ada {0} aset di {1}. Hapus dulu asetnya.', '{1} still has {0} asset(s). Delete them first.'],
  a_total: ['Total aset (harga beli)', 'Total assets (purchase price)'], a_top: ['Porsi terbesar', 'Largest share'], a_none: ['Belum ada', 'None yet'],
  a_count: ['Jumlah catatan', 'Entries'], a_n: ['{0} aset', '{0} asset(s)'], add_asset: ['Tambah aset', 'Add asset'], edit_asset: ['Ubah aset', 'Edit asset'],
  alloc: ['Alokasi aset', 'Asset allocation'], a_hist: ['Total aset dari waktu ke waktu', 'Total assets over time'],
  a_hist_hint: ['Total berubah setiap kamu menambah, mengubah, atau menghapus aset.', 'The total changes whenever you add, edit, or delete an asset.'],
  a_hist_wait: ['Grafik mulai terisi besok. Total dicatat sekali sehari, pada hari kamu membuka aplikasi.', 'The chart starts filling in tomorrow. The total is recorded once a day, on days you open the app.'],
  lowhigh: ['Terendah {0}, tertinggi {1}', 'Lowest {0}, highest {1}'], a_share: ['{0} dari total aset', '{0} of total assets'],
  a_nonom: ['Belum ada nominal.', 'No amount yet.'], a_fill: ['Isi nominal', 'Enter amount'],
  asset_kind: ['Jenis aset', 'Asset type'], buy_price: ['Harga beli', 'Purchase price'], buy_hint: ['Isi harga beli, atau dana yang kamu tempatkan.', 'Enter the purchase price, or the amount you put in.'],
  name_opt: ['Nama (opsional)', 'Name (optional)'],
  e_amount_empty: ['Nominal belum diisi.', 'Enter an amount.'], e_amount_zero: ['Nominal harus lebih dari 0.', 'Amount must be more than 0.'],
  e_cat: ['Pilih satu kategori.', 'Pick a category.'], e_date: ['Tanggal belum diisi.', 'Pick a date.'],
  e_buy_empty: ['Harga beli belum diisi.', 'Enter the purchase price.'], e_buy_zero: ['Harga beli harus lebih dari 0.', 'Purchase price must be more than 0.'],
  t_saved: ['Transaksi tersimpan', 'Transaction saved'], t_changed: ['Perubahan tersimpan', 'Changes saved'], t_deleted: ['Transaksi dihapus', 'Transaction deleted'],
  t_fail: ['Gagal menyimpan. Penyimpanan HP penuh atau diblokir.', 'Could not save. Phone storage is full or blocked.'], t_del_fail: ['Gagal menghapus.', 'Could not delete.'],
  a_saved: ['Aset tersimpan', 'Asset saved'], a_deleted: ['Aset dihapus', 'Asset deleted'],
  del_tx: ['Hapus transaksi ini?', 'Delete this transaction?'], del_asset: ['Hapus aset ini?', 'Delete this asset?'], no_undo: ['Tindakan ini tidak bisa dibatalkan.', 'This cannot be undone.'],
  more_sub: ['{0} transaksi dan {1} aset tersimpan di HP ini', '{0} transaction(s) and {1} asset(s) stored on this phone'],
  language: ['Bahasa', 'Language'],
  backup_sec: ['Cadangan data', 'Data backup'], backup: ['Cadangkan data', 'Back up data'], last_backup: ['Terakhir: {0}', 'Last: {0}'], never_backup: ['Belum pernah dicadangkan', 'Never backed up'],
  restore: ['Pulihkan dari cadangan', 'Restore from backup'], restore_d: ['Pilih file cadangan (.json)', 'Choose a backup file (.json)'],
  csv: ['Ekspor ke CSV', 'Export to CSV'], csv_d: ['Bisa dibuka di Excel atau Google Sheets', 'Opens in Excel or Google Sheets'],
  backup_hint: ['Data tidak dikirim ke mana pun. Kalau HP hilang atau aplikasi dihapus, data ikut hilang, jadi cadangkan secara rutin.', 'Your data is never sent anywhere. If the phone is lost or the app is removed, the data goes with it, so back up regularly.'],
  cats: ['Kategori', 'Categories'], new_cat: ['Kategori baru', 'New category'], del_cat_aria: ['Hapus kategori {0}', 'Delete category {0}'],
  security: ['Keamanan', 'Security'], pin_set: ['Pasang kunci PIN', 'Set a PIN lock'], pin_change: ['Ubah PIN', 'Change PIN'],
  pin_on: ['Kunci PIN aktif', 'PIN lock is on'], pin_off_d: ['Minta PIN setiap aplikasi dibuka', 'Ask for a PIN every time the app opens'], pin_disable: ['Matikan kunci PIN', 'Turn off PIN lock'],
  wipe: ['Hapus semua data', 'Delete all data'],
  b_none: ['Belum ada data untuk dicadangkan.', 'Nothing to back up yet.'], b_done: ['Cadangan dibuat', 'Backup created'],
  csv_none: ['Belum ada data untuk diekspor.', 'Nothing to export yet.'], csv_done: ['File CSV dibuat', 'CSV file created'],
  csv_head: ['Tanggal,Jenis,Kategori,Dompet,Nominal,Catatan', 'Date,Type,Category,Wallet,Amount,Note'],
  r_unread: ['File tidak bisa dibaca.', 'The file could not be read.'], r_bad: ['Ini bukan file cadangan Gavez.', 'This is not a Gavez backup file.'],
  r_title: ['Pulihkan cadangan?', 'Restore this backup?'], r_text: ['File berisi {0} transaksi dan {1} aset. Data di HP ini ({2} transaksi dan {3} aset) akan diganti.', 'The file holds {0} transaction(s) and {1} asset(s). Data on this phone ({2} transaction(s) and {3} asset(s)) will be replaced.'],
  r_ok: ['Pulihkan', 'Restore'], r_fail: ['Gagal memulihkan data.', 'Could not restore the data.'], r_done: ['Data dipulihkan', 'Data restored'],
  pin_https: ['Kunci PIN butuh koneksi aman (https).', 'PIN lock needs a secure (https) connection.'],
  pin_new: ['PIN baru', 'New PIN'], pin_make: ['Buat PIN', 'Create a PIN'], pin_digits: ['Masukkan 4 sampai 6 angka.', 'Enter 4 to 6 digits.'], next: ['Lanjut', 'Next'],
  pin_bad: ['PIN harus 4 sampai 6 angka.', 'The PIN must be 4 to 6 digits.'], pin_repeat: ['Ulangi PIN', 'Repeat the PIN'], pin_repeat_d: ['Masukkan PIN yang sama sekali lagi.', 'Enter the same PIN once more.'],
  pin_mismatch: ['PIN tidak sama. Coba lagi.', 'The PINs do not match. Try again.'], pin_fail: ['Gagal menyimpan PIN.', 'Could not save the PIN.'], pin_active: ['Kunci PIN aktif', 'PIN lock is on'],
  pin_off_q: ['Matikan kunci PIN?', 'Turn off the PIN lock?'], pin_off_text: ['Aplikasi akan langsung terbuka tanpa PIN.', 'The app will open without asking for a PIN.'], turn_off: ['Matikan', 'Turn off'], pin_off_done: ['Kunci PIN dimatikan', 'PIN lock turned off'],
  lock_title: ['Masukkan PIN', 'Enter your PIN'], unlock: ['Buka', 'Unlock'], forgot_pin: ['Lupa PIN', 'Forgot PIN'], pin_wrong: ['PIN salah. Coba lagi.', 'Wrong PIN. Try again.'],
  forgot_q: ['Lupa PIN?', 'Forgot your PIN?'], forgot_d: ['PIN tidak bisa dipulihkan. Satu-satunya jalan adalah menghapus semua data di HP ini, lalu memulihkan dari file cadangan.', 'A PIN cannot be recovered. The only way is to delete all data on this phone, then restore from a backup file.'],
  wipe_q: ['Hapus semua data?', 'Delete all data?'], wipe_d: ['Semua transaksi, dompet, aset, kategori, dan PIN di HP ini akan dihapus permanen.', 'All transactions, wallets, assets, categories, and the PIN on this phone will be permanently deleted.'],
  wipe_ok: ['Hapus semua', 'Delete all'], wipe_done: ['Semua data dihapus', 'All data deleted'],
  cat_min: ['Minimal harus ada satu kategori.', 'Keep at least one category.'], cat_del_q: ['Hapus kategori "{0}"?', 'Delete category "{0}"?'],
  cat_used: ['{0} transaksi lama tetap tersimpan dengan kategori ini.', '{0} past transaction(s) keep this category.'], cat_unused: ['Kategori ini belum dipakai.', 'This category has not been used.'],
  cat_deleted: ['Kategori dihapus', 'Category deleted'], cat_empty: ['Nama kategori belum diisi.', 'Enter a category name.'], cat_dup: ['Kategori itu sudah ada.', 'That category already exists.'],
  cat_fail: ['Gagal menyimpan kategori.', 'Could not save the category.'], cat_added: ['Kategori ditambahkan', 'Category added']
};
const MONTHS = [['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']];
const DAYS = [['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']];

/* ---------- Data ---------- */
const KEY = 'catatin.v1'; // nama kunci lama sengaja dipertahankan supaya data tidak hilang
const DEFAULT_CATS = {
  expense: ['FnB', 'Transportation', 'Kuota Internet', 'Electricity Bill', 'Education', 'Peralatan Rumah',
    'Fun', 'Laundry', 'Pay Interest', 'Outgoing Transfer', 'Other Expenses'],
  income: ['Salary', 'Other Income', 'Friends Payment', 'Incoming Transfer']
};
const EMOJI = {
  'FnB': '🍜', 'Transportation': '🛵', 'Kuota Internet': '📶', 'Electricity Bill': '💡', 'Education': '📚',
  'Peralatan Rumah': '🧹', 'Fun': '🎮', 'Laundry': '🧺', 'Pay Interest': '🏦', 'Outgoing Transfer': '↗️',
  'Other Expenses': '🧾', 'Salary': '💼', 'Other Income': '✨', 'Friends Payment': '🤝', 'Incoming Transfer': '↘️'
};
const emo = (cat, type) => EMOJI[cat] || (type === 'income' ? '💰' : '🏷️');
/* Jenis aset (urutan ini juga urutan warna di pie chart alokasi) */
const ASSET_KINDS = { saham: '📈', emas: '🥇', deposito: '🏦', obligasi: '📜', reksadana: '📊', properti: '🏠', crypto: '🪙' };
const KIND_ORDER = Object.keys(ASSET_KINDS);
/* Jenis dompet */
const WALLETS = { cash: '💵', bank: '🏦', ewallet: '📱', credit: '💳' };
const WALLET_ORDER = Object.keys(WALLETS);
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const fin = (v) => { const n = Number(v); return isFinite(n) ? n : 0; };

function emptyDb() {
  return {
    tx: [], cats: JSON.parse(JSON.stringify(DEFAULT_CATS)), assets: [], assetKinds: [], snaps: [],
    wallets: { cash: 0, bank: 0, ewallet: 0, credit: 0 }, lastWallet: 'cash', lang: 'id', pin: null, lastBackup: null
  };
}
function cleanTx(list) {
  if (!Array.isArray(list)) return [];
  return list
    .filter((t) => t && (t.type === 'income' || t.type === 'expense') && Number(t.amount) > 0 && DATE_RE.test(t.date || ''))
    .map((t) => ({
      id: String(t.id || newId()), type: t.type, amount: Math.round(Number(t.amount)),
      cat: String(t.cat || 'Lainnya').slice(0, 40), date: t.date, wallet: WALLETS[t.wallet] ? t.wallet : 'cash',
      note: String(t.note || '').slice(0, 120), createdAt: Number(t.createdAt) || Date.now()
    }));
}
function cleanCats(c) {
  const out = {};
  for (const k of ['expense', 'income']) {
    const arr = c && Array.isArray(c[k]) ? c[k].map((s) => String(s).trim().slice(0, 40)).filter(Boolean) : [];
    out[k] = arr.length ? [...new Set(arr)] : DEFAULT_CATS[k].slice();
  }
  return out;
}
function cleanAssets(list) {
  if (!Array.isArray(list)) return [];
  const out = [];
  list.forEach((a) => {
    if (!a || !ASSET_KINDS[a.kind]) return;
    // Data versi lama (jumlah x harga beli, atau pokok) diubah menjadi satu nominal harga beli
    let amount = fin(a.amount);
    if (!(amount > 0)) amount = a.principal !== undefined ? fin(a.principal) : fin(a.qty) * fin(a.avg);
    amount = Math.round(amount);
    if (!(amount > 0)) return;
    out.push({ id: String(a.id || newId()), kind: a.kind, name: String(a.name || '').trim().slice(0, 40), amount, createdAt: fin(a.createdAt) || Date.now() });
  });
  return out;
}
function cleanKinds(list, assets) {
  const set = new Set(Array.isArray(list) ? list : []);
  assets.forEach((a) => set.add(a.kind));
  return KIND_ORDER.filter((k) => set.has(k));
}
function cleanSnaps(list) {
  if (!Array.isArray(list)) return [];
  const m = {};
  list.forEach((x) => { if (x && DATE_RE.test(x.d || '') && fin(x.v) >= 0) m[x.d] = Math.round(fin(x.v)); });
  return Object.keys(m).sort().map((d) => ({ d, v: m[d] }));
}
function cleanWallets(w) {
  const out = {};
  WALLET_ORDER.forEach((k) => { out[k] = Math.round(fin(w && w[k])); });
  return out;
}
function loadDb() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptyDb();
    const d = JSON.parse(raw), assets = cleanAssets(d.assets);
    return {
      tx: cleanTx(d.tx), cats: cleanCats(d.cats), assets, assetKinds: cleanKinds(d.assetKinds, assets), snaps: cleanSnaps(d.snaps),
      wallets: cleanWallets(d.wallets), lastWallet: WALLETS[d.lastWallet] ? d.lastWallet : 'cash',
      lang: d.lang === 'en' ? 'en' : 'id', pin: d.pin || null, lastBackup: d.lastBackup || null
    };
  } catch (e) { return emptyDb(); }
}
function saveDb() {
  try { localStorage.setItem(KEY, JSON.stringify(db)); return true; }
  catch (e) { return false; }
}
function newId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }

let db = loadDb();

/* ---------- Bantuan: bahasa, angka, tanggal ---------- */
const LI = () => (db.lang === 'en' ? 1 : 0);
function T(key, ...args) {
  const s = STR[key];
  let v = s ? s[LI()] : key;
  args.forEach((a, i) => { v = v.split('{' + i + '}').join(a); });
  return v;
}
const $ = (s, el) => (el || document).querySelector(s);
const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const dots = (n) => String(Math.round(Math.abs(n))).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const rp = (n) => (n < 0 ? '−' : '') + 'Rp ' + dots(n);
const decSep = (s) => (LI() ? s : s.replace('.', ','));
function rpShort(n) {
  const a = Math.abs(n), U = LI() ? ['K', 'M', 'B'] : ['rb', 'jt', 'M'];
  const f = (v, u) => decSep((v >= 100 ? Math.round(v) : Math.round(v * 10) / 10).toString()) + ' ' + u;
  if (a >= 1e9) return 'Rp ' + f(a / 1e9, U[2]);
  if (a >= 1e6) return 'Rp ' + f(a / 1e6, U[1]);
  if (a >= 1e3) return 'Rp ' + f(a / 1e3, U[0]);
  return 'Rp ' + a;
}
const pct = (n) => decSep((Math.round(n * 10) / 10).toString()) + '%';
const pad = (n) => String(n).padStart(2, '0');
const iso = (d) => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
const parse = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
const today = () => iso(new Date());
const addDays = (s, n) => { const d = parse(s); d.setDate(d.getDate() + n); return iso(d); };
const daysBetween = (a, b) => Math.round((parse(b) - parse(a)) / 864e5) + 1;
function dateLabel(s, long) {
  const d = parse(s);
  return d.getDate() + ' ' + MONTHS[LI()][d.getMonth()] + (long || d.getFullYear() !== new Date().getFullYear() ? ' ' + d.getFullYear() : '');
}
function dayTitle(s) {
  const t = today();
  if (s === t) return T('p_today');
  if (s === addDays(t, -1)) return T('yesterday');
  return DAYS[LI()][parse(s).getDay()] + ', ' + dateLabel(s);
}
const kindLabel = (k) => T('k_' + k);
const walletLabel = (k) => T('w_' + k);

/* ---------- Periode ---------- */
const state = {
  tab: 'home',
  picking: false,
  kindPick: new Set(),
  period: 'month',
  custom: { from: addDays(today(), -29), to: today() },
  trend: 'daily',
  hist: { q: '', type: 'all', cat: 'all', from: '', to: '', limit: 60 }
};
const PERIODS = ['today', 'week', 'month', 'custom'];

function range() {
  const t = today(), d = parse(t);
  if (state.period === 'today') return { from: t, to: t };
  if (state.period === 'week') { const f = addDays(t, -((d.getDay() + 6) % 7)); return { from: f, to: addDays(f, 6) }; }
  if (state.period === 'month') return { from: iso(new Date(d.getFullYear(), d.getMonth(), 1)), to: iso(new Date(d.getFullYear(), d.getMonth() + 1, 0)) };
  let { from, to } = state.custom;
  if (from > to) [from, to] = [to, from];
  return { from, to };
}
function prevRange(r) {
  if (state.period === 'month') {
    const d = parse(r.from);
    return { from: iso(new Date(d.getFullYear(), d.getMonth() - 1, 1)), to: iso(new Date(d.getFullYear(), d.getMonth(), 0)) };
  }
  const n = daysBetween(r.from, r.to);
  return { from: addDays(r.from, -n), to: addDays(r.from, -1) };
}
function periodName() {
  const r = range();
  if (state.period !== 'custom') return T('pn_' + state.period);
  return r.from === r.to ? dateLabel(r.from, true) : dateLabel(r.from) + ' – ' + dateLabel(r.to, true);
}
const inRange = (t, r) => t.date >= r.from && t.date <= r.to;
const sum = (list, type) => list.reduce((a, t) => a + (t.type === type ? t.amount : 0), 0);
const sorted = (list) => list.slice().sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : b.createdAt - a.createdAt));

/* ---------- Dompet & aset: perhitungan ---------- */
function walletFlow(k) { return db.tx.reduce((a, t) => a + (t.wallet === k ? (t.type === 'income' ? t.amount : -t.amount) : 0), 0); }
function walletBalance(k) { return db.wallets[k] + walletFlow(k); }
function portfolio() {
  const kinds = {}; let value = 0;
  KIND_ORDER.forEach((k) => { kinds[k] = { value: 0, items: [] }; });
  db.assets.forEach((a) => { kinds[a.kind].value += a.amount; kinds[a.kind].items.push(a); value += a.amount; });
  return { kinds, value };
}
// Simpan total aset satu kali per hari, untuk grafik riwayat
function recordSnapshot() {
  if (!db.assets.length && !db.snaps.length) return;
  const v = portfolio().value, t = today(), last = db.snaps[db.snaps.length - 1];
  if (last && last.d === t) { if (last.v === v) return; last.v = v; }
  else db.snaps.push({ d: t, v });
  saveDb();
}

/* ---------- Toast & dialog ---------- */
let toastTimer;
function toast(msg, isError) {
  const el = $('#toast');
  el.textContent = msg;
  el.className = 'toast show' + (isError ? ' error' : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.className = 'toast' + (isError ? ' error' : ''); }, isError ? 3600 : 2200);
}
function ask(opts) {
  return new Promise((resolve) => {
    const wrap = $('#dialog'), form = $('.dialog', wrap), input = $('#dlg-input'), ok = $('#dlg-ok'), cancel = $('#dlg-cancel');
    $('#dlg-title').textContent = opts.title;
    $('#dlg-text').textContent = opts.text || '';
    $('#dlg-text').hidden = !opts.text;
    ok.textContent = opts.ok || 'OK';
    ok.className = 'btn ' + (opts.danger ? 'danger' : 'primary');
    cancel.textContent = T('cancel');
    input.hidden = !opts.input;
    input.value = '';
    delete input.dataset.money;
    if (opts.input) {
      input.type = opts.input.type || 'text';
      input.placeholder = opts.input.placeholder || '';
      input.inputMode = opts.input.numeric || opts.input.money ? 'numeric' : 'text';
      input.maxLength = opts.input.numeric ? 6 : opts.input.money ? 17 : 40;
      if (opts.input.money) input.dataset.money = '';
    }
    wrap.hidden = false;
    (opts.input ? input : ok).focus();
    const done = (val) => {
      wrap.hidden = true;
      form.removeEventListener('submit', onOk);
      cancel.removeEventListener('click', onCancel);
      resolve(val);
    };
    const onOk = (e) => { e.preventDefault(); done(opts.input ? input.value.trim() : true); };
    const onCancel = () => done(null);
    form.addEventListener('submit', onOk);
    cancel.addEventListener('click', onCancel);
  });
}

/* ---------- Potongan tampilan ---------- */
const ARROW_IN = '<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"/></svg>';
const ARROW_OUT = '<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>';
const GEAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8"/></svg>';
const gearBtn = () => `<button class="icon-btn" data-tab="more" aria-label="${T('settings_aria')}">${GEAR}</button>`;
const head = (title, sub, gear) => `<header class="page-head"><div><h1>${title}</h1><p class="sub">${sub}</p></div>${gear === false ? '' : gearBtn()}</header>`;

function periodPills() {
  let h = `<div class="periods" role="group" aria-label="${T('period')}">` +
    PERIODS.map((k) => `<button class="pill" data-act="period" data-period="${k}" aria-pressed="${state.period === k}">${T('p_' + k)}</button>`).join('') + '</div>';
  if (state.period === 'custom') {
    h += `<div class="custom-range">
      <label class="field"><span class="field-label">${T('from')}</span><input type="date" data-custom="from" value="${state.custom.from}"></label>
      <label class="field"><span class="field-label">${T('to')}</span><input type="date" data-custom="to" value="${state.custom.to}"></label>
    </div>`;
  }
  return h;
}
function txRow(t) {
  const sign = t.type === 'income' ? '+' : '−';
  return `<button class="tx" data-act="edit" data-id="${esc(t.id)}">
    <span class="emo" aria-hidden="true">${emo(t.cat, t.type)}</span>
    <span class="mid"><span class="cat">${esc(t.cat)}</span><span class="note">${walletLabel(t.wallet)}${t.note ? ', ' + esc(t.note) : ''}</span></span>
    <span class="amt ${t.type}">${sign} Rp ${dots(t.amount)}</span>
  </button>`;
}
function emptyBlock(glyph, title, text, withButton, small) {
  return `<div class="empty${small ? ' small' : ''}">
    <div class="glyph" aria-hidden="true">${glyph}</div><h3>${title}</h3><p>${text}</p>
    ${withButton ? `<button class="btn primary" data-act="add">${T('add_tx')}</button>` : ''}
  </div>`;
}
/* Pie chart berbentuk donat. parts: [{label, value, color}] */
function donut(parts, midTop, midBottom) {
  const live = parts.filter((p) => p.value > 0), total = live.reduce((a, p) => a + p.value, 0);
  const R = 40, C = 2 * Math.PI * R, gap = live.length > 1 ? 1.6 : 0;
  let acc = 0;
  const segs = live.map((p) => {
    const len = p.value / total * C;
    const s = `<circle cx="50" cy="50" r="${R}" style="stroke:${p.color}" stroke-dasharray="${Math.max(0.6, len - gap).toFixed(2)} ${C.toFixed(2)}" stroke-dashoffset="${(-acc).toFixed(2)}" transform="rotate(-90 50 50)"><title>${esc(p.label)}: ${rp(p.value)} (${pct(p.value / total * 100)})</title></circle>`;
    acc += len;
    return s;
  }).join('');
  const aria = live.map((p) => `${p.label} ${pct(p.value / total * 100)}`).join(', ');
  return `<div class="donut"><svg viewBox="0 0 100 100" role="img" aria-label="${esc(aria)}"><circle class="track" cx="50" cy="50" r="${R}"/>${segs}</svg>
    <div class="donut-mid"><span>${midTop}</span><b>${midBottom}</b></div></div>
    <div class="pie-legend">${live.map((p) => `<div class="pie-row"><span class="dot" style="background:${p.color}"></span><span class="n">${esc(p.label)}</span><span class="v">${rp(p.value)}</span><span class="p">${pct(p.value / total * 100)}</span></div>`).join('')}</div>`;
}

/* ---------- Beranda ---------- */
function insightData(r, list) {
  const t = today();
  const end = r.to < t ? r.to : (r.from > t ? r.from : t);
  const elapsed = Math.max(1, daysBetween(r.from, end));
  const exp = sum(list, 'expense');
  const byCat = {};
  list.forEach((x) => { if (x.type === 'expense') byCat[x.cat] = (byCat[x.cat] || 0) + x.amount; });
  const top = Object.entries(byCat).sort((a, b) => b[1] - a[1])[0] || null;
  const p = prevRange(r);
  let pEnd = addDays(p.from, elapsed - 1);
  if (pEnd > p.to) pEnd = p.to;
  const prevExp = sum(db.tx.filter((x) => x.date >= p.from && x.date <= pEnd), 'expense');
  return { exp, top, avg: exp / elapsed, elapsed, prevExp };
}
function barsChart(id, groups, twoSeries) {
  // groups: [{label, a, b, tip}] — a = pengeluaran, b = pemasukan
  const max = Math.max(1, ...groups.map((g) => Math.max(g.a || 0, g.b || 0)));
  const step = groups.length > 16 ? 5 : groups.length > 8 ? 2 : 1;
  const cols = groups.map((g) => {
    const bars = (twoSeries ? `<i class="bar income" style="height:${(g.b / max * 100).toFixed(1)}%"></i>` : '') +
      `<i class="bar" style="height:${(g.a / max * 100).toFixed(1)}%"></i>`;
    return `<button class="col" data-act="tip" data-chart="${id}" data-tip="${esc(g.tip)}" aria-label="${esc(g.tip.replace(/<[^>]+>/g, ''))}">${bars}</button>`;
  }).join('');
  const labels = groups.map((g, i) => `<span>${i % step === 0 ? esc(g.label) : ''}</span>`).join('');
  return `<p class="ymax">${T('highest', rpShort(max))}</p><div class="bars" id="${id}">${cols}</div><div class="xlabels" aria-hidden="true">${labels}</div>
    <p class="chart-tip" id="${id}-tip">${T('tap_bar')}</p>`;
}
function monthsBack(endIso, n) {
  const e = parse(endIso), out = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(e.getFullYear(), e.getMonth() - i, 1);
    const key = d.getFullYear() + '-' + pad(d.getMonth() + 1);
    out.push({ key, label: MONTHS[LI()][d.getMonth()], full: MONTHS[LI()][d.getMonth()] + ' ' + d.getFullYear(), inc: 0, exp: 0 });
  }
  db.tx.forEach((t) => {
    const m = out.find((o) => o.key === t.date.slice(0, 7));
    if (m) m[t.type === 'income' ? 'inc' : 'exp'] += t.amount;
  });
  return out;
}
function statsBlock(r, list) {
  const inc = sum(list, 'income'), exp = sum(list, 'expense'), pn = esc(periodName());
  let h = `<section class="section"><div class="section-head"><h2>${T('stats')}</h2></div><div class="stack">`;

  // 1) Pie: pemasukan vs pengeluaran
  h += `<div class="card chart-card"><div class="chart-head"><h2>${T('pie_title')}</h2></div><p class="chart-sub">${T('pie_sub', pn)}</p>`;
  if (inc + exp > 0) {
    h += donut([{ label: T('income'), value: inc, color: 'var(--income)' }, { label: T('expenses'), value: exp, color: 'var(--expense)' }], T('net'), rp(inc - exp));
  } else h += emptyBlock('🥧', T('empty_period'), T('pie_empty', pn), false, true);
  h += '</div>';

  // 2) Pengeluaran per kategori
  const byCat = {};
  list.forEach((x) => { if (x.type === 'expense') byCat[x.cat] = (byCat[x.cat] || 0) + x.amount; });
  const cats = Object.entries(byCat).sort((a, b) => b[1] - a[1]);
  h += `<div class="card chart-card"><div class="chart-head"><h2>${T('cat_title')}</h2></div><p class="chart-sub">${T('total_x', rp(exp))}</p>`;
  if (cats.length) {
    h += '<div class="hbars">' + cats.map(([c, v]) => `<div class="hbar"><div class="top"><span class="name">${emo(c, 'expense')} ${esc(c)}</span><span class="val">${rp(v)}<small>${pct(v / exp * 100)}</small></span></div>
      <div class="track"><div class="fill" style="width:${(v / cats[0][1] * 100).toFixed(1)}%"></div></div></div>`).join('') + '</div>';
  } else h += emptyBlock('🍃', T('no_exp'), T('no_exp_d', pn), false, true);
  h += '</div>';

  // 3) Tren pengeluaran
  let from = r.from, to = r.to, n = daysBetween(from, to);
  if (n === 1) { from = addDays(to, -6); n = 7; }
  const tooLong = n > 31, mode = tooLong ? 'monthly' : state.trend;
  h += `<div class="card chart-card"><div class="chart-head"><h2>${T('trend')}</h2>
    <div class="segmented small" role="group">
      <button data-act="trend" data-trend="daily" aria-pressed="${mode === 'daily'}"${tooLong ? ' disabled' : ''}>${T('daily')}</button>
      <button data-act="trend" data-trend="monthly" aria-pressed="${mode === 'monthly'}">${T('monthly')}</button>
    </div></div>`;
  if (mode === 'daily') {
    const groups = [];
    for (let i = 0; i < n; i++) {
      const day = addDays(from, i);
      const v = db.tx.reduce((a, t) => a + (t.type === 'expense' && t.date === day ? t.amount : 0), 0);
      groups.push({ label: String(parse(day).getDate()), a: v, tip: `<b>${dayTitle(day)}</b>: ${rp(v)}` });
    }
    h += `<p class="chart-sub">${dateLabel(from)} – ${dateLabel(to, true)}</p>` + barsChart('c-trend', groups, false);
  } else {
    const groups = monthsBack(to, 6).map((m) => ({ label: m.label, a: m.exp, tip: `<b>${m.full}</b>: ${rp(m.exp)}` }));
    h += `<p class="chart-sub">${T(tooLong ? 'last6_long' : 'last6')}</p>` + barsChart('c-trend', groups, false);
  }
  h += '</div>';

  // 4) Pemasukan vs pengeluaran per bulan
  const groups = monthsBack(to, 6).map((m) => ({ label: m.label, a: m.exp, b: m.inc, tip: `<b>${m.full}</b>: ${T('tip_cmp', rp(m.inc), rp(m.exp), rp(m.inc - m.exp))}` }));
  h += `<div class="card chart-card"><div class="chart-head"><h2>${T('cmp6')}</h2></div>
    <p class="chart-sub">${T('last6')}</p>
    <div class="legend"><span><i class="sw-income"></i>${T('income')}</span><span><i class="sw-expense"></i>${T('expenses')}</span></div>
    ${barsChart('c-cmp', groups, true)}</div>`;
  return h + '</div></section>';
}
function renderHome() {
  const r = range();
  const list = db.tx.filter((t) => inRange(t, r));
  const inc = sum(list, 'income'), exp = sum(list, 'expense');
  const d = new Date(), pn = esc(periodName());
  let h = head('Gavez', `${DAYS[LI()][d.getDay()]}, ${d.getDate()} ${MONTHS[LI()][d.getMonth()]} ${d.getFullYear()}`) + periodPills();
  h += `<section class="balance" aria-label="${T('summary')}">
    <p class="label">${T('net_label', pn)}</p>
    <p class="amount">${rp(inc - exp)}</p>
    <div class="split">
      <div class="cell"><p class="k">${ARROW_IN} ${T('income')}</p><p class="v">${rp(inc)}</p></div>
      <div class="cell"><p class="k">${ARROW_OUT} ${T('expenses')}</p><p class="v">${rp(exp)}</p></div>
    </div>
  </section>`;
  if (!db.tx.length) return h + emptyBlock('✍️', T('no_tx'), T('no_tx_d'), true);

  const stale = !db.lastBackup || (Date.now() - db.lastBackup) > 30 * 864e5;
  if ((db.tx.length >= 20 || db.assets.length) && stale) {
    h += `<div class="card notice"><span>${T('backup_nudge')}</span><button class="btn small primary" data-act="backup">${T('backup_btn')}</button></div>`;
  }

  // Insight
  const ins = insightData(r, list);
  h += `<section class="section"><div class="section-head"><h2>${T('ins_title')}</h2></div><div class="insights">`;
  if (ins.exp > 0) {
    h += `<div class="card insight"><span class="ico" aria-hidden="true">${emo(ins.top[0], 'expense')}</span><div>
      <p class="k">${T('ins_top')}</p><p class="v">${esc(ins.top[0])}</p><p class="d">${T('ins_top_d', rp(ins.top[1]), pct(ins.top[1] / ins.exp * 100))}</p></div></div>`;
    h += `<div class="card insight"><span class="ico" aria-hidden="true">📅</span><div>
      <p class="k">${T('ins_avg')}</p><p class="v">${rp(Math.round(ins.avg))}</p><p class="d">${T('ins_avg_d', ins.elapsed)}</p></div></div>`;
  }
  let cmp;
  if (ins.prevExp > 0) {
    const diff = ins.exp - ins.prevExp, p = pct(Math.abs(diff) / ins.prevExp * 100);
    cmp = diff === 0 ? `<p class="v">${T('same')}</p>` : `<p class="v"><span class="${diff > 0 ? 'up' : 'down'}">${T(diff > 0 ? 'up' : 'down', p)}</span></p>`;
    cmp += `<p class="d">${T('cmp_d', rp(ins.exp), rp(ins.prevExp))}</p>`;
  } else {
    cmp = `<p class="v">${T(ins.exp > 0 ? 'cmp_none' : 'cmp_noexp')}</p><p class="d">${T('cmp_none_d')}</p>`;
  }
  h += `<div class="card insight"><span class="ico" aria-hidden="true">⚖️</span><div><p class="k">${T('ins_cmp')}</p>${cmp}</div></div></div></section>`;

  // Transaksi terbaru
  const recent = sorted(list).slice(0, 5);
  h += `<section class="section"><div class="section-head"><h2>${T('recent')}</h2><button class="text-btn" data-tab="history">${T('see_all')}</button></div>`;
  h += recent.length
    ? `<div class="card tx-list">${recent.map(txRow).join('')}</div>`
    : `<div class="card">${emptyBlock('🗓️', T('empty_period'), T('empty_period_d', pn), false, true)}</div>`;
  h += '</section>';

  return h + statsBlock(r, list);
}

/* ---------- Riwayat ---------- */
function allCats() {
  const s = new Set([...db.cats.expense, ...db.cats.income]);
  db.tx.forEach((t) => s.add(t.cat));
  return [...s];
}
function renderHistory() {
  const f = state.hist;
  return head(T('tab_history'), T('hist_sub')) + `<div class="filters">
    <input type="search" id="h-q" placeholder="${T('search_ph')}" value="${esc(f.q)}" aria-label="${T('search_aria')}" enterkeyhint="search">
    <div class="row-2">
      <select id="h-type" aria-label="${T('all_types')}">
        <option value="all">${T('all_types')}</option>
        <option value="expense"${f.type === 'expense' ? ' selected' : ''}>${T('expenses')}</option>
        <option value="income"${f.type === 'income' ? ' selected' : ''}>${T('income')}</option>
      </select>
      <select id="h-cat" aria-label="${T('category')}">
        <option value="all">${T('all_cats')}</option>
        ${allCats().map((c) => `<option${f.cat === c ? ' selected' : ''}>${esc(c)}</option>`).join('')}
      </select>
    </div>
    <div class="row-2">
      <label class="field"><span class="field-label">${T('from_date')}</span><input type="date" id="h-from" value="${f.from}"></label>
      <label class="field"><span class="field-label">${T('to_date')}</span><input type="date" id="h-to" value="${f.to}"></label>
    </div>
  </div>
  <div id="h-out"></div>`;
}
function histFiltered() {
  const f = state.hist, q = f.q.trim().toLowerCase(), qNum = q.replace(/[^\d]/g, '');
  return sorted(db.tx.filter((t) => {
    if (f.type !== 'all' && t.type !== f.type) return false;
    if (f.cat !== 'all' && t.cat !== f.cat) return false;
    if (f.from && t.date < f.from) return false;
    if (f.to && t.date > f.to) return false;
    if (q) {
      const hit = t.note.toLowerCase().includes(q) || t.cat.toLowerCase().includes(q) || walletLabel(t.wallet).toLowerCase().includes(q) || (qNum && String(t.amount).includes(qNum));
      if (!hit) return false;
    }
    return true;
  }));
}
function updateHistoryList() {
  const out = $('#h-out');
  if (!out) return;
  const f = state.hist, list = histFiltered();
  const active = f.q || f.type !== 'all' || f.cat !== 'all' || f.from || f.to;
  if (!db.tx.length) { out.innerHTML = emptyBlock('🧾', T('hist_empty'), T('hist_empty_d'), true); return; }
  let h = `<div class="result-meta"><span>${active ? T('n_tx_total', list.length, rp(sum(list, 'income') - sum(list, 'expense'))) : T('n_tx', list.length)}</span>${active ? `<button class="text-btn" data-act="hist-reset">${T('clear_filters')}</button>` : ''}</div>`;
  if (!list.length) { out.innerHTML = h + emptyBlock('🔍', T('no_match'), T('no_match_d'), false); return; }
  const shown = list.slice(0, f.limit);
  let day = null;
  shown.forEach((t) => {
    if (t.date !== day) {
      if (day !== null) h += '</div>';
      day = t.date;
      const dayNet = list.filter((x) => x.date === day).reduce((a, x) => a + (x.type === 'income' ? x.amount : -x.amount), 0);
      h += `<div class="day-head"><span>${dayTitle(day)}</span><span>${dayNet > 0 ? '+ ' : dayNet < 0 ? '− ' : ''}Rp ${dots(dayNet)}</span></div><div class="card tx-list">`;
    }
    h += txRow(t);
  });
  h += '</div>';
  if (list.length > shown.length) h += `<div style="text-align:center;margin-top:16px"><button class="btn ghost" data-act="hist-more">${T('show_more')}</button></div>`;
  out.innerHTML = h;
}

/* ---------- Dompet ---------- */
function renderWallet() {
  const bal = {}; let total = 0;
  WALLET_ORDER.forEach((k) => { bal[k] = walletBalance(k); total += bal[k]; });
  const avail = bal.cash + bal.bank + bal.ewallet;
  const t = today(), m = t.slice(0, 7);
  let h = head(T('tab_wallet'), T('w_sub'));
  h += `<section class="balance flush" aria-label="${T('summary')}">
    <p class="label">${T('w_total')}</p>
    <p class="amount">${rp(total)}</p>
    <div class="split">
      <div class="cell"><p class="k">${T('w_avail')}</p><p class="v">${rp(avail)}</p></div>
      <div class="cell"><p class="k">${T('w_debt')}</p><p class="v">${rp(Math.max(0, -bal.credit))}</p></div>
    </div>
  </section>
  <section class="section"><div class="section-head"><h2>${T('w_types')}</h2></div><div class="card tx-list">`;
  WALLET_ORDER.forEach((k) => {
    const month = db.tx.filter((x) => x.wallet === k && x.date.slice(0, 7) === m);
    const b = bal[k], owed = k === 'credit' && b < 0;
    h += `<button class="tx asset" data-act="wallet-set" data-w="${k}">
      <span class="emo" aria-hidden="true">${WALLETS[k]}</span>
      <span class="mid"><span class="cat">${walletLabel(k)}</span><span class="note">${T('w_flow', rpShort(sum(month, 'income')), rpShort(sum(month, 'expense')))}</span></span>
      <span class="amt ${b < 0 ? 'neg' : ''}">${owed ? T('w_owed') + ' Rp ' + dots(b) : rp(b)}</span>
    </button>`;
  });
  return h + `</div><p class="hint">${T('w_hint')}</p></section>`;
}
async function setWallet(k) {
  if (!WALLETS[k]) return;
  const credit = k === 'credit';
  const v = await ask({
    title: credit ? T('w_set_credit') : T('w_set', walletLabel(k)), text: T(credit ? 'w_set_credit_d' : 'w_set_d'),
    ok: T('save'), input: { money: true, placeholder: 'Rp' }
  });
  if (v === null) return;
  const digits = v.replace(/\D/g, '');
  if (!digits) { toast(T('w_need'), true); return; }
  const before = db.wallets[k], target = credit ? -Number(digits) : Number(digits);
  db.wallets[k] = target - walletFlow(k);
  if (!saveDb()) { db.wallets[k] = before; toast(T('t_fail'), true); return; }
  render(false);
  toast(T('w_saved'));
}

/* ---------- Aset ---------- */
let lineData = null;
function lineChart(id, pts) {
  const W = 320, H = 150, pl = 8, pr = 8, pt = 10, pb = 12;
  const t0 = parse(pts[0].d).getTime(), t1 = parse(pts[pts.length - 1].d).getTime();
  const vs = pts.map((p) => p.v);
  let lo = Math.min(...vs), hi = Math.max(...vs);
  const padv = Math.max((hi - lo) * 0.15, hi * 0.02, 1);
  lo = Math.max(0, lo - padv); hi += padv;
  const xs = pts.map((p) => +(pl + (t1 === t0 ? 0.5 : (parse(p.d).getTime() - t0) / (t1 - t0)) * (W - pl - pr)).toFixed(1));
  const ys = pts.map((p) => +(pt + (1 - (p.v - lo) / (hi - lo)) * (H - pt - pb)).toFixed(1));
  const line = xs.map((x, i) => (i ? 'L' : 'M') + x + ' ' + ys[i]).join('');
  const area = line + 'L' + xs[xs.length - 1] + ' ' + (H - pb) + 'L' + xs[0] + ' ' + (H - pb) + 'Z';
  const last = pts[pts.length - 1], li = pts.length - 1;
  lineData = { id, pts, xs, ys };
  return `<div class="linechart" id="${id}">
    <p class="ymax">${T('lowhigh', rpShort(Math.min(...vs)), rpShort(Math.max(...vs)))}</p>
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${T('a_hist')}: ${rp(last.v)}">
      <defs><linearGradient id="${id}-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b9f27c" stop-opacity=".38"/><stop offset="1" stop-color="#b9f27c" stop-opacity="0"/></linearGradient></defs>
      <path d="${area}" fill="url(#${id}-g)"/>
      <line x1="${pl}" x2="${W - pr}" y1="${H - pb}" y2="${H - pb}" stroke="rgba(255,255,255,.14)"/>
      <path d="${line}" fill="none" stroke="#b9f27c" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
      <line id="${id}-x" x1="${xs[li]}" x2="${xs[li]}" y1="${pt}" y2="${H - pb}" stroke="rgba(255,255,255,.4)" stroke-dasharray="3 3" visibility="hidden"/>
      <circle id="${id}-dot" r="5" fill="#b9f27c" stroke="#131715" stroke-width="2" cx="${xs[li]}" cy="${ys[li]}"/>
    </svg>
    <div class="axis-row" aria-hidden="true"><span>${dateLabel(pts[0].d)}</span><span>${dateLabel(last.d, true)}</span></div>
    <p class="chart-tip" id="${id}-tip"><b>${dayTitle(last.d)}</b>: ${rp(last.v)}</p>
  </div>`;
}
function lineHover(e) {
  const svg = e.target && e.target.closest ? e.target.closest('.linechart svg') : null;
  if (!svg || !lineData) return;
  const r = svg.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width * 320;
  let best = 0, bd = Infinity;
  lineData.xs.forEach((px, i) => { const d = Math.abs(px - x); if (d < bd) { bd = d; best = i; } });
  const id = lineData.id, p = lineData.pts[best], ln = $('#' + id + '-x'), dot = $('#' + id + '-dot');
  if (!ln || !dot) return;
  ln.setAttribute('x1', lineData.xs[best]); ln.setAttribute('x2', lineData.xs[best]); ln.setAttribute('visibility', 'visible');
  dot.setAttribute('cx', lineData.xs[best]); dot.setAttribute('cy', lineData.ys[best]);
  $('#' + id + '-tip').innerHTML = `<b>${dayTitle(p.d)}</b>: ${rp(p.v)}`;
}
function kindChip(k, pressed, act) {
  return `<button type="button" class="chip"${act ? ` data-act="${act}"` : ''} data-kind="${k}" aria-pressed="${pressed}"><span aria-hidden="true">${ASSET_KINDS[k]}</span>${kindLabel(k)}</button>`;
}
function kindPicker() {
  const first = !db.assetKinds.length;
  return `<section class="card picker">
    <h2>${T(first ? 'pick_first' : 'pick_edit')}</h2>
    <p>${T(first ? 'pick_first_d' : 'pick_edit_d')}</p>
    <div class="chips" role="group" aria-label="${T('asset_kind')}">${KIND_ORDER.map((k) => kindChip(k, state.kindPick.has(k), 'pick-kind')).join('')}</div>
    <div class="picker-actions">${first ? '' : `<button class="btn ghost" data-act="kinds-cancel">${T('cancel')}</button>`}<button class="btn primary grow" data-act="kinds-save">${T('pick_save')}</button></div>
  </section>`;
}
function assetRow(a, total) {
  return `<button class="tx asset" data-act="edit-asset" data-id="${esc(a.id)}">
    <span class="emo" aria-hidden="true">${ASSET_KINDS[a.kind]}</span>
    <span class="mid"><span class="cat">${esc(a.name || kindLabel(a.kind))}</span><span class="note">${T('a_share', pct(a.amount / total * 100))}</span></span>
    <span class="amt">Rp ${dots(a.amount)}</span>
  </button>`;
}
function renderAssets() {
  let h = head(T('tab_assets'), T('a_sub'));
  if (state.picking || !db.assetKinds.length) return h + kindPicker();

  const P = portfolio(), n = db.assets.length;
  const filled = KIND_ORDER.filter((k) => P.kinds[k].value > 0);
  const top = filled.slice().sort((a, b) => P.kinds[b].value - P.kinds[a].value)[0];
  h += `<section class="balance flush" aria-label="${T('summary')}">
    <p class="label">${T('a_total')}</p>
    <p class="amount">${rp(P.value)}</p>
    <div class="split">
      <div class="cell"><p class="k">${T('a_top')}</p><p class="v">${top ? kindLabel(top) + ' ' + pct(P.kinds[top].value / P.value * 100) : T('a_none')}</p></div>
      <div class="cell"><p class="k">${T('a_count')}</p><p class="v">${T('a_n', n)}</p></div>
    </div>
  </section>
  <div class="asset-actions"><button class="btn ghost small" data-act="kinds-edit">${T('pick_edit')}</button><button class="btn primary small" data-act="add-asset">${T('add_asset')}</button></div>`;

  if (filled.length) {
    h += `<section class="section card chart-card"><div class="chart-head"><h2>${T('alloc')}</h2></div>
      ${donut(filled.map((k) => ({ label: kindLabel(k), value: P.kinds[k].value, color: `var(--k-${k})` })), T('total'), rpShort(P.value))}</section>`;
  }
  if (n || db.snaps.length >= 2) {
    h += `<section class="section card chart-card"><div class="chart-head"><h2>${T('a_hist')}</h2></div>`;
    h += db.snaps.length >= 2
      ? lineChart('c-nw', db.snaps.slice(-180)) + `<p class="hint">${T('a_hist_hint')}</p>`
      : `<p class="chart-sub" style="margin-top:6px">${T('a_hist_wait')}</p>`;
    h += '</section>';
  }
  db.assetKinds.forEach((k) => {
    const g = P.kinds[k];
    h += `<section class="section"><div class="section-head"><h2>${kindLabel(k)}${g.items.length ? ` <small>${rp(g.value)}</small>` : ''}</h2>${g.items.length ? `<button class="text-btn" data-act="add-asset" data-kind="${k}">${T('add')}</button>` : ''}</div>`;
    h += g.items.length
      ? `<div class="card tx-list">${g.items.slice().sort((x, y) => y.amount - x.amount).map((a) => assetRow(a, P.value)).join('')}</div>`
      : `<div class="card notice flush"><span>${ASSET_KINDS[k]} ${T('a_nonom')}</span><button class="btn small primary" data-act="add-asset" data-kind="${k}">${T('a_fill')}</button></div>`;
    h += '</section>';
  });
  return h;
}
function saveKinds() {
  const picks = KIND_ORDER.filter((k) => state.kindPick.has(k));
  if (!picks.length) { toast(T('pick_need'), true); return; }
  const before = db.assetKinds;
  db.assetKinds = picks;
  if (!saveDb()) { db.assetKinds = before; toast(T('t_fail'), true); return; }
  state.picking = false;
  render(true);
  toast(T('pick_saved'));
}
function pickKind(k) {
  if (!ASSET_KINDS[k]) return;
  if (state.kindPick.has(k)) {
    const used = db.assets.filter((a) => a.kind === k).length;
    if (used) { toast(T('pick_used', used, kindLabel(k)), true); return; }
    state.kindPick.delete(k);
  } else state.kindPick.add(k);
  render(false);
}

/* ---------- Lainnya (pengaturan) ---------- */
function renderMore() {
  const last = db.lastBackup ? T('last_backup', dateLabel(iso(new Date(db.lastBackup)), true)) : T('never_backup');
  const catBox = (type, title) => `<div class="card cat-box"><p class="field-label" style="margin:0">${title}</p>
    <div class="cat-tags">${db.cats[type].map((c) => `<span class="tag">${emo(c, type)} ${esc(c)}<button data-act="cat-del" data-type="${type}" data-cat="${esc(c)}" aria-label="${esc(T('del_cat_aria', c))}">×</button></span>`).join('')}</div>
    <form class="add-row" data-cat-form="${type}"><input type="text" maxlength="40" placeholder="${T('new_cat')}" aria-label="${T('new_cat')}"><button class="btn small primary" type="submit">${T('add')}</button></form></div>`;
  const item = (act, e, t, s, cls) => `<button class="menu-item${cls ? ' ' + cls : ''}" data-act="${act}"><span class="emo">${e}</span><span><span class="t">${t}</span>${s ? `<br><span class="s">${s}</span>` : ''}</span></button>`;
  return head(T('settings'), T('more_sub', db.tx.length, db.assets.length), false) + `
  <section class="section" style="margin-top:8px"><div class="section-head"><h2>${T('language')}</h2></div>
    <div class="segmented" role="group" aria-label="${T('language')}">
      <button data-act="lang" data-lang="id" aria-pressed="${db.lang === 'id'}">Bahasa Indonesia</button>
      <button data-act="lang" data-lang="en" aria-pressed="${db.lang === 'en'}">English</button>
    </div>
  </section>
  <section class="section"><div class="section-head"><h2>${T('backup_sec')}</h2></div>
    <div class="card menu">${item('backup', '📦', T('backup'), last)}${item('restore', '♻️', T('restore'), T('restore_d'))}${item('csv', '📄', T('csv'), T('csv_d'))}</div>
    <p class="hint">${T('backup_hint')}</p>
  </section>
  <section class="section"><div class="section-head"><h2>${T('cats')}</h2></div>
    <div class="stack">${catBox('expense', T('expenses'))}${catBox('income', T('income'))}</div>
  </section>
  <section class="section"><div class="section-head"><h2>${T('security')}</h2></div>
    <div class="card menu">${item('pin-set', '🔒', T(db.pin ? 'pin_change' : 'pin_set'), T(db.pin ? 'pin_on' : 'pin_off_d'))}${db.pin ? item('pin-off', '🔓', T('pin_disable')) : ''}${item('wipe', '🗑️', T('wipe'), T('no_undo'), 'danger')}</div>
  </section>`;
}

/* ---------- Render utama ---------- */
function applyStatic() {
  document.documentElement.lang = db.lang;
  $$('[data-i18n]').forEach((el) => { el.textContent = T(el.dataset.i18n); });
  $$('[data-i18n-ph]').forEach((el) => { el.placeholder = T(el.dataset.i18nPh); });
  $$('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', T(el.dataset.i18nAria)); });
}
function render(toTop) {
  const view = $('#view'), y = view.scrollTop;
  const pages = { home: renderHome, history: renderHistory, wallet: renderWallet, assets: renderAssets, more: renderMore };
  view.innerHTML = (pages[state.tab] || renderHome)();
  if (state.tab === 'history') updateHistoryList();
  $$('.tabbar .tab').forEach((b) => { if (b.dataset.tab === state.tab) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
  if (toTop) { view.classList.remove('enter'); void view.offsetWidth; view.classList.add('enter'); view.scrollTop = 0; }
  else view.scrollTop = y;
}
function go(tab) {
  state.tab = tab; state.picking = false; state.kindPick = new Set(db.assetKinds); state.hist.limit = 60;
  render(true);
}

/* ---------- Form transaksi ---------- */
const form = { id: null, type: 'expense', cat: null, wallet: 'cash' };
function renderFormCats() {
  const list = db.cats[form.type].slice();
  if (form.cat && !list.includes(form.cat)) list.push(form.cat);
  $('#f-cats').innerHTML = list.map((c) => `<button type="button" class="chip" data-cat="${esc(c)}" aria-pressed="${form.cat === c}"><span aria-hidden="true">${emo(c, form.type)}</span>${esc(c)}</button>`).join('');
}
function renderFormWallets() {
  $('#f-wallets').innerHTML = WALLET_ORDER.map((k) => `<button type="button" class="chip" data-wallet="${k}" aria-pressed="${form.wallet === k}"><span aria-hidden="true">${WALLETS[k]}</span>${walletLabel(k)}</button>`).join('');
}
function setFormType(type) {
  form.type = type;
  $$('#tx-form .segmented button').forEach((b) => b.setAttribute('aria-pressed', b.dataset.type === type));
  if (form.cat && !db.cats[type].includes(form.cat)) form.cat = null;
  renderFormCats();
}
function clearErrors() { ['#e-amount', '#e-cat', '#e-date'].forEach((s) => { $(s).textContent = ''; }); }
function openSheet(tx) {
  form.id = tx ? tx.id : null;
  form.cat = tx ? tx.cat : null;
  form.type = tx ? tx.type : 'expense';
  form.wallet = tx ? tx.wallet : db.lastWallet;
  $('#sheet-title').textContent = T(tx ? 'edit_tx' : 'add_tx');
  $('#f-amount').value = tx ? dots(tx.amount) : '';
  $('#f-date').value = tx ? tx.date : today();
  $('#f-note').value = tx ? tx.note : '';
  $('#f-delete').hidden = !tx;
  $('#f-save').textContent = T(tx ? 'save_changes' : 'save');
  $('#f-save').disabled = false;
  clearErrors();
  setFormType(form.type);
  renderFormWallets();
  $('#sheet-wrap').hidden = false;
  $('#tx-form').scrollTop = 0;
  if (!tx) $('#f-amount').focus();
}
function closeSheet() {
  $('#sheet-wrap').hidden = true;
  if (document.activeElement) document.activeElement.blur();
}
function submitForm(e) {
  e.preventDefault();
  clearErrors();
  const raw = $('#f-amount').value.replace(/[^\d]/g, '');
  const amount = Number(raw), date = $('#f-date').value;
  let bad = false;
  if (!raw) { $('#e-amount').textContent = T('e_amount_empty'); bad = true; }
  else if (!(amount > 0)) { $('#e-amount').textContent = T('e_amount_zero'); bad = true; }
  if (!form.cat) { $('#e-cat').textContent = T('e_cat'); bad = true; }
  if (!DATE_RE.test(date)) { $('#e-date').textContent = T('e_date'); bad = true; }
  if (bad) { if (!raw || !(amount > 0)) $('#f-amount').focus(); return; }

  const btn = $('#f-save');
  btn.disabled = true; btn.textContent = T('saving');
  const before = JSON.stringify(db.tx), beforeWallet = db.lastWallet;
  const note = $('#f-note').value.trim().slice(0, 120);
  if (form.id) {
    const t = db.tx.find((x) => x.id === form.id);
    if (t) Object.assign(t, { type: form.type, amount, cat: form.cat, date, note, wallet: form.wallet });
  } else {
    db.tx.push({ id: newId(), type: form.type, amount, cat: form.cat, date, wallet: form.wallet, note, createdAt: Date.now() });
    db.lastWallet = form.wallet;
  }
  if (!saveDb()) {
    db.tx = JSON.parse(before); db.lastWallet = beforeWallet;
    btn.disabled = false; btn.textContent = T(form.id ? 'save_changes' : 'save');
    toast(T('t_fail'), true);
    return;
  }
  const wasEdit = !!form.id;
  closeSheet();
  render(false);
  toast(T(wasEdit ? 't_changed' : 't_saved'));
}
async function deleteCurrent() {
  const t = db.tx.find((x) => x.id === form.id);
  if (!t) return;
  const yes = await ask({ title: T('del_tx'), text: `${t.cat}, ${rp(t.amount)}, ${dateLabel(t.date, true)}. ${T('no_undo')}`, ok: T('delete'), danger: true });
  if (!yes) return;
  const before = db.tx;
  db.tx = db.tx.filter((x) => x.id !== form.id);
  if (!saveDb()) { db.tx = before; toast(T('t_del_fail'), true); return; }
  closeSheet();
  render(false);
  toast(T('t_deleted'));
}

/* ---------- Form aset ---------- */
const aform = { id: null, kind: 'saham' };
function applyKind() {
  const list = db.assetKinds.slice();
  if (!list.includes(aform.kind)) list.push(aform.kind);
  $('#a-kinds').innerHTML = list.map((k) => kindChip(k, aform.kind === k)).join('');
  $('#a-name').placeholder = T('ph_' + aform.kind);
}
function openAssetSheet(a, kind) {
  aform.id = a ? a.id : null;
  aform.kind = a ? a.kind : (ASSET_KINDS[kind] ? kind : db.assetKinds[0]);
  $('#asset-title').textContent = T(a ? 'edit_asset' : 'add_asset');
  $('#a-amount').value = a ? dots(a.amount) : '';
  $('#a-name').value = a ? a.name : '';
  $('#e-asset').textContent = '';
  $('#a-delete').hidden = !a;
  $('#a-save').textContent = T(a ? 'save_changes' : 'save');
  applyKind();
  $('#asset-wrap').hidden = false;
  if (!a) $('#a-amount').focus();
}
function closeAssetSheet() {
  $('#asset-wrap').hidden = true;
  if (document.activeElement) document.activeElement.blur();
}
function submitAsset(e) {
  e.preventDefault();
  const raw = $('#a-amount').value.replace(/\D/g, ''), amount = Number(raw);
  if (!raw) { $('#e-asset').textContent = T('e_buy_empty'); $('#a-amount').focus(); return; }
  if (!(amount > 0)) { $('#e-asset').textContent = T('e_buy_zero'); $('#a-amount').focus(); return; }
  const old = aform.id ? db.assets.find((x) => x.id === aform.id) : null;
  const o = { id: aform.id || newId(), kind: aform.kind, name: $('#a-name').value.trim().slice(0, 40), amount, createdAt: old ? old.createdAt : Date.now() };
  const before = { assets: db.assets.slice(), kinds: db.assetKinds };
  if (old) db.assets[db.assets.indexOf(old)] = o; else db.assets.push(o);
  db.assetKinds = cleanKinds(db.assetKinds, db.assets);
  if (!saveDb()) { db.assets = before.assets; db.assetKinds = before.kinds; toast(T('t_fail'), true); return; }
  recordSnapshot();
  closeAssetSheet();
  render(false);
  toast(T(old ? 't_changed' : 'a_saved'));
}
async function deleteAsset() {
  const a = db.assets.find((x) => x.id === aform.id);
  if (!a) return;
  const yes = await ask({ title: T('del_asset'), text: `${kindLabel(a.kind)}${a.name ? ' ' + a.name : ''}, ${rp(a.amount)}. ${T('no_undo')}`, ok: T('delete'), danger: true });
  if (!yes) return;
  const before = db.assets;
  db.assets = db.assets.filter((x) => x.id !== a.id);
  if (!saveDb()) { db.assets = before; toast(T('t_del_fail'), true); return; }
  recordSnapshot();
  closeAssetSheet();
  render(false);
  toast(T('a_deleted'));
}

/* ---------- Cadangan, pulihkan, CSV ---------- */
async function giveFile(name, text, type) {
  const file = new File([text], name, { type });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try { await navigator.share({ files: [file], title: name }); return true; }
    catch (e) { if (e && e.name === 'AbortError') return false; }
  }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(file); a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 10000);
  return true;
}
async function backup() {
  if (!db.tx.length && !db.assets.length) { toast(T('b_none'), true); return; }
  const data = JSON.stringify({
    app: 'gavez', version: 4, exportedAt: new Date().toISOString(), tx: db.tx, cats: db.cats,
    wallets: db.wallets, assets: db.assets, assetKinds: db.assetKinds, snaps: db.snaps
  }, null, 1);
  const ok = await giveFile('gavez-cadangan-' + today() + '.json', data, 'application/json');
  if (ok) { db.lastBackup = Date.now(); saveDb(); render(false); toast(T('b_done')); }
}
async function exportCsv() {
  if (!db.tx.length) { toast(T('csv_none'), true); return; }
  const q = (s) => '"' + String(s).replace(/"/g, '""') + '"';
  const rows = [T('csv_head')]
    .concat(sorted(db.tx).reverse().map((t) => [t.date, T(t.type), q(t.cat), q(walletLabel(t.wallet)), t.amount, q(t.note)].join(',')));
  const ok = await giveFile('gavez-' + today() + '.csv', '﻿' + rows.join('\r\n'), 'text/csv');
  if (ok) toast(T('csv_done'));
}
function restoreFromFile(file) {
  const reader = new FileReader();
  reader.onerror = () => toast(T('r_unread'), true);
  reader.onload = async () => {
    let d;
    try { d = JSON.parse(reader.result); } catch (e) { toast(T('r_bad'), true); return; }
    const tx = cleanTx(d && d.tx);
    if (!d || !Array.isArray(d.tx) || (d.tx.length && !tx.length)) { toast(T('r_bad'), true); return; }
    // Cadangan versi lama belum berisi aset/dompet: bagian itu di HP ini dibiarkan apa adanya
    const hasAssets = Array.isArray(d.assets);
    const assets = hasAssets ? cleanAssets(d.assets) : db.assets;
    const yes = await ask({ title: T('r_title'), text: T('r_text', tx.length, assets.length, db.tx.length, db.assets.length), ok: T('r_ok') });
    if (!yes) return;
    const before = { tx: db.tx, cats: db.cats, assets: db.assets, assetKinds: db.assetKinds, snaps: db.snaps, wallets: db.wallets };
    db.tx = tx; db.cats = cleanCats(d.cats);
    if (hasAssets) { db.assets = assets; db.assetKinds = cleanKinds(d.assetKinds, assets); db.snaps = cleanSnaps(d.snaps); state.picking = false; }
    if (d.wallets) db.wallets = cleanWallets(d.wallets);
    if (!saveDb()) { Object.assign(db, before); toast(T('r_fail'), true); return; }
    recordSnapshot();
    render(false);
    toast(T('r_done'));
  };
  reader.readAsText(file);
}

/* ---------- Kunci PIN ---------- */
async function hashPin(pin) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('catatin:' + pin));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
}
async function setPin() {
  if (!(window.crypto && crypto.subtle)) { toast(T('pin_https'), true); return; }
  const a = await ask({ title: T(db.pin ? 'pin_new' : 'pin_make'), text: T('pin_digits'), ok: T('next'), input: { type: 'password', numeric: true, placeholder: '••••' } });
  if (a === null) return;
  if (!/^\d{4,6}$/.test(a)) { toast(T('pin_bad'), true); return; }
  const b = await ask({ title: T('pin_repeat'), text: T('pin_repeat_d'), ok: T('save'), input: { type: 'password', numeric: true, placeholder: '••••' } });
  if (b === null) return;
  if (a !== b) { toast(T('pin_mismatch'), true); return; }
  db.pin = await hashPin(a);
  if (!saveDb()) { db.pin = null; toast(T('pin_fail'), true); return; }
  render(false); toast(T('pin_active'));
}
async function pinOff() {
  const yes = await ask({ title: T('pin_off_q'), text: T('pin_off_text'), ok: T('turn_off') });
  if (!yes) return;
  db.pin = null; saveDb(); render(false); toast(T('pin_off_done'));
}
function showLock() {
  $('#lock').hidden = false;
  setTimeout(() => $('#lock-input').focus(), 50);
}
async function tryUnlock(e) {
  e.preventDefault();
  const input = $('#lock-input');
  const h = await hashPin(input.value);
  if (h === db.pin) { $('#lock').hidden = true; input.value = ''; $('#lock-error').textContent = ''; }
  else { $('#lock-error').textContent = T('pin_wrong'); input.value = ''; input.focus(); }
}
async function wipe(fromLock) {
  const yes = await ask({ title: T(fromLock ? 'forgot_q' : 'wipe_q'), text: T(fromLock ? 'forgot_d' : 'wipe_d'), ok: T('wipe_ok'), danger: true });
  if (!yes) return;
  const lang = db.lang;
  db = emptyDb(); db.lang = lang; saveDb();
  $('#lock').hidden = true;
  state.tab = 'home'; state.picking = false; state.kindPick = new Set();
  render(true); toast(T('wipe_done'));
}

/* ---------- Kategori & bahasa ---------- */
async function delCat(type, cat) {
  if (db.cats[type].length <= 1) { toast(T('cat_min'), true); return; }
  const used = db.tx.filter((t) => t.cat === cat && t.type === type).length;
  const yes = await ask({ title: T('cat_del_q', cat), text: used ? T('cat_used', used) : T('cat_unused'), ok: T('delete'), danger: true });
  if (!yes) return;
  db.cats[type] = db.cats[type].filter((c) => c !== cat);
  saveDb(); render(false); toast(T('cat_deleted'));
}
function addCat(type, name) {
  name = name.trim();
  if (!name) { toast(T('cat_empty'), true); return; }
  if (db.cats[type].some((c) => c.toLowerCase() === name.toLowerCase())) { toast(T('cat_dup'), true); return; }
  db.cats[type].push(name);
  if (!saveDb()) { db.cats[type].pop(); toast(T('cat_fail'), true); return; }
  render(false); toast(T('cat_added'));
}
function setLang(lang) {
  db.lang = lang === 'en' ? 'en' : 'id';
  saveDb();
  applyStatic();
  render(false);
}

/* ---------- Event ---------- */
document.addEventListener('click', (e) => {
  const tabBtn = e.target.closest('[data-tab]');
  if (tabBtn) { go(tabBtn.dataset.tab); return; }

  const typeBtn = e.target.closest('#tx-form .segmented [data-type]');
  if (typeBtn) { setFormType(typeBtn.dataset.type); return; }
  const aKind = e.target.closest('#a-kinds .chip');
  if (aKind) { aform.kind = aKind.dataset.kind; $('#e-asset').textContent = ''; applyKind(); return; }
  const chip = e.target.closest('#f-cats .chip');
  if (chip) { form.cat = chip.dataset.cat; $('#e-cat').textContent = ''; renderFormCats(); return; }
  const wChip = e.target.closest('#f-wallets .chip');
  if (wChip) { form.wallet = wChip.dataset.wallet; renderFormWallets(); return; }

  const el = e.target.closest('[data-act]');
  if (!el) return;
  const act = el.dataset.act;
  if (act === 'add') openSheet(null);
  else if (act === 'close-sheet') closeSheet();
  else if (act === 'edit') { const t = db.tx.find((x) => x.id === el.dataset.id); if (t) openSheet(t); }
  else if (act === 'delete-tx') deleteCurrent();
  else if (act === 'add-asset') openAssetSheet(null, el.dataset.kind);
  else if (act === 'close-asset') closeAssetSheet();
  else if (act === 'edit-asset') { const a = db.assets.find((x) => x.id === el.dataset.id); if (a) openAssetSheet(a); }
  else if (act === 'delete-asset') deleteAsset();
  else if (act === 'pick-kind') pickKind(el.dataset.kind);
  else if (act === 'kinds-save') saveKinds();
  else if (act === 'kinds-edit') { state.picking = true; state.kindPick = new Set(db.assetKinds); render(true); }
  else if (act === 'kinds-cancel') { state.picking = false; render(true); }
  else if (act === 'wallet-set') setWallet(el.dataset.w);
  else if (act === 'lang') setLang(el.dataset.lang);
  else if (act === 'period') { state.period = el.dataset.period; render(false); }
  else if (act === 'trend') { state.trend = el.dataset.trend; render(false); }
  else if (act === 'tip') {
    $$('#' + el.dataset.chart + ' .col').forEach((c) => { c.classList.toggle('on', c === el); c.classList.toggle('dim', c !== el); });
    $('#' + el.dataset.chart + '-tip').innerHTML = el.dataset.tip; // isi tip dibuat aplikasi, bukan ketikan pengguna
  }
  else if (act === 'hist-more') { state.hist.limit += 60; updateHistoryList(); }
  else if (act === 'hist-reset') { state.hist = { q: '', type: 'all', cat: 'all', from: '', to: '', limit: 60 }; render(false); }
  else if (act === 'backup') backup();
  else if (act === 'restore') { const f = $('#restore-file'); f.value = ''; f.click(); }
  else if (act === 'csv') exportCsv();
  else if (act === 'pin-set') setPin();
  else if (act === 'pin-off') pinOff();
  else if (act === 'wipe') wipe(false);
  else if (act === 'forgot-pin') wipe(true);
  else if (act === 'cat-del') delCat(el.dataset.type, el.dataset.cat);
});

document.addEventListener('input', (e) => {
  const t = e.target;
  if (t.id === 'f-amount' || t.dataset.money !== undefined) {
    const digits = t.value.replace(/[^\d]/g, '').replace(/^0+(?=\d)/, '').slice(0, 13);
    t.value = digits ? dots(Number(digits)) : '';
    if (t.id === 'f-amount' && digits) $('#e-amount').textContent = '';
  } else if (t.id === 'h-q') { state.hist.q = t.value; state.hist.limit = 60; updateHistoryList(); }
  if (t.closest && t.closest('#asset-form')) $('#e-asset').textContent = '';
});
document.addEventListener('change', (e) => {
  const t = e.target;
  if (t.dataset.custom) { if (t.value) { state.custom[t.dataset.custom] = t.value; render(false); } }
  else if (t.id === 'h-type') { state.hist.type = t.value; updateHistoryList(); }
  else if (t.id === 'h-cat') { state.hist.cat = t.value; updateHistoryList(); }
  else if (t.id === 'h-from') { state.hist.from = t.value; updateHistoryList(); }
  else if (t.id === 'h-to') { state.hist.to = t.value; updateHistoryList(); }
  else if (t.id === 'restore-file' && t.files[0]) restoreFromFile(t.files[0]);
});
document.addEventListener('submit', (e) => {
  const f = e.target;
  if (f.id === 'tx-form') submitForm(e);
  else if (f.id === 'lock-form') tryUnlock(e);
  else if (f.id === 'asset-form') submitAsset(e);
  else if (f.dataset.catForm) { e.preventDefault(); addCat(f.dataset.catForm, $('input', f).value); }
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape' || !$('#dialog').hidden) return;
  if (!$('#sheet-wrap').hidden) closeSheet();
  else if (!$('#asset-wrap').hidden) closeAssetSheet();
});
// Kalau aplikasi dibiarkan terbuka melewati tengah malam, segarkan tampilan saat dibuka lagi
let lastDay = today();
document.addEventListener('visibilitychange', () => {
  if (document.hidden) return;
  recordSnapshot();
  if (today() !== lastDay) { lastDay = today(); if ($('#sheet-wrap').hidden && $('#asset-wrap').hidden) render(false); }
});
document.addEventListener('pointerdown', lineHover);
document.addEventListener('pointermove', lineHover);

/* ---------- Mulai ---------- */
applyStatic();
if (db.pin) showLock();
recordSnapshot();
render(true);
if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
