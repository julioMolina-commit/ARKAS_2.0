<!DOCTYPE html>
<html>
<head>
    <title>Simple Product Viewer</title>
</head>
<body>
    <h1>Products</h1>
    <div id="products">Loading products...</div>

    <script src="Script/scripts.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            getProducts().then(products => {
                const container = document.getElementById('products');
                console.log('Products to display:', products);
                
                if (products && products.length > 0) {
                    container.innerHTML = products.map(product => {
                        const name = product.NOMBRE || product.name || product.nombre || 'No Name';
                        const price = product.PRECIO || product.price || product.precio || '0';
                        const stock = product.EXISTENCIAS || product.stock || product.existencias || '0';
                        
                        return `<div style="border: 1px solid #ccc; padding: 10px; margin: 5px;">
                            <strong>${name}</strong> - $${price}
                            <br>Stock: ${stock}
                         </div>`;
                    }).join('');
                } else {
                    container.innerHTML = 'No products found. Check browser console for errors.';
                }
            });
        });
    </script>
</body>
</html>