import { useMutation } from "@tanstack/react-query";

const formatMeetingTime = (date, time) => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Invalid date format. Expected a valid Date object.");
  }

  const timeRegex = /^\d{2}:\d{2}$/;
  if (!timeRegex.test(time)) {
    throw new Error("Invalid time format. Expected format: HH:mm");
  }

  const [hours, minutes] = time.split(":").map(Number);
  date.setUTCHours(hours, minutes, 0, 0);
  return date.toISOString();
};

export const useBookAppointment = () =>
  useMutation({
    mutationFn: async (data) => {
      console.log(data);
      try {
        const res = await fetch(
          "https://hooks.zapier.com/hooks/catch/7641205/2muw6xz/",
          {
            method: "POST",
            body: JSON.stringify({
              lead: {
                source: "EBC",
                types: [],
              },
              customer: data?.customer,
              address: data?.address,
              meetingTime: formatMeetingTime(data?.date, data?.time),

              notes: "",
            }),
          }
        );
      } catch (error) {
        throw new Error(error.message);
      }
    },
  });
