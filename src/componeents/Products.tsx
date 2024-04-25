import { useEffect, useState } from "react"

const Products = () => {
    const [currentProduct, setCurrentProduct] = useState(1);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<any[]>([]);

    
    useEffect(() => {
        setLoading(true)
        async function fetchData() {
            const response = await fetch(`https://dummyjson.com/products/${currentProduct}`)
            const data = await response.json();
            setProducts((prev) => [...prev, data])
            setLoading(false)
        }
        fetchData()
    }, [currentProduct])

  return (
    <>
        <div style={{display:"flex", gap:"1rem", flexWrap:"wrap"}}>
        {products && products.map(product => {
            return <div key={product.id}>
                <p>{product.title}</p>
                <img src={product.images[0]} alt="" style={{width: "100px", height:"150px", objectFit:"cover", }} />
            </div>
        })}
        </div>
        <button onClick={() => setCurrentProduct((curr) => curr + 1)}>{loading ? "Loading...": "Load more"}</button>
    </>
  )
}

export default Products