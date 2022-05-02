export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums")
    const data = await res.json();

    const paths = data.map(portfolio => {
        return {
            params: {id : portfolio.id.toString()}
        }
    })

    return {
        paths,
        fallback: false 
    }
}

const Details = () => {
    return ( 
        <div>
            <h1>Details page</h1>
        </div>
     );
}
 
export default Details;