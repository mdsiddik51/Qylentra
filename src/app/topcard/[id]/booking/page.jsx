"use client";
import { authClient, useSession } from "@/lib/auth-client";
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
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const Booking = () => {
  const router = useRouter();
  const params = useParams();
  const doctorId = params?.id;
  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const { data } = await authClient.token();
        const accessToken = data?.token;
        if (accessToken) {
          setToken(accessToken);
        }
      } catch (error) {
        console.error("Failed to get token:", error);
      }
    };

    fetchToken();
  }, []);

  // Session
  const { data: session } = useSession();

  // Submit form
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userData = {
      email: formData.get("email"),
      patientName: formData.get("patientName"),
      gender: formData.get("gender"),
      phone: formData.get("phone"),
      date: formData.get("date"),
      time: formData.get("time"),
    };
    await addAppointment(userData);
    e.target.reset();
  };

  const addAppointment = async (userData) => {
    try {
      const { data: jwtdata } = await authClient.token();

      const token = jwtdata?.token;
      if (!token) {
        toast.error("Authentication failed");
        return;
      }
      const res = await fetch(
        `https://qylentra-server.vercel.app/doctor/${doctorId}`,
        {
          headers: {
            authorization: `Brarer ${token}`,
          },
        },
      );
      const DoctorName = await res.json();
      const updateAppointment = {
        doctorId,
        userId: session?.user?.id,
        email: userData.email,
        doctorname: DoctorName.name,
        patientName: userData.patientName,
        gender: userData.gender,
        phone: userData.phone,
        date: userData.date,
        time: userData.time,
      };

      const response = await fetch(
        `https://qylentra-server.vercel.app/booking/${doctorId}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify(updateAppointment),
        },
      );

      const data = await response.json();
      if (!response.ok) {
        toast.error(data?.message || "Booking failed");
        return;
      }
      toast.success("Appointment booked successfully 🎉");
      router.push("/dashboard");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
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
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
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
            name="patientName"
            type="text"
            variant="secondary"
          >
            <Label>Patient Name</Label>
            <Input placeholder="Enter the Patient Name" />
          </TextField>
          <div className="flex gap-4">
            <div>
              <Select className="w-fit" name="gender" placeholder="Select one">
                <Label>Gender</Label>
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="mail" textValue="Florida">
                      Male
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="female" textValue="Delaware">
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
          <DatePicker isRequired className="w-full" name="date">
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
          <TimeField isRequired className="w-full" name="time">
            <Label>Time</Label>
            <TimeField.Group>
              <TimeField.Input>
                {(segment) => <TimeField.Segment segment={segment} />}
              </TimeField.Input>
            </TimeField.Group>
          </TimeField>
          <div className="flex gap-2 pt-4">
            <Button
              type="Submit"
              className="bg-linear-to-r from-emerald-500 to-teal-600 rounded-md text-white py-6 px-4 "
            >
              Confirm Booking
            </Button>
            <Button
              className="bg-linear-to-r from-emerald-500 to-teal-600 rounded-md text-white py-6 px-4 "
              variant="secondary"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
