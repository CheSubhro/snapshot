import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Button from '@mui/material/Button'
import './Home.css'
import axios from 'axios';
import { useEffect } from 'react'


const Home = () => {


    const options = ['Nature', 'Tigers', 'People']

    const [value, setValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [photos, setPhotos] = useState('');

    useEffect(() => {
        const url = `https://api.pexels.com/v1/search?query=nature`;
        const access_token = '563492ad6f9170000100000133d33750d93d4701ade76b3513d57544';
        axios.get(url, {
            headers: {
                'Authorization': `${access_token}`
            }
        }).then(response => {
            setPhotos(response.data.photos)
        })
    }, [])

    function handleSearch() {
        const url = "https://api.pexels.com/v1/search?query=" + value;
        const access_token = '563492ad6f9170000100000133d33750d93d4701ade76b3513d57544';
        axios.get(url, {
            headers: {
                'Authorization': `${access_token}`
            }
        }).then(response => {
            setPhotos(response.data.photos)
        })
    }

    return (
        <div className='main-container'>
            <div className='main-row'>
                <div className='main-col'>

                    <Autocomplete
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                        }}

                        id="combo-box-demo"
                        options={options}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Image" />}
                    />
                    <Button 
                    varient="contained"
                    onClick={handleSearch}>Search</Button>

                </div>
            </div>

            <div className='imagelist-row'>
                <div className='imagelist-col'>
                    {/* <ImageList>
                        <ImageListItem>

                            <img
                                src={photos}
                                srcSet=""
                                alt="Image"
                                loading="lazy"
                            />
                        </ImageListItem>
                    </ImageList> */}
                    <div className='img-row'>
                        {
                            photos && photos.map((data, index) => {
                                return (
                                    <>
                                        <img key={index} src={data.src.small} alt="" />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home