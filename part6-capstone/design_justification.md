Storage Systems

The architecture uses a combination of specialized storage systems to meet the four goals efficiently. For transactional patient data such as medical history and treatment records, a relational OLTP database like PostgreSQL is used due to its strong ACID guarantees, ensuring consistency and reliability in critical healthcare operations. For large-scale and diverse data such as ICU device streams, logs, and unstructured medical notes, a data lake is used to store raw data in its native format. This enables scalability and flexibility for future use cases.

A data warehouse is used for reporting purposes, where cleaned and transformed data from the data lake and OLTP systems is stored in a structured format. This supports efficient analytical queries required for monthly reports such as bed occupancy and departmental costs. For enabling natural language queries by doctors, a vector database is used. Patient records and notes are converted into embeddings and stored in the vector database, allowing semantic search and retrieval of relevant medical information based on user queries.

Finally, machine learning models for readmission prediction are trained on historical data from the warehouse, ensuring high-quality, structured inputs for accurate predictions.

OLTP vs OLAP Boundary

The OLTP system consists of the relational database that handles real-time patient data, including admissions, treatments, and updates by healthcare staff. This system is optimized for high concurrency and transactional integrity. The boundary between OLTP and OLAP is defined at the ETL layer, where data is extracted from the OLTP system and transformed before being loaded into the data warehouse.

The OLAP system includes the data warehouse and downstream analytical components such as reporting dashboards and machine learning pipelines. These systems are optimized for complex queries, aggregations, and historical analysis rather than real-time transactions. By separating OLTP and OLAP workloads, the architecture ensures that operational performance is not impacted by analytical queries.

Trade-offs

One significant trade-off in this architecture is the increased complexity due to the use of multiple specialized systems, including a data lake, data warehouse, vector database, and streaming infrastructure. While this improves scalability and performance for different use cases, it introduces challenges in data consistency, integration, and maintenance.

To mitigate this, a unified data governance and orchestration layer can be implemented using tools such as Apache Airflow or managed workflows. Additionally, adopting a lakehouse approach or using integrated platforms can reduce system fragmentation while retaining flexibility. Proper monitoring, data validation checks, and schema management are also essential to ensure data quality and system reliability across the architecture.
