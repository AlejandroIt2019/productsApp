export const deleteProductById = async(id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/products/${id}`;
    const res = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    return data;
}