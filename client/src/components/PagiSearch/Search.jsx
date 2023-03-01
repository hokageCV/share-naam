import React, { useState } from 'react';
import { TextField, Container, Stack, Autocomplete, Button } from '@mui/material';
import { Navigate } from 'react-router-dom';

export default function Search(){
    const [search, setSearch] = useState(''); 
    const [tags, setTags] = useState([]); 

    const handleKeyPress = (e) => {
        if(e.keyCode === 13){  // 13 is for enter key   
            searchPosts()
        }
    }

    const handleAdd = (tag) => setTags([...tags, tag]);

    const handleDelete = (tagToDelete) => setTags( tags.filter((tag)=> tag !== tagToDelete) )

    const searchPosts = (searchQuery)=>{
        if(searchQuery.trim()){
            // dispatch to fetch search results
        }
        else{
            Navigate('/posts', {new:true})
        }
    }

    return(
        <Container >
            {/* Search Memory */}
            <TextField 
                name="search"
                variant='outlined'
                label="Search Memories"
                fullWidth
                onKeyPress={handleKeyPress}
                value={search}
                onChange={(e)=> setSearch(e.target.value) }
            />

            {/* Search by Tags */}
            <Stack>
                <Autocomplete 
                    multiple
                    id="tags"
                    value={tags}
                    options={tags}
                    renderInput={(params)=>(
                        <TextField 
                            {...params}
                            variant="standard"
                            label="Tags"
                        />
                    )}
                />
            </Stack>
            {/* <Chip
                style={{margin: '10px 0'}}
                value={tags} 
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search Tags"
                variant='outlined'
            /> */}

            {/* Search button */}
            <Button onClick={searchPosts} >
                Search
            </Button>
        </Container>
    )
}