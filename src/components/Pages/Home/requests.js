import useFetch from "../../../helpers/hooks/useFetch"

const [ data, error, loading ] = 
useFetch('/api/about')
useFetch('/api/home');