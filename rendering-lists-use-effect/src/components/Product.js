import './Product.css';

import { useEffect, useState } from 'react';

function Product(props) {
    const { title, image, price, hasGenius, hasFreeShipping } = props;

    const [isInWishlist, setWishlistStatus] = useState(false);

    const toggleWishlistStatus = () => {
        setWishlistStatus((previousValue) => !previousValue);
    };

    let addToWishlistButtonClasses = 'product-add-to-wishlist';
    if (isInWishlist) {
        addToWishlistButtonClasses += ' bg-yellow';
    }

    useEffect(() => {
        console.log('orice');
    });

    useEffect(() => {
        console.log('mount');
    }, []);

    useEffect(() => {
        isInWishlist && alert(`Ai adaugat produsul ${title} in wishlist.`);
    }, [isInWishlist]);

    return (
        <div className="Product">
            <div className="product-card">
                {hasGenius && <div className="genius">genius</div>}
                {hasFreeShipping ? (
                    <div className="transport">Transport gratuit</div>
                ) : (
                    <div className="transport">Transport 20 LEI</div>
                )}
                <img className="product-image" src={image}></img>
                <h2 className="product-title">{title}</h2>
                <p className="product-price">{price} LEI</p>
                <button className="product-add-to-cart">Adauga in cos</button>
                <button
                    onClick={toggleWishlistStatus}
                    className={addToWishlistButtonClasses}
                >
                    {!isInWishlist
                        ? 'Adauga in wishlist'
                        : 'Sterge din wishlist'}
                </button>
            </div>
        </div>
    );
}

export default Product;
