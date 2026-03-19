
## Anomaly Analysis

### Insert Anomaly
It is not possible to insert a new product into the system without creating an order because all product information is tied to order_id.

### Update Anomaly
Sales representative details are repeated across multiple rows, leading to inconsistency. For example, SR01 (Deepak Joshi) has different office address formats such as "Nariman Point" and "Nariman Pt".

### Delete Anomaly
Deleting an order record can lead to loss of important product information if that product appears only in that row. For example, if the row containing product "Webcam (P008)" is deleted, all information about that product is lost because it is not stored separately.
