SELECT *
FROM mindsdb_gmail.emails
WHERE query = 'alert from:*@google.com'
AND label_ids = "INBOX,UNREAD"
LIMIT 20;

-- writing emails
thread_id, message_id, to_email, subject, body)
VALUES ('187cbdd861350934d', '8e54ccfd-abd0-756b-a12e-f7bc95ebc75b@Spark', 'test@example2.com', 'Trying out MindsDB',
        'This seems awesome. You must try it out whenever you can.');


-- automating email replies
CREATE MODEL mindsdb.gpt_model
PREDICT response
USING
    engine = 'openai',
    max_tokens = 500,
    api_key = 'your_api_key', 
    model_name = 'gpt-3.5-turbo',
    prompt_template = 'From input message: {{body}}\
                        by from_user: {{sender}}\
                        In less than 500 characters, write an email response to {{sender}} in the following format:\
                        Start with proper salutation and respond with a short message in a casual tone, and sign the email with my name mindsdb';
                        