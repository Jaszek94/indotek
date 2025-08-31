# Indotek próbafeladat

Ez a projekt egy **Laravel (backend)** és **Next.js (frontend)** alapú alkalmazás, amely Docker és Laravel Sail segítségével futtatható.

---

## Telepítés és futtatás

### 1. Repository klónozása

```bash
git clone <repo_url>
cd indotek
```

### 2. Backend beállítása

Lépj be a backend mappába:

```bash
cd backend
```

Függőségek telepítése Composerrel (Dockerből):

```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php84-composer:latest \
    composer install --ignore-platform-reqs
```

Konténerek indítása:

```bash
./vendor/bin/sail up -d
```

Konténer shell megnyitása:

```bash
./vendor/bin/sail bash
```

.env beállítása:

```bash
cp .env.example .env
```

Ezután szerkeszd a .env fájlt, és állítsd be az adatbázis jelszót:

```bash
DB_PASSWORD=password
```

Adatbázis migráció + seed:

```bash
php artisan migrate:fresh --seed
```

(Opcionális) Tesztek futtatása:

```bash
php artisan test
```

### 3. Frontend beállítása

Lépj a frontend mappába:

```bash
cd ../frontend
```

Függőségek telepítése:

```bash
npm install
```

Környezeti változók:
Hozz létre egy .env.local fájlt a frontend mappában, majd add hozzá:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost/api
```

---

### Megjegyzés

A projekt jelenleg Laravel Sail segítségével fut Dockerben PostgreSQL adatbázissal.
A docker-compose.yml fájl elkészítésére nem maradt időm, mert a backendre fektettem nagyobb hangsúlyt.
A frontend részen a TypeScript újdonságként némi nehézséget okozott, de igyekeztem a lehető legtöbbet kihozni a feladatból.
Remélem, a megoldás összességében megfelel az elvárásoknak, és jól tükrözi a tudásomat.
