import "./styles.css";

export default function Formulario({ onAddProduct }) {
    const productos = JSON.parse(localStorage.getItem("products")) || [];

    const handleSubmit = (event) => {
        event.preventDefault();
        const image = event.target.image.files[0];

        const reader = new FileReader();
        reader.onload = () => {
            const newProduct = {
                id: productos.length + 1,
                title: event.target.title.value,
                price: parseFloat(event.target.price.value),
                description: event.target.description.value,
                category: event.target.category.value,
                image: reader.result,
            };

            productos.push(newProduct);
            localStorage.setItem("products", JSON.stringify(productos));
            alert("Producto creado exitosamente");
            event.target.reset();
        };
        reader.readAsDataURL(image);
    };

    return (
        <div className="FormDiv">
            <form id="productForm" onSubmit={handleSubmit}>
                <div className="FormGroup">
                    <label htmlFor="title">Título:</label>
                    <input type="text" id="title" name="title" required />
                </div>
                <div className="FormGroup">
                    <label htmlFor="price">Precio:</label>
                    <input type="number" id="price" name="price" step="0.01" required min={0} />
                </div>
                <div className="FormGroup">
                    <label htmlFor="description">Descripción:</label>
                    <textarea id="description" name="description" required></textarea>
                </div>
                <div className="FormGroup">
                    <label htmlFor="category">Categoría:</label>
                    <select id="category" name="category" required>
                        <option value="men's clothing">Men's clothing</option>
                        <option value="women's clothing">Women's clothing</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelery</option>
                    </select>
                </div>
                <div className="FormGroup">
                    <label htmlFor="image">Imagen:</label>
                    <input type="file" id="image" name="image" required accept="image/*"/>
                </div>
                <div className="FormGroup">
                    <button type="submit">Crear Producto</button>
                </div>
            </form>
        </div>
    );
}
