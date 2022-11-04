import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import './Home.css'

const Home = () => {

    const top100Image = [ 'Brown Plant during Golden Hour', 'City Buildings During Sunset', 'Silhouette of Buildings During Sunset', 'Aerial View Of City Buildings During Sunrise' ];

    function handleInput(value) {
        console.log(value)
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
                        onInputChange={(e) => handleInput(e)}
                        renderInput={(params) => <TextField {...params} label="Image" />}  
                    />
                </div>
            </div>
            <div className='imagelist-row'>
                <div className='imagelist-col'>
                    <ImageList>
                        <ImageListItem>
                            <img
                                src="https://picsum.photos/200/10"
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