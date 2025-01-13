import { useForm } from "react-hook-form";
import { validationSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "../modal/Modal";
import { useRef, useState, useEffect, useContext } from "react";
import { DataContext } from "../context/context";
import { ref } from "yup";
const Appointment = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { formData, setFormData } = useContext(DataContext);
  const inputRef = useRef(null);

  const autocompleteRef = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: { date: null },
  });

  useEffect(() => {
    // Function to initialize Google Maps Autocomplete
    const initializeAutocomplete = () => {
      console.log("55", window.google);
      if (window.google) {
        const autocomplete = new window.google.maps.places.Autocomplete(
          inputRef.current,
          {
            types: ["geocode"],
          }
        );
        autocompleteRef.current = autocomplete;

        console.log("55", "window.google");
        autocomplete.addListener("place_changed", () => {
          console.log("clicked for plac");
          const place = autocomplete.getPlace();
          const address = {
            street: "",
            city: "",
            province: "",
            postalCode: "",
            country: "",
            fullAddress: "", // Initialize fullAddress
          };

          place.address_components.forEach((component) => {
            const types = component.types;
            if (types.includes("street_number")) {
              address.street = component.long_name;
            }
            if (types.includes("route")) {
              address.street += " " + component.long_name;
            }
            if (types.includes("locality")) {
              address.city = component.long_name;
            }
            if (types.includes("administrative_area_level_1")) {
              address.province = component.short_name;
            }
            if (types.includes("postal_code")) {
              address.postalCode = component.long_name;
            }
            if (types.includes("country")) {
              address.country = component.long_name;
            }
          });
          console.log(place.address_components);

          // Set full address here
          address.fullAddress = `${address.street}, ${address.city}, ${address.province}, ${address.postalCode}, ${address.country}`;
          setValue("address", address);

          // Update form data
          setFormData((data) => {
            console.log("on line 78");
            return {
              ...data,
              address,
              // Send the full address
            };
          });
        });
      } else {
        console.error("Google Maps API not loaded or inputRef is null");
      }
    };

    // Wait for Google Maps API to load
    const interval = setInterval(() => {
      console.log(inputRef.current);
      if (window.google && inputRef.current) {
        initializeAutocomplete();
      }
      clearInterval(interval);
    }, 100);

    // Cleanup listener on unmount
    return () => {
      if (autocompleteRef.current) {
        window.google.maps.event.clearInstanceListeners(
          autocompleteRef.current
        );
      }
      clearInterval(interval);
    };
  }, []);

  const onSubmit = async (data) => {
    console.log(data);

    if (data) {
      const res = await fetch(
        "https://hooks.zapier.com/hooks/catch/7641205/2muw6xz/",
        {
          method: "POST",
          body: JSON.stringify({
            lead: {
              source: "EBC",
              types: [],
            },
            customer: data.customer,
            address: data.address,
            meetingTime: formatMeetingTime(data.date, data.time),

            notes: "",
          }),
        }
      );
      const result = await res.json();
      if (result.status === "success") {
        setIsModalVisible(true);
      }
    }
  };
  function formatMeetingTime(date, time) {
    // Ensure the date is a valid Date object
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      throw new Error("Invalid date format. Expected a valid Date object.");
    }

    // Validate time format (HH:mm)
    const timeRegex = /^\d{2}:\d{2}$/;
    if (!timeRegex.test(time)) {
      throw new Error("Invalid time format. Expected format: HH:mm");
    }

    // Extract hours and minutes from the time string
    const [hours, minutes] = time.split(":").map(Number);

    // Set the hours and minutes on the Date object
    date.setUTCHours(hours, minutes, 0, 0);

    // Return the date as an ISO string in UTC
    return date.toISOString();
  }

  return (
    <div className="flex flex-col w-full">
      {/* Blue Background */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-48"></div>

      {/* Contact Form */}
      <div className="container mx-auto px-6 md:px-10 py-10 relative -mt-[15%]">
        <form
          className="bg-white shadow-2xl rounded-xl px-8 pt-8 pb-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
              Boost Your Savings with Expert Guidance
            </h2>
            <p className="text-gray-600">
              Book an appointment now and let us help you claim your savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                placeholder="Peter"
                {...register("customer.firstName")}
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              {errors?.customer?.firstName && (
                <p className="text-red-500 text-xs">
                  {errors.customer.firstName?.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                placeholder="Parker"
                {...register("customer.lastName")}
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              {errors?.customer?.lastName && (
                <p className="text-red-500 text-xs">
                  {errors.customer.lastName?.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                placeholder="example@mail.com"
                {...register("customer.email")}
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              {errors?.customer?.email && (
                <p className="text-red-500 text-xs">
                  {errors.customer.email?.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="123 456 7890"
                {...register("customer.mobile")}
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              {errors?.customer?.mobile && (
                <p className="text-red-500 text-xs">
                  {errors.customer.mobile?.message}
                </p>
              )}
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                {...register("date")}
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
              {errors.date && (
                <p className="text-red-500 text-xs">{errors.date.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="time"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Preferred Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                {...register("time")}
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
              {errors.time && (
                <p className="text-red-500 text-xs">{errors.time.message}</p>
              )}
            </div>
          </div>

          {/* Address */}
          <div className="mt-6">
            <label
              htmlFor="address"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Address
            </label>
            <input
              type="text"
              placeholder="123 Main Street"
              {...register("address.fullAddress")}
              ref={(e) => {
                register("address.fullAddress").ref(e);
                inputRef.current = e;
              }}
              className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />

            {errors?.address && (
              <p className="text-red-500 text-xs">
                {errors?.address?.fullAddress?.message}
              </p>
            )}
          </div>
          <div className="mt-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="dealer"
            >
              Appointment Type
            </label>
            <select
              {...register("dealer")}
              className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            >
              <option value="Canadian Choice Home Services">In person</option>
              <option value="Weaver Eco Home">Virtual</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-8 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Modal */}
      {isModalVisible && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <Modal setModalVisible={setIsModalVisible} />
          </div>
        </>
      )}
    </div>
  );
};

export default Appointment;
