import { Button, Modal, TextInput, CopyButton } from "@mantine/core";
import { useState } from "react";


function MakePage({ hideModal }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("")
  const domain = window.location.host
  const generateLink = () => {
    if(name.length === 0) {
        alert("Please enter name")
        return
    }

    const url = window.location.protocol + "//" + domain + "?name=" + name
    setLink(url)
    console.log("Url is" + url) 
  }

  return (
    <Modal opened={true} withCloseButton={false}>
      <TextInput
      className="text-[1rem] text-purple-950 text-center"
        onChange={(event) => {
          setName(event.target.value);
        }}
        value={name}
        label="Enter Name"
      />
      <div className="flex justify-between">
      <Button  onClick={generateLink} className="mt-4 mr-4" variant="light" size="lg" color="red.6"> Generate Link </Button>
      <Button
      className="mt-4"
      variant="light" size="lg" color="red.6"
        onClick={() => {
          hideModal(false);
        }}
      >
        Cancel
      </Button>
     {

link.length > 0 && <CopyButton value={link}>
{({ copied, copy }) => (
  <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
    {copied ? 'Copied url' : 'Copy url'}
  </Button>
)}
</CopyButton>

     } 
      </div>
     
    </Modal>
  );
}

export default MakePage;
