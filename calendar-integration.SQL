CREATE DATABASE my_calendar
WITH
    ENGINE = 'google_calendar',
    PARAMETERS = {
        'credentials_file': '\path-to-your-file\credentials.json'
    }; 

-- search for events
SELECT id, created_at, author_username, text
FROM my_calendar.events
WHERE start_time = '2023-02-16'
AND end_time = '2023-04-09' LIMIT 20;

-- creating events
INSERT INTO my_calendar.events(start_time, end_time, summary, description, location, attendees, reminders, timeZone)
VALUES ('2023-02-16 10:00:00', '2023-02-16 11:00:00', 'MindsDB Meeting', 'Discussing the future of MindsDB', 'MindsDB HQ', '', 'Europe/Athens');

-- updating events
UPDATE my_calendar.events
SET summary     = 'MindsDB Meeting',
    description = 'Discussing the future of MindsDB',
    location    = 'MindsDB HQ',
    attendees   = '',
    reminders   = ''
WHERE event_id > 1 AND event_id < 10;                   -- used to update events in a given range

-- deleting events
DELETE
FROM my_calendar.events
WHERE id = '1';

