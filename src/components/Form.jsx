import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';



function BasicExample() {
    const [emailAddrs, setEmailAddrs] = useState('');
        const elements = [
            {label: 'Email Address', type: 'email', placeholder: 'Enter Email'},
            {label: 'First Name', type: 'text', placeholder: 'Enter FirstName'},
            {label: 'Password', type: 'password', placeholder: 'Enter Password'},
        ];
  return (
    <Form>
        {elements.map((elem)=>{
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{elem.label}</Form.Label>
        <Form.Control type={elem.type} placeholder={elem.placeholder} />
      </Form.Group>

    
    </Form>
  );
})}


export default BasicExample;