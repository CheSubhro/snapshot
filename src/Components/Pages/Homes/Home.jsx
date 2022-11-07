import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import './Home.css'
import axios from 'axios';
import { createClient } from 'pexels';

const Home = () => {

    const [search, setSearch] = useState('');
    const [photos, setPhotos] = useState('');


    const top100Image = ['Nature', 'Tigers', 'Claas Jaguar chopper standing on meadow']

    function handleInput(event) {

        const search = event.target.value;
        console.log(search);
        setSearch(search);


        const url = "https://api.pexels.com/v1/search?query=" + search;
        const access_token = '563492ad6f9170000100000133d33750d93d4701ade76b3513d57544';
        axios.get(url, {
            headers: {
                'Authorization': `${access_token}`
            }
        }).then(response => {
            console.log(response)
            setPhotos(response.photos)
        })

    }

    return (
        <div className='main-container'>
            <div className='main-row'>
                <div className='main-col'>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        className='auto'
                        defaultValue={[top100Image[0]]}
                        value={top100Image[0]}
                        options={top100Image}
                        onChange={handleInput}
                        renderInput={(params) => <TextField {...params} label="Image" />}
                    />
                </div>
            </div>
            <div className='imagelist-row'>
                <div className='imagelist-col'>
                    <ImageList>
                        <ImageListItem>

                            <img
                                src={photos}
                                srcSet=""
                                alt="Image"
                                loading="lazy"
                            />
                        </ImageListItem>
                    </ImageList>
                </div>
            </div>
        </div>

    )
}

export default Home