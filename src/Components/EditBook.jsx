import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AddBookData, UpdateBook } from '../Services/Actions/Book.action';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

function EditBook() {

    const {book} = useSelector((state) => state.Bookreducer);
    const [initial, setInitial] = useState(book)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInitial({
            ...initial, [name]: value
        })
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        const data = initial;
        dispatch(UpdateBook(data))
    }

    if(book == null){
        navigate('/')
    }else{
        return (
            <div>
                <Container>
                    <Form className='border rounded p-3 mx-auto mt-5 w-50 mx-auto' onSubmit={(e) => handlesubmit(e)}>
                        <h4>Edit book data</h4>
                        <hr></hr>
                        <Form.Group className="mb-3">
                            <Form.Label>Book Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter book title.." name="title" value={initial.title} onChange={(e) => { handleChange(e) }} />
                        </Form.Group>
    
                        <Form.Group className="mb-3">
                            <Form.Label>Book Author</Form.Label>
                            <Form.Control type="text" placeholder="Enter book author.." name="author" value={initial.author} onChange={(e) => { handleChange(e) }} />
                        </Form.Group>
    
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }

}

export default EditBook
