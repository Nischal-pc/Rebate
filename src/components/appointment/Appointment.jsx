import { useForm } from "react-hook-form";
import { validationSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "../modal/Modal";
import { useState } from "react";

const Appointment = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: { date: null },
  });

  const onSubmit = async (data) => {
    console.log(data);
    if (data) {
      const res = await fetch(
        "https://hooks.zapier.com/hooks/catch/7641205/2muw6xz/",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await res.json();
      if (result.status === "success") {
        setIsModalVisible(true);
      }
    }
  };

  return (
    <div className="flex flex-col w-full relative">
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
              Boost Your Savings with Expert Guidance—Book Now!
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
                {...register("firstName")}
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs">
                  {errors.firstName.message}
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
                {...register("lastName")}
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs">
                  {errors.lastName.message}
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
                {...register("email")}
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
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
                {...register("phoneNumber")}
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs">
                  {errors.phoneNumber.message}
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
              id="address"
              name="address"
              placeholder="123 Main Street"
              {...register("address")}
              className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
            {errors.address && (
              <p className="text-red-500 text-xs">{errors.address.message}</p>
            )}
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
