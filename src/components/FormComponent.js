import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function FormComponent(props) {
    const keyword = props.keyword;
    const handlekeywordchange = props.handlekeywordchange;
    const searchQuote = props.searchQuote;
    const setIsLoaded = props.setIsLoaded;

    return (
      <Form inline>
      <FormControl 
      type="text" 
      placeholder="Search" 
      className="mr-sm-2" 
      value={keyword || ""} 
      name="keyword" 
      onChange={handlekeywordchange}
      />
      <Button variant="outline-primary"
        onClick={() => {
          setIsLoaded(false);
          searchQuote(keyword);
          }}>
        Search
      </Button>
      </Form>
    )
  }