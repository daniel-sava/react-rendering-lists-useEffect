import './ProductsList.css';

import Product from './Product';

function ProductsList() {
    const products = [
        {
            title: 'Brad artificial',
            price: 400,
            image: 'https://www.brazidelux.net/wp-content/uploads/2022/06/brad-artificial-paris-calitate-superioara-220-cm-2.jpg',
            hasGenius: true,
            hasFreeShipping: false,
        },
        {
            title: 'Pahare de vin',
            price: 20,
            image: 'https://cdn.librariadevinuri.ro/3099-large_default/set-6-pahare-vin-alb-400-ml-power.jpg',
            hasGenius: false,
            hasFreeShipping: false,
        },
        {
            title: 'Set 6 pahare de vin',
            price: 100,
            image: 'https://cdn.librariadevinuri.ro/3099-large_default/set-6-pahare-vin-alb-400-ml-power.jpg',
            hasGenius: true,
            hasFreeShipping: true,
        },
        {
            title: 'Brad artificial',
            price: 400,
            image: 'https://www.brazidelux.net/wp-content/uploads/2022/06/brad-artificial-paris-calitate-superioara-220-cm-2.jpg',
            hasGenius: true,
            hasFreeShipping: false,
        },
        {
            title: 'Pahare de vin',
            price: 20,
            image: 'https://cdn.librariadevinuri.ro/3099-large_default/set-6-pahare-vin-alb-400-ml-power.jpg',
            hasGenius: false,
            hasFreeShipping: false,
        },
        {
            title: 'Set 6 pahare de vin',
            price: 100,
            image: 'https://cdn.librariadevinuri.ro/3099-large_default/set-6-pahare-vin-alb-400-ml-power.jpg',
            hasGenius: true,
            hasFreeShipping: true,
        },
        {
            title: 'Brad artificial',
            price: 400,
            image: 'https://www.brazidelux.net/wp-content/uploads/2022/06/brad-artificial-paris-calitate-superioara-220-cm-2.jpg',
            hasGenius: true,
            hasFreeShipping: false,
        },
        {
            title: 'Pahare de vin',
            price: 20,
            image: 'https://cdn.librariadevinuri.ro/3099-large_default/set-6-pahare-vin-alb-400-ml-power.jpg',
            hasGenius: false,
            hasFreeShipping: false,
        },
        {
            title: 'Set 6 pahare de vin',
            price: 100,
            image: 'https://cdn.librariadevinuri.ro/3099-large_default/set-6-pahare-vin-alb-400-ml-power.jpg',
            hasGenius: true,
            hasFreeShipping: true,
        },
        {
            title: 'Brad artificial',
            price: 400,
            image: 'https://www.brazidelux.net/wp-content/uploads/2022/06/brad-artificial-paris-calitate-superioara-220-cm-2.jpg',
            hasGenius: true,
            hasFreeShipping: false,
        },
        {
            title: 'Pahare de vin',
            price: 20,
            image: 'https://cdn.librariadevinuri.ro/3099-large_default/set-6-pahare-vin-alb-400-ml-power.jpg',
            hasGenius: false,
            hasFreeShipping: false,
        },
        {
            title: 'Set 6 pahare de vin',
            price: 100,
            image: 'https://cdn.librariadevinuri.ro/3099-large_default/set-6-pahare-vin-alb-400-ml-power.jpg',
            hasGenius: true,
            hasFreeShipping: true,
        },
        {
            title: 'Brad artificial',
            price: 400,
            image: 'https://www.brazidelux.net/wp-content/uploads/2022/06/brad-artificial-paris-calitate-superioara-220-cm-2.jpg',
            hasGenius: true,
            hasFreeShipping: false,
        },
        {
            title: 'Pahare de vin',
            price: 20,
            image: 'https://cdn.librariadevinuri.ro/3099-large_default/set-6-pahare-vin-alb-400-ml-power.jpg',
            hasGenius: false,
            hasFreeShipping: false,
        },
        {
            title: 'Set 6 pahare de vin',
            price: 100,
            image: 'https://cdn.librariadevinuri.ro/3099-large_default/set-6-pahare-vin-alb-400-ml-power.jpg',
            hasGenius: true,
            hasFreeShipping: true,
        },
        {
            title: 'Brad artificial',
            price: 400,
            image: 'https://www.brazidelux.net/wp-content/uploads/2022/06/brad-artificial-paris-calitate-superioara-220-cm-2.jpg',
            hasGenius: true,
            hasFreeShipping: false,
        },
        {
            title: 'Pahare de vin',
            price: 20,
            image: 'https://cdn.librariadevinuri.ro/3099-large_default/set-6-pahare-vin-alb-400-ml-power.jpg',
            hasGenius: false,
            hasFreeShipping: false,
        },
        {
            title: 'Set 6 pahare de vin',
            price: 100,
            image: 'https://cdn.librariadevinuri.ro/3099-large_default/set-6-pahare-vin-alb-400-ml-power.jpg',
            hasGenius: true,
            hasFreeShipping: true,
        },
    ];

    return (
        <div className="ProductsList">
            {products.map((product, index) => {
                return (
                    <Product
                        key={index}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        hasGenius={product.hasGenius}
                        hasFreeShipping={product.hasFreeShipping}
                    />
                );
            })}
        </div>
    );
}

export default ProductsList;
