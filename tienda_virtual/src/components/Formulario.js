import "./styles.css";
import Pagina from "./Pagina";

export default function Formulario() {
    const productos = JSON.parse(localStorage.getItem("products")) || [];

    const handleSubmit = (event) => {
        event.preventDefault();
        const image = event.target.image.files[0];
        const newProduct = {
            id: productos.length + 1,
            title: event.target.title.value,
            price: parseFloat(event.target.price.value),
            description: event.target.description.value,
            category: event.target.category.value,
            image: URL.createObjectURL(image)
        };

        productos.push(newProduct);
        localStorage.setItem("products", JSON.stringify(productos));
        alert(newProduct.image);
    };

    const FormularioProd = () => {
        const formulario = (
            <div className="form-container">
                <form id="productForm" onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label htmlFor="title">Título:</label>
                        <input type="text" id="title" name="title" required className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Precio:</label>
                        <input type="number" id="price" name="price" step="0.01" required min={0} className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descripción:</label>
                        <textarea id="description" name="description" required className="form-textarea"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Categoría:</label>
                        <select id="category" name="category" required className="form-select">
                            <option value="men's clothing">Men's clothing</option>
                            <option value="women's clothing">Women's clothing</option>
                            <option value="electronics">Electronics</option>
                            <option value="jewelery">Jewelery</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Imagen:</label>
                        <input type="file" id="image" name="image" required accept="image/*" className="form-input" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="form-button">Crear Producto</button>
                    </div>
                </form>
            </div>
        );
        return formulario;
    }

    return (
        <>
            <Pagina Render={FormularioProd} />
        </>
    );
}
