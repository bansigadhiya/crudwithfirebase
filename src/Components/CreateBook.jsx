import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AddBookData } from '../Services/Actions/Book.action';
import { v4 as uuid } from 'uuid';

function CreateBook() {

    const[initial,setInitial] = useState({
        title : '',
        author : ''
    })

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInitial({
            ...initial,[name]:value
        })
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        const unique_id = uuid();
        const uid = unique_id.slice(0,4)
        const data = ({...initial,id : uid})
        dispatch(AddBookData(data))
    }

    return (
        <div>
            <Container>
            <Form className='w-50 border rounded p-3 mx-auto mt-5' onSubmit={(e) => handlesubmit(e)}>
                <h4>Create book data</h4>
                <hr></hr>
                <Form.Group className="mb-3">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter book title.." name="title" value={initial.title} onChange={(e) => {handleChange(e)}}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Book Author</Form.Label>
                    <Form.Control type="text" placeholder="Enter book author.." name="author" value={initial.author} onChange={(e) => {handleChange(e)}}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Container>
        </div>
    )
}

export default CreateBook
