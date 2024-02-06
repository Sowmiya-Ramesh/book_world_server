## Installations: 
 - Express
 - Mongoose
 - CORS
 - config
 - nodemon
 - axios
 - npm install http-proxy-middleware

*** json data for books
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

{
  mem_id: {
    membership_id: 1,
    member_id: 701,
    status: true,
  },
  mem_name: 'Haritha',
  mem_phone: '999999999',
  mem_email: 'h@gmail.com'
}

{
   "issuance_id": 1,
    "book_id": 1,
    "issuance_date":"2023-06-04",
    "issuance_member": 702,
    "issued_by": "SK publisher",
    "target_return_date": "2023-06-04",
    "issuance_status": "available"
}