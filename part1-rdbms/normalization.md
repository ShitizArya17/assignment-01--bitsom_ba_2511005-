
## Anomaly Analysis

### Insert Anomaly (prduct_id and product_name)
It is not possible to insert a new product into the system without creating an order because all product information is tied to order_id.

### Update Anomaly (Row 3: ORD1114 and Row 39: ORD1180)
Sales representative details are repeated across multiple rows, leading to inconsistency. For example, SR01 (Deepak Joshi) has different office address formats such as "Nariman Point" and "Nariman Pt".

### Delete Anomaly (ROW 13 ORD1185)
Deleting an order record can lead to loss of important product information if that product appears only in that row. For example, if the row containing product "Webcam (P008)" is deleted, all information about that product is lost because it is not stored separately.


## Normalization Justification
While it may appear simpler to keep all order, customer, product, and sales representative information in a single flat table, doing so introduces significant risks of data inconsistency, redundancy, and maintenance challenges. For example, in our dataset, the customer Priya Sharma (C002) appears across multiple orders (ORD1027, ORD1002, ORD1048) with repeated details such as email, city, and contact information. If her email changes, an update must be applied to all these rows—otherwise, we encounter an update anomaly. Similarly, inserting a new product like a “Tablet” without any orders is impossible in this flat structure, producing an insert anomaly, since every row requires order details. A delete anomaly is also evident: if the only order for a product such as the “Standing Desk” by a particular customer is deleted, information about that product and sales representative may be lost.

Normalization mitigates these issues by splitting the data into logically related tables such as Customer, Product, SalesRep, and Orders. Each table maintains its own data, linked via primary and foreign keys. For instance, updating Priya Sharma’s email now requires a single change in the Customer table, preventing inconsistencies. New products can be added independently in the Product table without requiring an order, and deleting an order does not remove historical product or sales representative information.

Thus, normalization improves data integrity, reduces redundancy, and simplifies maintenance, especially in growing businesses. While a flat table might seem easier initially, the long-term operational risks—incorrect reports, lost data, and inconsistent updates—far outweigh the perceived simplicity. In the context of this dataset, normalization is essential for reliable and scalable database management.
