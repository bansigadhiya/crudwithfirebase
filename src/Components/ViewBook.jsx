import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetSingleBook, ViewBookData } from '../Services/Actions/Book.action';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { PenFill, Trash3Fill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function ViewBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { books,book } = useSelector((state) => state.Bookreducer);

  const handleEdit = (id) => {
    dispatch(GetSingleBook(id))
  }


  if(book !== null){
    navigate('/editBook');
  }else{
    return (
      <div>
        <ListGroup as="ol" numbered className='mt-4'>
          <h4>Books Data</h4>
          {
            books !== null ?
            books.map((d) => {
              return (
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
                  <div className="ms-3 me-auto">
                    <div><span className='fw-bold'>Title</span> :- {d.title}</div>
                    <div><span className='fw-bold'>Author</span> :- {d.author}</div>
                  </div>
                  <div>
                    <Button variant='info' className='me-3 text-white' onClick={() => {handleEdit(d.id)}}><PenFill /></Button>
                    <Button variant='danger'><Trash3Fill /></Button>
                  </div>
                </ListGroup.Item>
              )
            }) : null
          }
          </ListGroup>
      </div>
    )
  }
}

export default ViewBook
