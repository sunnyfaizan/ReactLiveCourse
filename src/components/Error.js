import {useRouteError} from 'react-router-dom';

const Error = () => {

    const pageNotFoundError = useRouteError();
    console.log({pageNotFoundError});
    return (
        <>
        <h1>{pageNotFoundError?.error?.message}</h1>
        <h2>{pageNotFoundError?.status + ' - Page ' + pageNotFoundError?.statusText}</h2>
        </>
    )
    
}

export default Error;