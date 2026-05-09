"use client";

import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";

const AddUserModal = ({ createUserAction }) => {
  return (
    <div>
      <Modal>
        <Button>Add User</Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Heading>Add New User</Modal.Heading>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form
                    action={createUserAction}
                    className="flex flex-col gap-4"
                  >
                    <TextField className="w-full">
                      <Label>Name</Label>
                      <Input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                      />
                    </TextField>

                    <TextField className="w-full">
                      <Label>Email</Label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </TextField>

                    <TextField className="w-full">
                      <Label>Role</Label>
                      <Input
                        name="role"
                        type="text"
                        placeholder="Enter user role"
                      />
                    </TextField>

                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>

                      <Button type="submit">
                        Add User
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default AddUserModal;