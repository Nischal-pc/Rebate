import { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    residentOfOntario: "",
    homeType: "",
    homeOccupied: "",
    enbridgeCustomer: "",
    heatingType: "",
    prequalifyConsent: "",
    primaryResidence: "",
    owernShip: "",
    heatingSystem: "",
    owneshipLength: "",
    income: "",
    homeAge: "",
    rebateType: "",
    postalCode: "",
    furnaceAge: "",
    heaterAge: "",
    gasProvider: "",
    gasBill: "",
    electricBill: "",
    address: "",
    estimatedSaved: "",
  });
  const [rebates, setRebates] = useState([]);

  return (
    <DataContext.Provider
      value={{ formData, setFormData, rebates, setRebates }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
