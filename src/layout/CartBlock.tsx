
import { useEffect, useState } from "react";
import axios from "axios";
import style from '../pages/Home/index.module.css';

function CartBlock() {
    const url = 'https://book-db-shakhmurad.vercel.app/NFT-post-cartBlock';
    
    // Define the structure of your data using a TypeScript interface
    interface DataItem {
        id: number;
        img: string;
        price: string;
        name: string;
        item: string;
        HighestBid: string;
    }

    // Initialize the data state
    const [data, setData] = useState<DataItem[]>([]);

    useEffect(() => {
        // Fetch data from the API
        axios.get(url)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className={style['section-cartblock']}>
            {data.slice(0,3).map(({ id, item, price, HighestBid, img, name }: DataItem) => (
                <div key={id} className={style['cart-block-page']}>
                    <img src={`/img/${img}.png`} alt={name} />
                    <div className={style['cart-min-block']}>
                        <h2>{item}</h2>
                        <div className={style['cart-img-row']}>
                            <img src={`/img/${img}.png`} alt={name} />
                            <p>{name}</p>
                        </div>
                        <div className={style['block-space-between']}>
                            <div className={style['block-item']}>
                                <p style={{ opacity: '0.5' }}>Price</p>
                                <p>{price}</p>
                            </div>
                            <div className={style['block-item']}>
                                <p style={{ opacity: '0.5' }}>Highest Bid</p>
                                <p>{HighestBid}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CartBlock;
