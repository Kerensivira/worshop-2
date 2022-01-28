import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { url } from '../Helpers/Url';

const HTML = () => {
    const [datos, setDatos] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get(url, "html")
            .then(res => {
                const datos = res.data;
                setDatos({ datos })
            })

    }
    return (
        <div>
            <progress max="100"></progress>
            {
                datos.map(a => (
                    <div>
                        <img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380361/workshop-2/PersonajePreguntas_gh645f.png" alt=" " />

                        <h2>a.pregunta</h2>
                    </div>
                ))}


        </div>
    );
};

export default HTML;
