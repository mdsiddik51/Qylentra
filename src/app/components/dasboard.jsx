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
  AlertDialog,
  Select,
  ListBox,
  Calendar,
  DateField,
  DatePicker,
  TimeField,
} from "@heroui/react";

import toast from "react-hot-toast";

const DashboardClient = ({
  user,
  appointments,
  DeletUser,
  updateAppointment,
}) => {
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

  const handeldelte = async (userid, id) => {
    await DeletUser(userid, id);
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();

    const formData = {
      email: e.target.email.value,
      patientName: e.target.patientName.value,
      gender: e.target.gender.value,
      phone: e.target.phone.value,
      date: e.target.date.value,
      time: e.target.time.value,
    };

    updateAppointment(formData, id);
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

                    <p>Doctor Name : {appointment.doctorname}</p>

                    <p>Gender: {appointment.gender}</p>

                    <p>Phone: {appointment.phone}</p>

                    <p>Date: {appointment.date}</p>

                    <p>Time: {appointment.time}</p>
                  </div>
                  <div className="flex justify-between pt-4">
                    <div>
                      <Modal>
                        <Button
                          variant="secondary"
                          className="rounded-full text-sm"
                        >
                          <PersonPencil className="size-4" />
                          Edit Appointment
                        </Button>

                        <Modal.Backdrop>
                          <Modal.Container placement="center">
                            <Modal.Dialog className="w-full max-w-md rounded-2xl">
                              <Modal.CloseTrigger />

                              <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                  <PersonPencil className="size-5" />
                                </Modal.Icon>

                                <Modal.Heading>
                                  Update Information
                                </Modal.Heading>
                              </Modal.Header>

                              <Modal.Body className="p-5">
                                <Surface variant="default">
                                  <form
                                    onSubmit={(e) =>
                                      handleUpdate(e, appointment._id)
                                    }
                                    className="flex flex-col gap-4"
                                  >
                                    <TextField
                                      isRequired
                                      className="w-full"
                                      name="email"
                                      type="email"
                                      variant="secondary"
                                    >
                                      <Label>Your Email</Label>
                                      <Input placeholder="Enter your email" />
                                    </TextField>
                                    <TextField
                                      isRequired
                                      className="w-full"
                                      type="text"
                                      variant="secondary"
                                    >
                                      <Label>Doctor Name</Label>
                                      <Input value={appointment.doctorname} />
                                    </TextField>

                                    <TextField
                                      isRequired
                                      className="w-full"
                                      name="patientName"
                                      type="text"
                                      variant="secondary"
                                    >
                                      <Label>Patient Name</Label>
                                      <Input placeholder="Enter the Patient Name" />
                                    </TextField>
                                    <div className="flex gap-4">
                                      <div>
                                        <Select
                                          className="w-fit"
                                          name="gender"
                                          placeholder="Select one"
                                        >
                                          <Label>Gender</Label>
                                          <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                          </Select.Trigger>
                                          <Select.Popover>
                                            <ListBox>
                                              <ListBox.Item
                                                id="mail"
                                                textValue="Florida"
                                              >
                                                Male
                                                <ListBox.ItemIndicator />
                                              </ListBox.Item>
                                              <ListBox.Item
                                                id="female"
                                                textValue="Delaware"
                                              >
                                                Female
                                                <ListBox.ItemIndicator />
                                              </ListBox.Item>
                                            </ListBox>
                                          </Select.Popover>
                                        </Select>
                                      </div>
                                      <div>
                                        <TextField
                                          isRequired
                                          className="w-fit"
                                          name="phone"
                                          type="tel"
                                          variant="secondary"
                                        >
                                          <Label>Phone</Label>
                                          <Input placeholder="Enter your phone number" />
                                        </TextField>
                                      </div>
                                    </div>
                                    <DatePicker
                                      isRequired
                                      className="w-full"
                                      name="date"
                                    >
                                      <Label>Date</Label>
                                      <DateField.Group fullWidth>
                                        <DateField.Input>
                                          {(segment) => (
                                            <DateField.Segment
                                              segment={segment}
                                            />
                                          )}
                                        </DateField.Input>
                                        <DateField.Suffix>
                                          <DatePicker.Trigger>
                                            <DatePicker.TriggerIndicator />
                                          </DatePicker.Trigger>
                                        </DateField.Suffix>
                                      </DateField.Group>
                                      <DatePicker.Popover>
                                        <Calendar aria-label="Event date">
                                          <Calendar.Header>
                                            <Calendar.YearPickerTrigger>
                                              <Calendar.YearPickerTriggerHeading />
                                              <Calendar.YearPickerTriggerIndicator />
                                            </Calendar.YearPickerTrigger>
                                            <Calendar.NavButton slot="previous" />
                                            <Calendar.NavButton slot="next" />
                                          </Calendar.Header>
                                          <Calendar.Grid>
                                            <Calendar.GridHeader>
                                              {(day) => (
                                                <Calendar.HeaderCell>
                                                  {day}
                                                </Calendar.HeaderCell>
                                              )}
                                            </Calendar.GridHeader>
                                            <Calendar.GridBody>
                                              {(date) => (
                                                <Calendar.Cell date={date} />
                                              )}
                                            </Calendar.GridBody>
                                          </Calendar.Grid>
                                          <Calendar.YearPickerGrid>
                                            <Calendar.YearPickerGridBody>
                                              {({ year }) => (
                                                <Calendar.YearPickerCell
                                                  year={year}
                                                />
                                              )}
                                            </Calendar.YearPickerGridBody>
                                          </Calendar.YearPickerGrid>
                                        </Calendar>
                                      </DatePicker.Popover>
                                    </DatePicker>
                                    <TimeField
                                      isRequired
                                      className="w-full"
                                      name="time"
                                    >
                                      <Label>Time</Label>
                                      <TimeField.Group>
                                        <TimeField.Input>
                                          {(segment) => (
                                            <TimeField.Segment
                                              segment={segment}
                                            />
                                          )}
                                        </TimeField.Input>
                                      </TimeField.Group>
                                    </TimeField>
                                    <Modal.Footer>
                                      <Button slot="close" variant="secondary">
                                        Cancel
                                      </Button>

                                      <Button type="submit" slot="close">
                                        Update Appointment{" "}
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
                    <div>
                      <AlertDialog>
                        <Button variant="danger">Delete Appointment</Button>
                        <AlertDialog.Backdrop>
                          <AlertDialog.Container>
                            <AlertDialog.Dialog className="sm:max-w-[400px]">
                              <AlertDialog.CloseTrigger />
                              <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>
                                  Delete Your Appointment permanently?
                                </AlertDialog.Heading>
                              </AlertDialog.Header>
                              <AlertDialog.Body>
                                <p>
                                  This will permanently delete the appointment
                                  for
                                  <strong> {appointment.patientName} </strong>.
                                  This action cannot be undone.
                                </p>
                              </AlertDialog.Body>
                              <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                  Cancel
                                </Button>
                                <Button
                                  onClick={() => handeldelte(appointment._id)}
                                  slot="close"
                                  variant="danger"
                                >
                                  Confirm Delete
                                </Button>
                              </AlertDialog.Footer>
                            </AlertDialog.Dialog>
                          </AlertDialog.Container>
                        </AlertDialog.Backdrop>
                      </AlertDialog>
                    </div>
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
