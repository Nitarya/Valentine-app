import { Button, Modal, TextInput, CopyButton } from "@mantine/core";
import { notifications, showNotification } from "@mantine/notifications";
import { useState } from "react";

function MakePage({ hideModal }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const domain = window.location.host;
  const generateLink = () => {
    if (name.length === 0) {
        notifications.show (
            {
                color: "red",
                title: "Valentine link",
                message: "Please enter the name"
            }
        )
      return;
    }

    const url = window.location.protocol + "//" + domain + "?name=" + name;
    setLink(url);
    notifications.show (
        {
            color: "green",
            title: "Valentine link",
            message: "Link has been generated. You can copy"
        }
    )
    console.log("Url is" + url);
  };

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
        <Button
          onClick={generateLink}
          className="mt-4 mr-4  cursor-pointer"
          variant="light"
          size="lg"
        
        >
          {" "}
          Generate Link{" "}
        </Button>
        <Button
          className="mt-4 cursor-pointer"
          variant="light"
          size="lg"
          color="red.6"
          onClick={() => {
            hideModal(false);
          }}
        >
          <span className="mx-2">Cancel</span>
        </Button>
        { link.length > 0 && (
          <CopyButton 
         
          value={link}>
            {({ copied, copy }) => (
              <Button
              className=" mt-4 cursor-pointer"
              variant="light"
              size="lg"
             
              color={copied ? "green" : "red"} onClick={copy}>
               
               <span className="mx-2">
               {copied ? "Copied url" : "Copy url"}
               </span>
           
              </Button>
            )}
          </CopyButton>
        )}
      </div>
    </Modal>
  );
}

export default MakePage;
