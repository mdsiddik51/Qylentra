"use client";
import {
  Button,
  Input,
  Label,
  ListBox,
  Select,
  TextField,
  Calendar,
  DateField,
  DatePicker,
  TimeField,
} from "@heroui/react";
import { TbBrandBooking } from "react-icons/tb";
const Booking = () => {
  return (
    <div className="py-10 flex justify-center">
      <div className=" rounded-lg shadow-lg p-8 ">
        <div className="flex justify-center">
          <div className="text-center">
            <div className="relative mx-auto w-fit">
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-emerald-500 to-teal-600 blur-xl opacity-40"></div>

              <div className="relative p-1 rounded-full bg-linear-to-r from-emerald-500 to-teal-600">
                <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <img
                    src="/logo.png"
                    alt="logo"
                    className="h-14 w-14 object-contain"
                  />
                </div>
              </div>
            </div>

            <h2 className="py-4 text-2xl md:text-3xl font-bold text-gray-900">
              Book an Appointment
            </h2>
          </div>
        </div>
        <form className="flex flex-col gap-4">
          <TextField
            className="w-full"
            name="email"
            type="email"
            variant="secondary"
          >
            <Label>Your Email</Label>
            <Input placeholder="Enter your email" />
          </TextField>
          <TextField
            className="w-full"
            name="name"
            type="text"
            variant="secondary"
          >
            <Label>Doctor Name</Label>
            <Input placeholder="Enter your name" />
          </TextField>
          <TextField
            className="w-full"
            name="name"
            type="text"
            variant="secondary"
          >
            <Label>Patient Name</Label>
            <Input placeholder="Enter the Patient Name" />
          </TextField>
          <div className="flex gap-4">
            <div>
              <Select className="w-fit" placeholder="Select one">
                <Label>Gender</Label>
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="florida" textValue="Florida">
                      Male
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="delaware" textValue="Delaware">
                      Female
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>
            <div>
              <TextField
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
          <DatePicker className="w-full" name="date">
            <Label>Date</Label>
            <DateField.Group fullWidth>
              <DateField.Input>
                {(segment) => <DateField.Segment segment={segment} />}
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
                    {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                  </Calendar.GridHeader>
                  <Calendar.GridBody>
                    {(date) => <Calendar.Cell date={date} />}
                  </Calendar.GridBody>
                </Calendar.Grid>
                <Calendar.YearPickerGrid>
                  <Calendar.YearPickerGridBody>
                    {({ year }) => <Calendar.YearPickerCell year={year} />}
                  </Calendar.YearPickerGridBody>
                </Calendar.YearPickerGrid>
              </Calendar>
            </DatePicker.Popover>
          </DatePicker>
          <TimeField className="w-full" name="time">
            <Label>Time</Label>
            <TimeField.Group>
              <TimeField.Input>
                {(segment) => <TimeField.Segment segment={segment} />}
              </TimeField.Input>
            </TimeField.Group>
          </TimeField>
          <div className="flex gap-2 pt-4">
            <Button
              slot="close"
              className="bg-linear-to-r from-emerald-500 to-teal-600 rounded-md text-white py-6 px-4 "
              variant="secondary"
            >
              Cancel
            </Button>
            <Button
              slot="close"
              className="bg-linear-to-r from-emerald-500 to-teal-600 rounded-md text-white py-6 px-4 "
            >
              {" "}
              Confirm Booking
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
