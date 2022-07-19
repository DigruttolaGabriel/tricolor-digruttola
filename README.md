# Tricolor

E-commerce para cotillón Tricolor

<hr>

## Acceso

## `https://digruttolagabriel.github.io/tricolor-digruttola`

<hr>

## Rutas

#### / ===> Home 

#### /cart ===> Carrito

#### /products ===> Listado de productos

#### /product/:id ===> Detalle de producto

#### /products/category/:id ===> Listado de productos por categoría

<hr>

## Base de datos

### `PRODUCTS` (collection)
<table>
    <tr>
        <th>Columna</th>
        <th>Configuración</th>
    </tr>
    <tr>
        <td>name</td>
        <td>string</td>
    </tr>
    <tr>
        <td>category</td>
        <td>string</td>
    </tr>
    <tr>
        <td>photo</td>
        <td>string</td>
    </tr>
    <tr>
        <td>price</td>
        <td>number</td>
    </tr>
    <tr>
        <td>stock</td>
        <td>number</td>
    </tr>
</table>

### `CATEGORIES` (collection)
<table>
    <tr>
        <th>Columna</th>
        <th>Configuración</th>
    </tr>
    <tr>
        <td>name</td>
        <td>string</td>
    </tr>
</table>

### `ORDERS` (collection)
<table>
    <tr>
        <th>Columna</th>
        <th>Configuración</th>
    </tr>
    <tr>
        <td>client</td>
        <td>object</td>
    </tr>
    <tr>
        <td>name</td>
        <td>string</td>
    </tr>
    <tr>
        <td>email</td>
        <td>string</td>
    </tr>
    <tr>
        <td>lastname</td>
        <td>string</td>
    </tr>
    <tr>
        <td>phone</td>
        <td>string</td>
    </tr>
    <tr>
        <td>items</td>
        <td>array of objects</td>
    </tr>
    <tr>
        <td>id</td>
        <td>string</td>
    </tr>
    <tr>
        <td>name</td>
        <td>string</td>
    </tr>
    <tr>
        <td>price</td>
        <td>number</td>
    </tr>
    <tr>
        <td>quantity</td>
        <td>number</td>
    </tr>
</table>
