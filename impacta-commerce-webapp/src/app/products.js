import styles from './styles/'

function Installment(props){
    const fees = props.installment.hasFee ? "com juros" : "sem juros";
    
    return(
        <p>
            em{props.installment.number}x de R$ {props.installment.total} {fees}
        </p>
    )
    
}

function ProductListItem(props){
    const defaultProductImage = "https://placehold.co/250"

    return(
        <div>
            <img src={defaultProductImage} className='flex-shrink-0 me-3' />
            <div>
                <a href='#' className='stretched-link'>
                    <h3 className='mt-0'>{props.product.title}</h3>
                </a>
                <h4>R${props.product.amount}</h4>
                <Installment installment ={props.product.installment} />
            </div>
        </div>
    )
}

export default function ProductsForSaleList(){
    const json_products = [
        {
            title:"Caneca Personalizada de Porcelana",
            amount: 123.43,
            installment: {number: 3, total: 41.15, hasFee:true}
        },
        {
            title:"Caneca de Tulipa",
            amount: 123.43,
            installment: {number: 3, total: 41.15},
        },
    ];

    const product = json_products.map((x, index) => (
        <ProductListItem product={x} key={index}/>
    ));

    return <div className={styles.container}>{product}</div>
}