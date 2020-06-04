import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function TableToJson() {
  const [fileInput, setFileInput] = useState({ name: 'No file chosen' });

  const handleFileChange = (e) => setFileInput(e.target.files[0] || { name: 'No file chosen' });

  const handleSubmit = (e) => {
    e.preventDefault();
    let fileContent;

    console.log(fileInput);

    let fr = new FileReader();
    fr.onload = () => {
      fileContent = fr.result.split('\n');
      fileContent.pop(); //Remove last line break

      fileContent = fileContent.map((x) => x.split(','));

      let keys = fileContent.shift(); //Remove first element, which is a list of keys
      if (keys.length === [...new Set(keys)].length) {
        const jsonResult = fileContent.map((row) => {
          let rowObject = {};

          keys.forEach((key, index) => {
            rowObject[key] = row[index];
          });

          return rowObject;
        });
        console.log(fileContent);
        console.log(jsonResult);
      } else {
        console.log('keys not unique.');
      }
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
