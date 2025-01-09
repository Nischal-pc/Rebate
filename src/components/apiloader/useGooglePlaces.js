import { useState, useEffect } from 'react';

const useGooglePlaces = (inputRef, type) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const handleInputChange = () => {
      const inputValue = inputRef.current.value;

      // If the input is empty, reset suggestions
      if (!inputValue) {
        setSuggestions([]);
        return;
      }

      const google = window.google; // Assuming Google Maps API is loaded

      const autocompleteService = new google.maps.places.AutocompleteService();

      // Define request based on type (postal code or address)
      let request = { input: inputValue };

      if (type === 'postalCode') {
        // Restrict the search to postal codes (if possible)
        request.types = ['(regions)'];
      }

      // Fetch place predictions from Google Places API
      autocompleteService.getPlacePredictions(request, (predictions, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          // If it's a postal code, only return the postal code from the description
          const formattedSuggestions = predictions.map(prediction => {
            return type === 'postalCode' ? prediction.description.split(',')[0] : prediction.description;
          });
          setSuggestions(formattedSuggestions);
        } else {
          setSuggestions([]);
        }
      });
    };

    const inputElement = inputRef.current;
    inputElement.addEventListener('input', handleInputChange);

    return () => {
      inputElement.removeEventListener('input', handleInputChange);
    };
  }, [inputRef, type]);

  return suggestions;
};

export default useGooglePlaces;
