import { useEffect, useState } from "react"

function App() {
  // =====================================
  // State
  // =====================================
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const [loadingProduct, setLoadingProduct] = useState(true);
  const [selectedId, setProductId] = useState(null);
  const [selectedProduct, setProduct] = useState({});
  const [productError, setProductError] = useState("");

  const [hasMoreProducts, setHasMoreProducts] = useState(false);

  // =====================================
  // Event Handler
  // =====================================

  // Update search state when search input is changed.
  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  // Set selected product ID when a product is clicked.
  const selectProduct = (event) => {
    setProductId(event.target.value);
  };

  // Fetch more products when load more products button is clicked.
  const loadMoreProducts = () => {
    fetchMoreProducts();
  };

  // =====================================
  // API Function
  // =====================================

  // Fetch products based on search state.
  const fetchProducts = async() => {
    setError("");
    setLoading(true);
    try {
      const limit = 10;
      const skip = 0;
      const api = `https://dummyjson.com/products` + 
                  (search.trim() 
                    ? `/search?q=${search}&limit=${limit}&skip=${skip}`
                    : `?limit=${limit}&skip=${skip}`)
                  ;
      const response = await fetch(api);
      if(!response.ok){
        throw new Error(`Fail to fetch products with status ${response.status}`);
      }
      const productsResponse = await response.json();
      setProducts(productsResponse.products);
      setHasMoreProducts(productsResponse.total > products.length + productsResponse.products.length);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreProducts = async() => {
    setError("");
    setLoading(true);
    try {
      const limit = 10;
      const skip = products.length;
      const api = `https://dummyjson.com/products` + (search.trim()
          ? `/search?q=${search}&limit=${limit}&skip=${skip}`
          : `?limit=${limit}&skip=${skip}`
      );
      const response = await fetch(api);
      if(!response.ok){
        throw new Error(`Failed to fetch products with error code ${response.status}`);
      }
      const productsResponse = await response.json();
      setProducts(previousProducts => [...previousProducts, ...productsResponse.products]);
      setHasMoreProducts(productsResponse.total > products.length + productsResponse.products.length);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }

  };

  // Fetch product based on selected product ID.
  const fetchProduct = async() => {
    setProductError("");
    setLoadingProduct(true);
    try {
      const api = `https://dummyjson.com/products/${selectedId}`;
      const response = await fetch(api);
      if(!response.ok){
        throw new Error(`⚠️Failed to fetch product with error code ${response.status}`);
      }
      const productResponse = await response.json();
      setProduct(productResponse);
    } catch (error) {
      setProductError(error.message);
    } finally {
      setLoadingProduct(false);
    }
  };

  // =====================================
  // Effects
  // =====================================

  // Fetch products when search and page state changes with 500 ms debouncing.
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProducts();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  // Fetch product when selected product ID is not null and changes.
  useEffect(() => {
    if(selectedId !== null){
      fetchProduct();
    } else {
      setLoadingProduct(false);
    }
  }, [selectedId]);

  return(
    <>
      <h3>Products</h3>
      <input type="text" value={search} onChange={updateSearch} placeholder="Search product"/>
      { loading 
          ? <p>Loading products...</p>
          : error.trim()
            ? <p>⚠️{error}</p>
            : products.length > 0
              ?  products.map(({id, title}) => (
                  <button key={id} value={id} onClick={selectProduct}>{title}</button>
                ))
            : <p>No products found.</p>
          
      }
      <br />
      <button disabled={!hasMoreProducts} onClick={loadMoreProducts}>Load More Products</button>

      <h3>Product Details</h3>
      { loadingProduct
          ? <p>Loading product...</p>
          : productError.trim()
            ? <p>⚠️{productError}</p>
            : selectedId === null
              ? <p>No product selected.</p>
              : <>
                  <p>Id: {selectedProduct?.id}</p>
                  <p>Title: {selectedProduct?.title}</p>
                  <img src={selectedProduct?.images?.[0]} alt={selectedProduct.title} height={200} width={200}/>
                </>
      }
    </>
  )
}

export default App