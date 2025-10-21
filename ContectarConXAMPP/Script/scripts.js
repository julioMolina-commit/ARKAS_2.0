// Simple function to get products
async function getProducts() {
    try {
        console.log('Fetching products from API...');
        const response = await fetch('api.php');
        const data = await response.json();
        console.log('API Response:', data);
        
        if (data.error) {
            console.error('API Error:', data.error);
            if (data.mysql_error) {
                console.error('MySQL Error:', data.mysql_error);
            }
            return [];
        }
        
        if (data.success && data.data) {
            console.log(`Found ${data.count} products`);
            return data.data;
        }
        
        return [];
    } catch (error) {
        console.error('Fetch Error:', error);
        return [];
    }
}