### Delete pages

* The page must be supplied with the "id" of the record to be deleted 
* page can send a simple "DELETE" sql statement to the database to delete a record
* you should always build-in some kind of "confirmation" screen or step to make sure a user does not delete a record by mistake
 
### Full drill-down workflow (such as for an admin)

* On a site with a small amount of data, the first page might simply be a listing of "all" records
* For a site with a larger amount of data (such as a DVD database with more than 8,000 titles), it would be best to first have the user search for a narrower (less than 8,000) list of records

#### General Workflow

1. (optional) Search criteria page (to narrow down results)
2. Results page -- with links to perform actions on individual records:
  1. View (more details about a record)
  2. Edit
  3. Delete
3. Add page -- to add a new record

#### Add, edit or delete workflow

* Anytime you add, edit, or delete a record, you need to process some SQL (to INSERT, UPDATE or DELETE a record) and then you need to give the user a message or redirect them somewhere afterward
* With DELETE pages, it is ALWAYS a good idea to have a confirmation screen first -- to verify that the user DOES want to permanently delete that record.
* An alternate practice is to never delete records, but rather to have a "deleted_at" field in the database that you can set to the current time when the record is "deleted". This is typically known as a "soft delete". So instead of actually deleting the record, you just update that column for a particular record if user wishes to delete it. Then in any search results, you search for all records where the deleted_at column is NULL