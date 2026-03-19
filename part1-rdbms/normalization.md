
## Anomaly Analysis

### Insert Anomaly
It is not possible to insert a new product into the system without creating an order because all product information is tied to order_id.

### Update Anomaly
Sales representative details are repeated across multiple rows, leading to inconsistency. For example, SR01 (Deepak Joshi) has different office address formats such as "Nariman Point" and "Nariman Pt".

### Delete Anomaly
Deleting an order record may result in the loss of important information such as customer details or product information if that order was the only record associated with them.
