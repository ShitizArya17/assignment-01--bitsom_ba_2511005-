## ETL Decisions

### Decision 1 — Date Standardization
Problem: Raw dates are inconsistent: formats like DD/MM/YYYY, YYYY-MM-DD, DD-MM-YYYY.
Resolution: Converted all dates to YYYY-MM-DD format for uniform loading into `dim_date`.

### Decision 2 — Category Standardization
Problem: Category values inconsistent (`electronics`, `Electronics`, `Groceries` vs `Grocery`).
Resolution: Standardized to consistent capitalization (`Electronics`, `Clothing`, `Grocery`) before inserting into `dim_product`.

### Decision 3 — Missing Store City
Problem: Some transactions had NULL store_city (e.g., Mumbai Central, Chennai Anna).
Resolution: Filled missing cities using other transactions from same store to maintain data integrity.



