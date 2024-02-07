## Installations: 
 - Express
 - Mongoose
 - CORS
 - config
 - nodemon
 - axios
 - npm install http-proxy-middleware

 ## API Endpoints [to GET, PUT and POST]

1. For Books
    - /api/books [to get list and add books]
    - /api/books/:id [to get particular book and update]
1. For Members
    - /api/members [to get list and add members]
    - /api/members/:id [to get particular member and update]
1. For Issuance
    - /api/issuance [to get list and add issuance]
    - /api/issuance/:id [to get particular issuance and update]


## json sample data 
[{
  book_id: 1,
  book_name: 'Travel around the world',
  book_cat_id: {
    cat_id: 2,
    cat_name: 'travel',
    sub_cat_name: 'tour'
  },
  book_collection_id:{
    collection_id: 1,
    collection_name: 'collections'
  }
  book_launch_date:'06/04/2023',
  book_publisher:'SR Publishers'
}]

[{
  mem_id: {
    membership_id: 1,
    member_id: 701,
    status: true,
  },
  mem_name: 'Haritha',
  mem_phone: '999999999',
  mem_email: 'h@gmail.com'
}]

[{
   "issuance_id": 1,
    "book_id": 1,
    "issuance_date":"2023-06-04",
    "issuance_member": 702,
    "issued_by": "SK publisher",
    "target_return_date": "2023-06-04",
    "issuance_status": "available"
}]

