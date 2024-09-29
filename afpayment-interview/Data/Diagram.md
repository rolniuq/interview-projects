               +-------------------+               +---------------------+
               |                   |               |                     |
               |  AWS IoT Core     +---------------+  AWS Kinesis        |
               |                   |               |  Data Firehose      |
               +---------+---------+               +----------+----------+
                         |                                    |
                         |                                    |
                         |                                    |
                         |                                    |
                         |                                    |
    +--------------------+------+                     +-------+------------------+
    |                           |                     |                          |
    |   On-Premises Database    +-------+   +---------+ AWS RDS Instance         |
    |                           |       |   |         |                          |
    +--------------+------------+       |   |         +-------------+------------+
                    |                   |   |                       |
                    |                   |   |                       |
                    |                   |   |                       |
                    |                   |   |                       |
    +---------------+-----------+       |   |      +----------------+----------------+
    |                           |       |   |      |                                 |
    |   Third-Party Data        +-------+   +------+  AWS Data Exchange              |
    |                           |                  |                                 |
    +---------------+-----------+                  +----------------+----------------+
                    |                                             |
                    |                                             |
                    |                                             |
                    |                                             |
    +---------------+-----------+                                 |
    |                           |                                 |
    |   AWS Glue ETL Jobs       +---------------------------------+
    |                           |
    +---------------+-----------+
                    |
                    |
                    |
                    |
    +---------------+-----------+
    |                           |
    |   AWS Athena              |
    |                           |
    +---------------+-----------+
                    |
                    |
                    |
                    |
    +---------------+-----------+
    |                           |
    |   AWS Quick               |
    |                           |
    +---------------+-----------+


## Notes:
1. AWS Kinesis Data Firehose: stream real-time data from IoT devices, on-premises databases, and third-party sources to the data lake.
2. On-premises Database: store historical records.
3. AWS Data Exchange: ingest supplemental data from third-party entities for enriching internally generated data.
4. AWS Glue ETL Jobs: clean, transform and prepare data for analytics.
5. AWS Athena: query data in the data lake and perform ad-hoc analysis.
6. AWS QuickSight: create dashboards and visualize the insights derived from the data.
