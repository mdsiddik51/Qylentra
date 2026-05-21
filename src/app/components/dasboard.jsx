
"use client";

import { authClient } from "@/lib/auth-client";
import { PersonPencil } from "@gravity-ui/icons";

import {
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Avatar,
  Button,
  InputGroup,
  Tabs,
} from "@heroui/react";

import toast from "react-hot-toast";

const DashboardClient = ({ user, appointments }) => {
  // Update profile
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      toast.error(error.message || "Update failed");
      return;
    }
    toast.success("Profile updated successfully 🎉");
  };

  return (
    <div className="pt-6 pb-10 w-11/12 mx-auto">
      <Tabs className="w-sm">
        <Tabs.ListContainer>
          <Tabs.List
            aria-label="Dashboard Tabs"
            className="w-full flex justify-start gap-2"
          >
            <Tabs.Tab id="overview" className="text-sm md:text-base">
              My Bookings
              <Tabs.Indicator />
            </Tabs.Tab>

            <Tabs.Tab id="profile" className="text-sm md:text-base">
              My Profile
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>

        <Tabs.Panel id="overview" className="pt-5">
          <div className="grid gap-4">
            {appointments?.length > 0 ? (
              appointments.map((appointment) => (
                <div
                  key={appointment._id}
                  className="border rounded-2xl shadow-sm p-4 bg-white"
                >
                  <h2 className="text-lg font-semibold text-gray-800">
                    {appointment.patientName}
                  </h2>

                  <div className="pt-2 space-y-1 text-sm text-gray-600">
                    <p>Email: {appointment.email}</p>

                    <p>Gender: {appointment.gender}</p>

                    <p>Phone: {appointment.phone}</p>

                    <p>Date: {appointment.date}</p>

                    <p>Time: {appointment.time}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <h2 className="text-xl font-semibold">No Appointments Found</h2>
              </div>
            )}
          </div>
        </Tabs.Panel>

        <Tabs.Panel id="profile" className="pt-8">
          <div className="shadow-lg rounded-3xl p-5 md:p-8 bg-white max-w-2xl mx-auto">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600">
                <Avatar className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full">
                  <Avatar.Image
                    className="w-full h-full object-cover"
                    alt={user?.name || "User"}
                    src={user?.image || ""}
                  />

                  <Avatar.Fallback>
                    {user?.name?.slice(0, 2) || "US"}
                  </Avatar.Fallback>
                </Avatar>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  {user?.name}
                </h2>

                <p className="text-sm md:text-base text-gray-500">
                  {user?.email}
                </p>
              </div>
            </div>

            <div className="flex justify-center pt-5">
              <Modal>
                <Button variant="secondary" className="rounded-xl text-sm">
                  <PersonPencil className="size-4" />
                  Edit Profile
                </Button>

                <Modal.Backdrop>
                  <Modal.Container placement="center">
                    <Modal.Dialog className="w-full max-w-md rounded-2xl">
                      <Modal.CloseTrigger />

                      <Modal.Header>
                        <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                          <PersonPencil className="size-5" />
                        </Modal.Icon>

                        <Modal.Heading>Update Information</Modal.Heading>
                      </Modal.Header>

                      <Modal.Body className="p-5">
                        <Surface variant="default">
                          <form
                            onSubmit={onSubmit}
                            className="flex flex-col gap-4"
                          >
                            <TextField isRequired name="name" type="text">
                              <Label>Name</Label>

                              <Input
                                name="name"
                                defaultValue={user?.name || ""}
                                placeholder="Enter your name"
                              />
                            </TextField>

                            <TextField isRequired name="image" type="text">
                              <Label>Image Link</Label>

                              <InputGroup>
                                <InputGroup.Input
                                  name="image"
                                  defaultValue={user?.image || ""}
                                  placeholder="https://imgUrl...."
                                  className="w-full"
                                />
                              </InputGroup>
                            </TextField>

                            <Modal.Footer>
                              <Button slot="close" variant="secondary">
                                Cancel
                              </Button>

                              <Button type="submit" slot="close">
                                Update
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
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default DashboardClient;
