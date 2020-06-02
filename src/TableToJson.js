import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function TableToJson() {
  const [fileInput, setFileInput] = useState({ name: 'No file chosen' });

  const handleFileChange = (e) => setFileInput(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let fileContent;

    console.log(fileInput);

    let fr = new FileReader();
    fr.onload = () => {
      fileContent = fr.result.split('\n');
      fileContent.pop();

      console.log(fileContent);
      console.log(fileContent.map((x) => x.split(',')));
    };
    fr.readAsText(fileInput);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.File custom label={fileInput.name} name="file" onChange={handleFileChange} />
        <Button variant="success" type="submit">
          OK
        </Button>
      </Form>
    </>
  );
}

export default TableToJson;
