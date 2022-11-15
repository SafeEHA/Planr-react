
export const checkStatus = (startDuration, endDuration) => {
    let status;
    let statusColor;

  let startDate = new Date (`${startDuration}`).getTime()
  let endDate = new Date (`${endDuration}`).getTime()
  
    // new Date() returns present date
    let currentDate = new Date().getTime();
  
    // status logic
    if (startDate <= currentDate && endDate <= currentDate) {
     
      status = "Completed";
      statusColor = "green"
      
    } else if (startDate < currentDate && endDate > currentDate) {
     
      status = "Ongoing";
      statusColor = "orange"
    
    } else if (startDate > currentDate && endDate > currentDate) {
      
      status = "Pending";
      statusColor = "grey"

    } else {
     
      status = "Failed";
      statusColor = "red"
        
    }
      return [status, statusColor]
  };