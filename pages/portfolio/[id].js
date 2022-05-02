// creating all the pages we need from all our album data
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
// getting the individual information from each album to display in their page
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/albums/" + id);
    const data = await res.json();

    return {
        props: { portfolio: data }
    }
}

const Details = ({ portfolio }) => {
    return ( 
        <div>
            <h1>{portfolio.title}</h1>
            <p>{portfolio.userId}</p>
        </div>
     );
}
 
export default Details;