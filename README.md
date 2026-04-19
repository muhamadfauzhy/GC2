[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=23534782&assignment_repo_type=AssignmentRepo)
# P2-Challenge-2 (Client Side)

> Tuliskan API Docs kamu di sini

API Documentation
Base URL
http://localhost:3000
1. Login Admin

Endpoint

POST /login

Description
Digunakan untuk login admin agar mendapatkan access token.

Request Body

{
  "email": "admin1@mail.com",
  "password": "qwerty123"
}

Response Success

{
  "access_token": "your_access_token"
}

Response Error

{
  "message": "Invalid email/password"
}
2. Register Staff

Endpoint

POST /add-user

Description
Digunakan untuk menambahkan staff baru oleh admin.

Headers

{
  "Authorization": "Bearer <access_token>"
}

Request Body

{
  "email": "admin1@mail.com",
  "password": "qwerty123",
  "phoneNumber": "08123456789",
  "address": "Jakarta"
}

Response Success

{
  "message": "Success add new staff"
}

Response Error

{
  "message": "Email is required"
}
3. Get All Cuisines

Endpoint

GET /cuisines

Description
Menampilkan seluruh data menu/cuisine.

Headers

{
  "Authorization": "Bearer <access_token>"
}

Response Success

[
  {
    "id": 1,
    "name": "Nasi Goreng",
    "description": "Nasi goreng khas Indonesia",
    "price": 18000,
    "imgUrl": "https://example.com/nasi-goreng.jpg",
    "CategoryId": 1
  }
]
4. Get Cuisine By Id

Endpoint

GET /cuisines/:id

Description
Menampilkan detail menu berdasarkan id.

Headers

{
  "Authorization": "Bearer <access_token>"
}

Response Success

{
  "id": 1,
  "name": "Nasi Goreng",
  "description": "Nasi goreng khas Indonesia",
  "price": 18000,
  "imgUrl": "https://example.com/nasi-goreng.jpg",
  "CategoryId": 1
}

Response Error

{
  "message": "Data not found"
}
5. Create Cuisine

Endpoint

POST /cuisines

Description
Menambahkan menu baru.

Headers

{
  "Authorization": "Bearer <access_token>"
}

Request Body

{
  "name": "Mie Goreng",
  "description": "Mie goreng spesial",
  "price": 20000,
  "imgUrl": "https://example.com/mie-goreng.jpg",
  "CategoryId": 2
}

Response Success

{
  "message": "Success add new menu"
}

Response Error

{
  "message": "CategoryId is required"
}
6. Update Cuisine

Endpoint

PUT /cuisines/:id

Description
Mengubah data menu berdasarkan id.

Headers

{
  "Authorization": "Bearer <access_token>"
}

Request Body

{
  "name": "Mie Goreng Pedas",
  "description": "Mie goreng level pedas",
  "price": 22000,
  "imgUrl": "https://example.com/mie-goreng-pedas.jpg",
  "CategoryId": 2
}

Response Success

{
  "message": "Success update cuisine"
}

Response Error

{
  "message": "Cuisine not found"
}
7. Delete Cuisine

Endpoint

DELETE /cuisines/:id

Description
Menghapus menu berdasarkan id.

Headers

{
  "Authorization": "Bearer <access_token>"
}

Response Success

{
  "message": "Success delete cuisine"
}

Response Error

{
  "message": "Cuisine not found"
}
8. Get All Categories

Endpoint

GET /categories

Description
Menampilkan seluruh data category.

Headers

{
  "Authorization": "Bearer <access_token>"
}

Response Success

[
  {
    "id": 1,
    "name": "Main Course"
  },
  {
    "id": 2,
    "name": "Dessert"
  }
]
9. Upload Image Cuisine

Endpoint

PATCH /cuisines/:id

Description
Mengubah gambar menu berdasarkan id.

Headers

{
  "Authorization": "Bearer <access_token>"
}

Request Body

{
  "imgUrl": "https://example.com/new-image.jpg"
}

Response Success

{
  "message": "Success update image"
}

Response Error

{
  "message": "Invalid image url"
}
Authentication

Beberapa endpoint membutuhkan token authentication.

Gunakan header berikut:

{
  "Authorization": "Bearer <access_token>"
}