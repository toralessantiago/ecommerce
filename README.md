# 🛍️ Apex Store - Tienda Online en React

## 📌 Descripción del proyecto
Apex Store es una aplicación web de tipo e-commerce desarrollada en React como trabajo práctico grupal. Simula una tienda online de indumentaria y artículos deportivos donde los usuarios pueden explorar productos, filtrarlos, ver su detalle, agregarlos al carrito y completar una compra simulada.

## 🎯 Objetivo
Desarrollar una SPA (Single Page Application) que simule una tienda online funcional, aplicando conceptos de React como componentes, hooks, estado global, routing y manipulación de arrays.

## 🚀 Tecnologías utilizadas
* **React**
* **React Router DOM**
* **React Bootstrap**
* **Bootstrap 5**
* **Context API**
* **useState / useEffect**
* **LocalStorage**

## 🧩 Funcionalidades

### 🏠 Inicio
* Presentación de la tienda
* Banner tipo carousel
* Secciones de productos destacados

### 📦 Productos
* Catálogo de al menos 12 productos desde array
* Filtros por categoría, precio y stock
* Cards de productos con acción de agregar al carrito

### 🔍 Buscador
* Búsqueda por nombre
* Sugerencias dinámicas

### 📄 Detalle de producto
* Vista individual con ruta dinámica
* Información completa del producto
* Selección de talle (cuando aplica)
* Agregado al carrito

### 🛒 Carrito
* Listado de productos agregados
* Modificación de cantidades
* Eliminación de productos
* Cálculo de total y subtotales
* Persistencia con localStorage

### 💳 Compra simulada
* Formulario controlado con validaciones
* Simulación de pago
* Mensaje de confirmación

### 📩 Contacto y páginas extra
* Formulario de contacto validado
* Página Nosotros
* Página 404

## 🧠 Requisitos del TP
* ✔ Catálogo con mínimo 12 productos
* ✔ Uso de array de objetos
* ✔ Filtros y búsqueda
* ✔ Detalle con rutas dinámicas
* ✔ Carrito funcional
* ✔ Formulario controlado
* ✔ Navegación con React Router DOM
* ✔ Uso de hooks (useState, useEffect)
* ✔ Uso de Context API
* ✔ Cálculos de carrito
* ✔ Diseño responsive con Bootstrap

## 📂 Estructura del proyecto
```text
Ecommerce/
│
├── data/
│   └── productos.js
│
├── public/
│   ├── imagenes/
│   ├── checkmark.gif
│   └── favicon.svg / icons.svg
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── fonts/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## ⚙️ Instalación

```bash
git clone https://github.com/toralessantiago/ecommerce
cd ecommerce
npm install
npm run dev
```

## 👥 Integrantes
Movia, Martina Trinidad
Torales, Santiago
Almirón, Estefanía Abigail
Alaniz, Rocio Abril

## 📌 Notas
Proyecto sin backend (simulación completa)
Carrito persistente en localStorage
Diseño responsive
SPA con React Router DOM
