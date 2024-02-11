import { Button, Modal, TextInput } from "@mantine/core";
import { useState } from "react";

function MakePage({ hideModal }) {
  const [name, setName] = useState("");

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
      <Button className="mt-4 mr-4" variant="light" size="lg" color="red.6"> Generate Link </Button>
      <Button
      className="mt-4"
      variant="light" size="lg" color="red.6"
        onClick={() => {
          hideModal(false);
        }}
      >
        Cancel
      </Button>
      </div>
     
    </Modal>
  );
}

export default MakePage;
