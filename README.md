# Question API
RESTful API challenge for Pencil Learning Technologies.
## Requirements
- [x] Store all questions and their annotations from the following sheet into your database.
- [x] Figure out the right schema and store all topics from the Topics sheet in the above file also into the database. Each row in the sheet is a unique path in the topics tree
- [x] Create an API endpoint as follows

        ```
        METHOD: GET
        endpoint: /search
        query param: q=”name of topic” for e.g ?q=”Quantum Mechanics”
        ```
- [x] Make sure your code is making efficient queries, regardless of which topic is queried, including the root topic of the tree.
- [x] Host your code in any cloud provider, and your database in MongoDB Atlas (which gives free access) and share the exact details on how to access it and query it with example queries.
    - I have used MongoDB Atlas and Heroku. and you can access by going through this link: https://ez-question-api.herokuapp.com
- [x] Upload your code into GitHub and share it along with your submission.


## Get List of Questions
### Request
```
GET /search?q=Chloroplasts
```
### Response
A List of question numbers that match the query.
```
[
    15,
    48,
    87,
    190
]
```
