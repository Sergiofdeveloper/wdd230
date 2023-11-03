 // Get the timestamp input element by its id
 const timestampInput = document.getElementById("timestamp");

 // Create a new Date object to get the current date and time
 const currentDate = new Date();

 // Format the date and time as a string (adjust the format as needed)
 const formattedDate = currentDate.toISOString();

 // Set the timestamp input's value to the formatted date and time
 timestampInput.value = formattedDate