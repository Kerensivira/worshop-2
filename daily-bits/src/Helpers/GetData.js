import { url } from "./Url";
import axios from 'axios'

export const getData = (param) =>{
    axios.get(url,param)
}