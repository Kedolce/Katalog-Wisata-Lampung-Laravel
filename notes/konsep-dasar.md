# Catatan Dasar Laravel + React

## 1. Model

**File contoh:** `app/Models/Wisata.php`

Model adalah class Laravel yang merepresentasikan tabel database dan menjadi salah satu cara untuk berinteraksi dengan data tabel tersebut menggunakan Eloquent ORM.

Contoh:

```php
$wisata = Wisata::all();
```

Artinya: ambil semua record dari tabel yang direpresentasikan oleh model `Wisata`.

Pada proyek ini:
- Nama tabel: `wisata`
- Primary key: `id_wisata`
- Model: `App\Models\Wisata`

Model bukan data itu sendiri. Model adalah representasi tabel dan menyediakan cara untuk mengambil atau mengelola record.

## 2. Route

**File:** `routes/web.php`

Route menentukan apa yang dilakukan Laravel ketika menerima request ke URL tertentu.

Contoh: request GET ke `/` menjalankan kode yang mengambil data wisata dan mengirimkannya ke halaman React melalui Inertia.

## 3. Inertia

Inertia menghubungkan backend Laravel dengan halaman React.

Contoh:

```php
return Inertia::render('Home', [
    'wisata' => $wisata,
]);
```

Data pada key `wisata` dikirim ke halaman React sebagai prop bernama `wisata`.

## 4. React dan map()

**File:** `resources/js/Pages/Home.jsx`

```jsx
export default function Home({ wisata }) {
    return (
        <div>
            {wisata.map((item) => (
                <article key={item.id_wisata}>
                    {item.nama_wisata}
                </article>
            ))}
        </div>
    );
}
```

- `wisata`: array data yang diterima sebagai prop.
- `map()`: memproses setiap elemen array dan menghasilkan elemen tampilan.
- `item`: satu record yang sedang diproses.
- `key`: identitas elemen bagi React.

## 5. Progress Proyek

- [x] Laravel berhasil berjalan.
- [x] PostgreSQL lama berhasil terhubung.
- [x] Lima data wisata tampil sebagai kartu React.
- [x] Git lokal dan GitHub sudah disiapkan.
- [ ] Relasi `Wisata` ke `Kategori` selesai dan diuji.
- [ ] Nama kategori tampil di kartu.