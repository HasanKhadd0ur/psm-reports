import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [

    { duration: '1m', target: 50 },  // Ramp up to 50 users over 1 minute
    { duration: '1m', target: 50 },  // Stay at 50 users for 1 minute
    { duration: '2m', target: 200 }, // Ramp up to 200 users over 2 minutes
    { duration: '2m', target: 200 }, // Stay at 200 users for 2 minutes
    { duration: '1m', target: 50 },  // Ramp down to 50 users over 1 minute
    { duration: '1m', target: 0 } 
],

};

export default function () {
  const url = 'https://localhost:5001/api/tracks/GetTracksByProject';  // Update with actual endpoint
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const projectIds = [1, 2, 3, 4, 5];  // Example project IDs
  const pageSizes = [10, 20, 50];       // Example page sizes
  const pageNumbers = [1, 2, 3];        // Example page numbers

  // Generate random data for load testing
  const projectId = Math.floor(Math.random() *200)+ 28858;
  const pageSize = pageSizes[Math.floor(Math.random() * pageSizes.length)];
  const pageNumber = pageNumbers[Math.floor(Math.random() * pageNumbers.length)];

  const payload = JSON.stringify({
    ProjectId: projectId,
    PageSize: pageSize,
    PageNumber: pageNumber,
  });

  let res = http.get(url+'/?projectId='+projectId+'&pageSize='+pageSize+'&pageNumber='+pageNumber);

  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  sleep(1);
}
	