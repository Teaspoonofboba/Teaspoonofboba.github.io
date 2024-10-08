async function sendCollab(ev) {
  ev.preventDefault();
  const Collaboration1 = document
    .getElementById('Collaboration1').value;
  const Collaboration2 = document
    .getElementById('Collaboration2').value;
    const Collaboration3 = document
    .getElementById('Collaboration3').value;
    const Collaboration4 = document
    .getElementById('Collaboration4').value;
    const Collaboration5 = document
    .getElementById('Collaboration5').value;
  const webhookBody = {
    embeds: [{
      title: 'Collaboration Form Submitted',
      fields: [{
          name: 'Name of the Business',
          value: Collaboration1
        },
        {
          name: 'Contacting Employee Name',
          value: Collaboration2
        },
        {
            name: 'Contact Phone Number',
            value: Collaboration3
          },
          {
            name: 'Bank Account for Invoices',
            value: Collaboration4
          },
          {
            name: 'Collaboration Idea ',
            value: Collaboration5
          },
      ]
    }],
  };
  const webhookUrl = 'https://discord.com/api/webhooks/1217555505484927027/2ZLj6Cfj648phkbZoZhPOZwHgeO2U23SwwHEZ0a-KyfOaQbZYq5UUBRRWTVFPHWBhJw9';
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(webhookBody),
  });
  location.reload()
}

async function sendApp(ev) {
  ev.preventDefault();
  const Question1 = document
    .getElementById('Question1').value;
  const Question2 = document
    .getElementById('Question2').value;
    const Question3 = document
    .getElementById('Question3').value;
    const Question4 = document
    .getElementById('Question4').value;
    const Question5 = document
    .getElementById('Question5').value;
    const Question6 = document
    .getElementById('Question6').value;
    const Question7 = document
    .getElementById('Question7').value;
  const webhookBody = {
    embeds: [{
      title: 'Application Form Submitted',
      fields: [{
          name: 'Name',
          value: Question1
        },
        {
          name: 'CSN',
          value: Question2
        },
        {
            name: 'Phone Number',
            value: Question3
          },
          {
            name: 'How long have you been in the city?',
            value: Question4
          },
          {
            name: 'What times would you generally be available for an interview?',
            value: Question5
          },
          {
            name: 'What timezone do you think in?',
            value: Question6
          },
          {
            name: 'What is your favourite fruit or flavour?',
            value: Question7
          },
      ]
    }],
  };
  const webhookUrl = 'https://discord.com/api/webhooks/1200449191147737109/KXUo92_LWl35Uwrh3Q6bel3iWczeJ7aNVW4UDmyvKuvGBCPSBcXR16ERPJh5uWbRQtcO';
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(webhookBody),
  });
  location.reload()
}
