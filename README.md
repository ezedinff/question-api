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


## Get List of Questions and Examples
### Query using root topic
- Request
```
GET /search?q=Biological Molecules
```
- Response
A List of question numbers that match the query.
```
[
    37,
    111,
    116,
    134,
    182,
    10,
    19,
    55,
    77,
    127,
    5,
    33,
    38,
    67,
    120,
    197,
    61,
    107,
    129,
    166,
    188,
    45,
    112,
    178,
    183,
    153,
    9,
    76,
    174,
    26,
    64,
    181,
    20,
    24,
    78,
    171,
    14,
    92,
    128,
    2,
    56,
    199,
    66,
    146,
    176
]
```
### Query using level 2 topic
- Request
```
GET /search?q=Identify cell structures (including organelles) of typical plant and animal cells from diagrams, photomicrographs and as seen under the light microscope using prepared slides and fresh material treated with an appropriate temporary staining technique:
```
- Response
A List of question numbers that match the query.
```
[
    7,
    66,
    164,
    176,
    118,
    184,
    15,
    48,
    87,
    190,
    8,
    21,
    76,
    83,
    142,
    188,
    19,
    23,
    50,
    64,
    115,
    163
]
```

### Query using leaf topic
- Request
```
GET /search?q=Chloroplasts
```
- Response
A List of question numbers that match the query.
```
[
    15,
    48,
    87,
    190
]
```