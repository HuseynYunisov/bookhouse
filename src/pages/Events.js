import React from "react";

const sampleEvents = [
  { id: 1, title: "Book Reading", date: "2025-07-15", description: "Join us for a reading of classic literature." },
  { id: 2, title: "Author Meetup", date: "2025-08-10", description: "Meet local authors and get your books signed." },
];

export default function Events() {
  return (
    <div>
      <h2>Upcoming Events</h2>
      {sampleEvents.map(event => (
        <div key={event.id} style={{ border: "1px solid #ccc", marginBottom: "1rem", padding: "10px" }}>
          <h3>{event.title}</h3>
          <p>Date: {event.date}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}
